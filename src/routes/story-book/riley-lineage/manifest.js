    // Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function rileyManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'RileyIntroduction', 'The Riley Lineage'],
        [1, 'table', false, 'RileyImmigrantsTable','Immigrants of the Riley Line'],
        [1, 'table', false, 'RileyOriginsTable', 'Origins of the Riley Line'],
        [1, 'section', true, '', 'The Riley Surname'],
    ])
}
