// Shared Singletons
import { getSylvan } from '$lib/sylvan/singletons.js'
import { Channels } from '$lib/lineage/Channels.js'

export const bookTitle = "Our Ancestors Through Time and Place"

// Channels instances
const _lineageArray = []
const _lineageMap = new Map()

// Returns array of [{value:, key:}]
export function getAllChannels() {
    if (! _lineageMap.size) createLineageMap()
    return _lineageArray
}
    
export function getChannels(key) {
    if (! _lineageMap.size) createLineageMap()
    return _lineageMap.get(key.toLowerCase())
}

function createLineageMap() {
    const started = new Date()
    
    const sylvan = getSylvan()
    const collin = sylvan.people().find('CollinDouglasBevins1952')
    const barbara = sylvan.people().find('BarbaraJeanneRiley1953')
    const drew = sylvan.people().find('DrewallynBevinsRiley1982')

    _lineageMap.set('collin', new Channels(collin, true))
    _lineageMap.set('barbara', new Channels(barbara, true))
    _lineageMap.set('drew', new Channels(drew, true))
    
    _lineageMap.set('bevins', new Channels(collin, true, 'SamuelBevins1881'))
    _lineageMap.set('collins', new Channels(collin, true, 'HattieJaneCollins1889'))
    _lineageMap.set('dereus', new Channels(barbara, true, 'GladysMaeDeReus1907'))
    _lineageMap.set('heddens', new Channels(collin, true, 'RalphVernonHeddens1909'))
    _lineageMap.set('nattrass', new Channels(collin, true, 'MargaretEvaNattrass1914'))
    _lineageMap.set('nelson', new Channels(barbara, true, 'MyrtleEstelleNelson1899'))
    _lineageMap.set('riley', new Channels(barbara, true, 'SheldonJamesRiley1902'))
    _lineageMap.set('trombley', new Channels(barbara, true, 'DorothyMayTrombley1927'))
    
    _lineageMap.forEach((channel, key) => {
        _lineageArray.push({ key, channel })
    })
    console.log(`Created 11 Channels instances in ${(new Date()-started)} msec`)
}
