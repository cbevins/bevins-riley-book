import { GedcomPlaces } from '../GedcomPlaces.js'
import { GeoLocationDb } from '../GeoLocationDb.js'

// Level 0 = country
// Level 1 = US state, ENG/SCO/IRE/NIR/WAL county, CAN/FRA/NOR/SWE province, BEL/NLD region
// Level 2 = US county, other country City
// Level 4 = US City
const Levels = ['Country', 'State/Shire/Provence', 'US County', 'US City']

function validateGedcomPlaces(geo) {
    console.log(`\n\nValidating ${GedcomPlaces.size} GedcomPlaces.js record GeoLocationDb keys...`)
    let n = 0
    let err = 0
    for( const [plac, geoKey] of GedcomPlaces.entries()) {
        n++
        const loc = geo.get(geoKey)
        const country = loc.keyPart(0)
        // US GEDCOM PLAC keys must be in GeoLocationsJson to the county level (3)
        if (country === 'USA') {
            if (loc.found() < 3 && loc.keyDepth() >=3)
            console.log(
                `${++err} GedcomPlace ${n}: ["${plac}", "${geoKey}"] found ${loc.found()} of ${loc.keyDepth()} keys.`)
        }
        // NON-US GEDCOM PLAC keys must be in GeoLocationsJson to the region/province level (2)
        else {
            if (loc.found() < 2 && loc.keyDepth() >=2)
                console.log(
                    `${++err} GedcomPlace ${n}: ["${plac}", "${geoKey}"] found ${loc.found()} of ${loc.keyDepth()} keys.`)
        }
    }
}

const geo = new GeoLocationDb()
console.log(`The geo-location map has ${geo.size()} entries.`)
validateGedcomPlaces(geo)