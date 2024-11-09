// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function nattrassManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'NattrassIntroduction', 'The Nattrass Lineage'],
        [1, 'table', false, 'NattrassImmigrantsTable','Immigrants of the Nattrass Line'],
        [1, 'table', false, 'NattrassOriginsTable', 'Origins of the Nattrass Line'],
        [1, 'section', true, '', 'The Nattrass Surname'],
    ])
}
