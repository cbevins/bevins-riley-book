/**
 * Class that support geo-location services (lat,lng) based on location keys.
 */
import { GeoLocationsJson } from './GeoLocationsJson.js'

export class GeoLocation {
    constructor(fullKey, lat, lng, names, keyDepth, found) {
        const keyParts = fullKey.split(',')
        this.data = {fullKey, keyParts, lat, lng, names, keyDepth, found}
    }

    // Returns the number of partial keys found in the database
    found() { return this.data.found }

    // Returns the full key string search string (like 'USA,MN,Itasca,Grand Rapids')
    fullKey() { return this.data.fullKey }

    // Returns the full *found* location name in key search order,
    // like 'USA, MN, Itasca, Grand Rapids'
    fullName(sep=', ') { return this.data.names.join(sep)}

    // Returns the decimal latitude of the last *found* partial key location
    lat() { return this.data.lat }

    // Returns the decimal longitude of the last *found* partial key location
    lng() { return this.data.lng }

    // Returns the total number of partial keys in the fullKey
    keyDepth() { return this.data.keyDepth}

    // Returns the keyPart for idx
    keyPart(idx) { return this.data.keyParts[idx]}
    keyParts() { return this.data.keyParts}

    // Returns the name of the last *found* partial key
    name() { return this.data.names[this.data.names.length-1] }

    // Returns an array of the *found* partial key locations in key depth order
    names() { return this.data.names }
    
    // Returns the full *found* location name in reversed key search order,
    // like 'Grand Rapids, Itasca, MN, USA'
    reverseName(sep=', ') {
        const names = []
        for(let i=this.data.names.length-1; i>=0; i--)
            names.push(this.data.names[i])
        return names.join(sep)
    }
}

export class GeoLocationDb {
    constructor() {
        this.data = {map: GeoLocationsJson}
    }

    get(fullKey) { 
        // Get the entries for each key depth
        const names = []
        const keyParts = fullKey.split(',')
        const keyDepth = keyParts.length
        const stack = []
        let entry
        let lat = 0
        let lng = 0
        let name = ''
        let found = 0
        for (let i=0; i<keyDepth; i++) {
            stack.push(keyParts[i])
            let partialKey = stack.join(',')
            entry = this.data.map.get(partialKey)
            if (! entry) break
            found++
            lat = entry[0]
            lng = entry[1]
            name = entry[2]
            names.push(name)
        }
        return new GeoLocation(fullKey, lat, lng, names, keyDepth, found)
    }

    has(key) { return this.data.map.has(key) }

    size() { return this.data.map.size }
}

export function logGeoLocation(db, fullKey) {
    console.log('GEoLocation for', fullKey)
    const loc = db.get(fullKey)
    console.log('fullKey() =>', loc.fullKey())
    console.log('keyDepth() =>', loc.keyDepth())
    console.log('found() =>', loc.found())
    console.log('fullName() =>', loc.fullName())
    console.log('reverseName() =>', loc.reverseName())
    console.log('names() =>', loc.names())
    console.log('name() =>', loc.name())
    console.log('lat() =>', loc.lat())
    console.log('lng() =>', loc.lng())
}

export function examples(keyArray) {
    const db = new GeoLocationDb()
    console.log(`GeoLocationDb has ${db.size()} entries.`)
    for(let i=0; i<keyArray.length; i++)
        logGeoLocation(db, keyArray[i])
}

// examples(['USA,MN,Itasca,Grand Rapids,726 4th Av SE'])