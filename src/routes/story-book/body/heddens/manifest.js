// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function heddensManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'HeddensIntroduction', 'The Heddens Lineage'],
        [1, 'table', false, 'HeddensImmigrantsTable','Immigrants of the Heddens Line'],
        [1, 'table', false, 'HeddensOriginsTable', 'Origins of the Heddens Line'],
        [1, 'section', true, '', 'The Heddens Surname'],
    ])
}
