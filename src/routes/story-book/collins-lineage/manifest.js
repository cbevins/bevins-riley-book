// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function collinsManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'CollinsIntroduction', 'The Collins Lineage'],
        [1, 'table', false, 'CollinsImmigrantsTable','Immigrants of the Collins Line'],
        [1, 'table', false, 'CollinsOriginsTable', 'Origins of the Collins Line'],
        [1, 'section', true, '', 'The Collins Surname'],
    ])
}
