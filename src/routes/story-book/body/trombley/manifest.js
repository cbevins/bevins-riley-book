// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function trombleyManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'TrombleyIntroduction', 'The Trombley Lineage'],
        [1, 'table', false, 'TrombleyImmigrantsTable','Immigrants of the Trombley Line'],
        [1, 'table', false, 'TrombleyOriginsTable', 'Origins of the Trombley Line'],
        [1, 'section', true, '', 'The Trombley Surname'],
    ])
}
