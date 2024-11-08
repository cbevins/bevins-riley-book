    // import { getManifest } from '$lib/book'
    import { getManifest } from '../../../lib/book/getManifest.js'

    export function manifest3(startDepth) {
        const items = [
    [0, 'section', true, 'BevinsIntroduction', 'Direct Ancestors of Samuel Bevins'],
        [1, 'table', false, 'BevinsImmigrantsTable','Immigrants of the Samuel Bevins Line'],
        [1, 'table', false, 'BevinsOriginsTable', 'Origins of the Samuel Bevins Line'],
        [1, 'section', true, 'BevinsOrigins', 'Generations in Newbold Verdon, Leicestershire, England'],
            [2, 'figure', 'NewboldVerdonMap', 'Newbold Verdon and Environs'],
        [1, 'section', true, '', 'The Bevins Surname'],
            [2, 'section', false, 'BevinsSurnameOrigin', 'Is the "Bevins" Surname French or Welsh?'],
            [2, 'section', true, 'BevinsSurnamePrevalence', '"Bevins" Surname Prevelance'],
        [1, 'section', true, '', 'The Immigrants William Longford Bevins and Mary Bolt'],
            [2, 'section', false, 'BevinsBoltHardTimes', 'Hard Times in Newbold Verdon'],
            [2, 'section', false, 'BevinsBoltCrossingAtlantic', 'Crossing the Atlantic'],
            [2, 'section', false, 'BevinsBoltGoWest', 'The Bevins-Bolt Household Goes West'],
        [1, 'section', true, '', 'The Immigrants Mary Ann (and Allace) White'],
            [2, 'section', false, 'MaryWhiteInEngland', 'Life in England'],
        [1, 'section', true, 'BevinsNativeAmericanBranch', 'Native American Family Connections'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}

const lines = manifest3(1)
const man = getManifest(lines)
