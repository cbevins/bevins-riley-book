import { GedcomPlaceKeys } from '../places/GedcomPlaceKeys.js'

// Shared global Map() of Region keys to GeoLocation keys
export const RegionGeoLocationMap = new Map([
    ['Henry,IL', ['USA,IL,Henry']]
    ['NewboldVerdon', ['ENG,LEI']],
    ['NorthernMn', ['USA,MN,Itasca', 'USA,MN,Cass', 'USA,MN,Walker',
        'USA,MN,Meeker', 'USA,MN,Wright']],
])

/**
 * Shared global array of all ancestral migrations objects:
 *  {
 *      depart: {year, geoKey}, // GeoLocation Key to be matched to a Region
 *      arrive: {year, geoKey}, // GeoLocation Key to be matched to a Region
 *      group: [<ancestorNameKey>,...]
 *  }
*/
export const MigrationsArray = [
    {
        depart: {year: 1845, geoKey: 'ENG,LEI,Newbold Verdon'}, // GeoLocation Key to be matched to a Region
        arrive: {year: 1845, geoKey: 'USA,OH,Huron'},           // GeoLocation Key to be matched to a Region
        group: ['WilliamLongfordBevins1815', 'MaryBolt1822', 'WilliamAlfredBevins1843']
    }, {
        depart: {year: 1855, geoKey: 'USA,OH,Huron'},
        arrive: {year: 1855, geoKey: 'USA,IL,Henry'},
        group: ['WilliamLongfordBevins1815', 'MaryBolt1822', 'WilliamAlfredBevins1843']
    }, {
        depart: {year: 1869, geoKey: 'ENG,DEV,Brixham'},
        arrive: {year: 1869, geoKey: 'ENG,LEI,Newbold Verdon'}, // GeoLocations key
        group: ['MaryAnnWhite1848'],
    }, {
        depart: {year: 1871, geoKey: 'ENG,LEI,Newbold Verdun'},
        arrive: {year: 1871, geoKey: 'USA,IL,Henry'}, // GeoLocations key
        group: ['MaryAnnWhite1848'],
    }
]

export class MigrationMap {
    constructor(rootPerson, branchKey,
            regionGeoLocations=RegionGeoLocationMap,
            migrationsArray=MigrationsArray) {
        this._data = {
            branchKey,
            lineage: null,
            migrationsArray,
            regions: new Map(),
            regionGeoLocations,
            rootPerson,
            subjectNode: null
        }
        this._data.lineage = new Channels(rootPerson, true, branchKey)
        this._data.subjectNode = this.lineage.branchNode()
        this._descendNode(this._subjectNode)
    }

    _addAncestor(node) {
        // 1 Add this Person's birth year and place to their Region-Person entry
        this._addBirthPlace(node)
        // 2 Add this Person's migrations from MigrationArray to each appropriate Region
        this._addMigrations(node)
    }

    _addBirthPlace(node) {
        // 1 Find person's birth place and year
        const year = node.birthYear()
        const place = node.person.birthPlace()
        // 2 Find the Region containing this place from the RegionGeoLocationMap
        keys = GedcomPlaceKeys.get(place.text()).split(',')
        // 3 If this is a new Region for this lineage, add it to the Lineage Regions map
        // 4 If this is a new Person for this Region, add him to the Region's Person Map 
        // 5 Add this Person's birth year and place to their Region-Person entry
    }

    _addMigrations(node) {
        // 1 Search MigrationsArray for eny entries with this Person
        // 2 Find the Region containing the departure place from the RegionGeoLocationMap
        // 3 If this is a new Region for this Migration, add it to the Lineage Regions map
    }

    _descendNode(node, depth=0) {
        this._addAncestor(node)
        if (node.father) this._descendNode(node.father, depth+1)
        if (node.mother) this._descendNode(node.mother, depth+1)
    }
}