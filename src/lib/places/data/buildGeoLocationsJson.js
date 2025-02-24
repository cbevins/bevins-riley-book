/**
 * Creates a new GeoLocationsJson.js file from the following sources:
 * - StarterGeoLocationsJson.js, which defines countries
 * - uscounties.csv
 * - uscities.csv
 * - worldcities.csv
 */
import fs from 'fs'
import { file2JsonArray } from '../../file-reader/file2JsonArray.js'
import { StarterGeoLocationsJson } from './StarterGeoLocationsJson.js'

const progName = (process.argv[1]).split('\\').pop()
const usCityCsv = 'uscities.csv'
const usCountyCsv = 'uscounties.csv'
const worldCityCsv = 'worldcities.csv'

function addWorldCities(map, records) {
    let n = 0
    for(let i=1; i<records.length; i++) {
        const[city,city_ascii,lat,lng,country,iso2,iso3,admin_name,capital,population,id] =
            csvParse(records[i])
        // if (city !== city_ascii) console.log(`World City '${city}' ascii '${city_ascii}'`)
        // Only add non-USA cities whose country is already in the GeoLocationsDb
        if (iso3 !== 'USA' && StarterGeoLocationsJson.has(iso3)) {
            const key = iso3 + ',' + admin_name + ',' + city
            const entry = [lat, lng, city]
            map.set(key, entry)
            n++
        }
    }
    return n
}

function addUsCities(map, records) {
    let n = 0
    for(let i=1; i<records.length; i++) {
        // Note: the "county_name" field corresponds to the US County Db "county" field
        const [city,city_ascii,state_id,state_name,county_fips,county_name,lat,lng,
            population,density,source,military,incorporated,timezone,ranking,zips,id] =
            csvParse(records[i])
        // const sqmi = population / density
        // if (city !== city_ascii) console.log(`City '${city}' ascii '${city_ascii}'`)
        // State and county must be in the GeoLocationDB
        const countyKey = ['USA', state_id, county_name].join(',')
        if (! map.has(countyKey)) {
            // Special handling for PR
            if (state_id === 'PR') {
                map.set(countyKey, [lat, lng, county_name])
                n++
            } else {
                throw new Error(`Us City record ${i} for '${city}' has unknown state_id,county '${state_id},${county_name}' with key '${countyKey}'`)
            }
        }
        const key = ['USA', state_id, county_name, city].join(',')
        const entry = [lat, lng, city]
        map.set(key, entry)
        n++
    }
    return n
}

function addUsCounties(map, records) {
    let n = 0
    for(let i=1; i<records.length; i++) {
        // Note: the "county" field (and not the "county_acsii" field) corresponds
        // to the US Cities Db "county_name" field, so "county" is used as the key
        const [county,county_ascii,county_full,county_fips,state_id,state_name,lat,lng,population] =
            csvParse(records[i])
        // if (county !== county_ascii) console.log(`County '${county}' ascii '${county_ascii}'`)
        // State must be in the map
        const stateKey = 'USA' + ',' + state_id
        if (! map.has(stateKey))
            throw new Error(`Us County record ${i} for '${county}' has unknown state_id ${state_id} with key ${stateKey}`)
        const key = ['USA', state_id, county].join(',')
        const entry = [lat, lng, county]
        map.set(key, entry)
        n++
    }
    return n
}

function csvParse(record) {
    const parsed = []
    const fields = record.split('","')
    for (let i=0; i<fields.length; i++) {
        parsed.push(fields[i].replaceAll('"', ''))
    }
    return parsed
}

// worldCityAdmins('GBR')
// List all UK admin_names
function worldCityAdmins(iso3Key) {
    const admins = new Set()
    for (const [key, entry] of worldCityDb.entries()) {
        const [iso3, iso2, admin_name, city, city_ascii, lat, lng] = entry
        if (iso3 === iso3Key) admins.add(admin_name)
    }
    const ar = Array.from(admins).sort()
    console.log(`World City Admins for '${iso3Key}':`)
    console.log(ar)
}

export async function buildGeoLocations(verbose=false) {
    const map = new Map()
    // Start withe the seed locations
    for(const [key,entry] of StarterGeoLocationsJson)
        map.set(key,entry)
    if (verbose) console.log(`Start with ${map.size} country and region locations'`)

    // Add the US county records, validating their state
    const usCountyRecords = await file2JsonArray(usCountyCsv)
    let n = addUsCounties(map, usCountyRecords)
    if (verbose) console.log(`Added ${n} US Counties from file '${usCountyCsv}'`)

    // Then add the US city records, validating their state and county
    const usCityRecords = await file2JsonArray(usCityCsv)
    n = addUsCities(map, usCityRecords)
    if (verbose) console.log(`Added ${n} US Cities from file '${usCityCsv}'`)

    // Then build World cities db, validating US state
    const worldCityRecords = await file2JsonArray(worldCityCsv)
    n = addWorldCities(map, worldCityRecords)
    if (verbose) console.log(`Added ${n} World Cities from file '${worldCityCsv}'`)
    return map
}

export async function writeGeoLocationsJson(fileName='GeoLocationsJson.js') {
    const map = await buildGeoLocations(true)
    let js = `// auto-generated by ${progName} on ${new Date().toLocaleString()}\n`
    js += 'export const GeoLocationsJson = new Map([\n'
    for(const [key, entry] of map) {
        const [lat, lng, name] = entry
        // console.log(key, lat, lng, name)
        js += `    ["${key}", [${lat}, ${lng}, "${name}"]],\n`
    }
    js += '])\n'
    // Write the Javascript to a file for later use
    fs.writeFile(fileName, js, function (err) {
        if (err) throw err
    })
}

function reformatStarter(fileName='StarterGeoLocationsJson.js') {
    let js = 'export const StarterGeoLocationsJson = new Map([\n'
    for(const [key, entry] of StarterGeoLocationDb) {
        const [junk, name, lat, lng] = entry
        const item = [key, [lat, lng, name]]
        js += `    ["${key}", [${parseFloat(lat).toFixed(6)}, ${parseFloat(lng).toFixed(6)}, "${name}"]],\n`
        // js += JSON.stringify(item) + ',\n'
    }
    js += '])\n'
    // Write the Javascript to a file for later use
    fs.writeFile(fileName, js, function (err) {
        if (err) throw err
    })

}
writeGeoLocationsJson()
// reformatStarter()