import { GedcomPlaceKeys } from '../GedcomPlaceKeys.js'
import { GeoLocationDb } from '../GeoLocationDb.js'

// Level 0 = country
// Level 1 = USA state, ENG/SCO/IRE/NIR/WAL county, CAN/FRA/NOR/SWE province, BEL/NLD region
// Level 2 = USA county, non-USA country City
// Level 4 = USA City
const Levels = ['Country', 'State/Shire/Provence', 'US County', 'US City']

function validateGedcomPlaceKeys(geo) {
    let n = 0
    let err = 0
    for( const [plac, geoKey] of GedcomPlaceKeys.entries()) {
        n++
        const loc = geo.search(geoKey)
        const country = loc.key(0)
        let log = false
        if (country === 'USA') {
            // USA GEDCOM PLAC keys must be in GeoLocationsJson to the county level (3)
            if (loc.foundDepth() < 3 && loc.keyDepth() >=3) log = true
        } else {
            // Non-USA GEDCOM PLAC keys must be in GeoLocationsJson to the region/province level (2)
            if (loc.foundDepth() < 2 && loc.keyDepth() >=2) log = true
        }
        if (log) {
            console.log(
                `${++err} GedcomPlace ${n}: ["${plac}", "${geoKey}"] found ${loc.foundDepth()} of ${loc.keyDepth()} keys.`)
            err++
        }
    }
    console.log(`There were ${err} errors found.\n`)
}

function validateKeysAndCoordinates(geo, missingOnly=false) {
    const freq = new Map()
    for( const [plac, geoKey] of GedcomPlaceKeys.entries()) {
        if (! freq.has(geoKey)) freq.set(geoKey,0)
        const n = freq.get(geoKey)
        freq.set(geoKey, n+1)
    }
    console.log(`GedcomPlaceKeys has ${GedcomPlaceKeys.size} PLAC entries `
        + `referencing ${freq.size} of the ${geo.size()} GeoLocationJson entries.\n`)
    console.log('Validating GeoLocationJson key and coordinate presence...')
    const ar = Array.from(freq.entries()).sort((a, b) => { return a[1] - b[1] })
    let logged = 0
    for(let i=0; i<ar.length; i++) {
        const [key, count] = ar[i]
        // Check if this key has its own
        const loc = geo.search(key)
        const keyDepth= loc.keyDepth()
        const foundDepth = loc.foundDepth()
        const ast = (keyDepth === foundDepth) ? ' ' : '*'
        const lat = loc.lat()
        const lng = loc.lng()
        const missingCoords = (Math.abs(lat)<0.00001 || Math.abs(lng) < 0.0001)
        const criticalDepth = (loc.key(0)==='USA') ? 3 : 2
        let log = 0
        if(! missingOnly) {
            log = 1
        } else if (keyDepth < criticalDepth) { // like 'USA', 'USA,MN', 'NLD'
            if (foundDepth < keyDepth) log = 2
            if (!log && missingCoords) log = 3  // missing coords
        } else if (foundDepth < criticalDepth) {
            log = 4
        } else if (foundDepth <= criticalDepth && missingCoords) {
            // console.log(`\nFoundDepth ${foundDepth}, critical ${criticalDepth}, keyDepth ${keyDepth}`)
            log = 5
        } 
        if (log) {
            console.log(`    n: ${count}, found ${foundDepth} of ${keyDepth}${ast} `
                + `(case ${log}) for key "${key}" coords [${lat}, ${lng}]`)
            logged++
        }
    }
    console.log(`There were ${logged} errors found.\n`)
}

const geo = new GeoLocationDb()
console.log('---------------------------------')
console.log(`\nValidating ${GedcomPlaceKeys.size} GedcomPlaceKeys.js record GeoLocationDb keys...`)
validateGedcomPlaceKeys(geo)
validateKeysAndCoordinates(geo,true)