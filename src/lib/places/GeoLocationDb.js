/**
 * Class that support geo-location services (lat,lng) based on location keys.
 */
import { GeoLocationsJson } from './GeoLocationsJson.js'

export class GeoSearch {
    constructor(keys, entries) {
        this._data = {keys, entries}
    }

    // Returns *best* (final) entry [<lat>, <lng>, <segmentName>]
    best() { return this.foundDepth() ? this.entry(this.foundDepth()-1) : null}
    lat() {
        const best = this.best()
        return best ? best[0] : 0
    }
    lng() {
        const best = this.best()
        return best ? best[1] : 0
    }
    segment() {
        const best = this.best()
        return best ? best[2] : ''
    }

    entries() { return this._data.entries }
    // Returns the found GeoLocationDb entry at idx
    // which is an array of [<lat>, <lng>, <segmentName>]
    entry(idx) { return this._data.entries[idx] }
    entryLat(idx) { return this._data.entries[idx][0] }
    entryLng(idx) { return this._data.entries[idx][1] }
    entryName(idx) { return this._data.entries[idx][2] }

    // Returns an array of found entry segment names in search order
    entryNames() {
        const names = []
        for(let i=0; i<this.foundDepth(); i++)
            names.push(this.entryName(i))
        return names
    }

    // Returns *found* number of entries (0=none, 1=country, 2=state, 3=county, etc)
    foundDepth() { return this._data.entries.length }

    // Returns the full key string of the best entry
    foundKey() {
        let a = []
        for(let i=0; i<this.foundDepth(); i++) a.push(this.key(i))
        return a.join(',')
    }

    // Returns *full* search key string
    searchKey() { return this._data.keys.join(',') }

    // Returns the full *found* location name in key search order,
    // If reverse is FALSE, returns string like 'USA, MN, Itasca, Grand Rapids'
    // If reverse is TRUE, returns string like 'Grand Rapids, Itasca, MN, USA'
    fullName(reverse=false, sep=', ') {
        const names = this.entryNames()
        if (reverse) names.reverse()
        return names.join(sep)
    }

    // Returns key *segment* at idx
    key(idx) { return this._data.keys[idx] }

    // Returns array of all the search key *segments*
    keys() { return this._data.keys }

    // Returns number of search key segments
    keyDepth() { return this._data.keys.length }
}

export class GeoLocationDb {
    constructor(geoLocations=GeoLocationsJson) {
        this._data = {map: geoLocations}
    }

    // Returns GeoSearch of the best location fit to the fullKey
    search(fullKey) { 
        const found = []
        const keyStack = []
        const keyParts = fullKey.split(',')
        for (let i=0; i<keyParts.length; i++) {
            keyStack.push(keyParts[i])
            const partialKey = keyStack.join(',')
            const entry = this._data.map.get(partialKey)
            if (! entry) break
            found.push(entry)
        }
        return new GeoSearch(keyParts, found)
    }

    has(key) { return this._data.map.has(key) }

    size() { return this._data.map.size }
}

export function logGeoLocation(db, fullKey) {
    console.log('GeoLocation for', fullKey)
    const loc = db.search(fullKey)
    console.log('searchKey() =>', loc.searchKey())
    console.log('keyDepth() =>', loc.keyDepth())
    console.log('foundKey() =>', loc.foundKey())
    console.log('foundDepth() =>', loc.foundDepth())
    console.log('fullName() =>', loc.fullName())
    console.log('reverseName() =>', loc.fullName(true))
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