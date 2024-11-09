// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function nelsonManifest(startDepth) {
    const items = [
    [0, 'section', true, 'NelsonIntroduction', 'The Nelson Lineage'],
        [1, 'table', false, 'NelsonImmigrantsTable','Immigrants of the Nelson Line'],
        [1, 'table', false, 'NelsonOriginsTable', 'Origins of the Nelson Line'],
        [1, 'section', true, '', 'The Nelson Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
