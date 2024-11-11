 // Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function nelsonManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'NelsonIntroduction', 'The Nelson Lineage'],
        [1, 'table', false, 'NelsonImmigrantsTable','Immigrants of the Nelson Line'],
        [1, 'table', false, 'NelsonOriginsTable', 'Origins of the Nelson Line'],
        [1, 'section', true, '', 'The Nelson Surname'],
    ])
}
