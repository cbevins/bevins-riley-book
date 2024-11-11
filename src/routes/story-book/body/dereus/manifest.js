// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function dereusManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'DeReusIntroduction', 'The DeReus Lineage'],
        [1, 'table', false, 'DeReusImmigrantsTable','Immigrants of the DeReus Line'],
        [1, 'table', false, 'DeReusOriginsTable', 'Origins of the DeReus Line'],
        [1, 'section', true, '', 'The DeReus Surname'],
    ])
}
