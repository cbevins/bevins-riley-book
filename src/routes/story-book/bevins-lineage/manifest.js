// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function bevinsManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'BevinsIntroduction', 'The Bevins Lineage'],
        [1, 'table', false, 'BevinsImmigrantsTable','Immigrants of the Bevins Line'],
        [1, 'table', false, 'BevinsOriginsTable', 'Origins of the Bevins Line'],
        [1, 'section', true, 'BevinsOrigins', 'Generations in Newbold Verdon, Leicestershire, England'],
            [2, 'figure', false, 'NewboldVerdonMap', 'Newbold Verdon and Environs'],
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
    ])
}
