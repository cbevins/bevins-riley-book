// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function rileyManifest(startDepth) {
    const items = [
    [0, 'section', true, 'RileyIntroduction', 'Direct Ancestors of Sheldon James Riley'],
        [1, 'table', false, 'RileyImmigrantsTable','Immigrants of the Riley Line'],
        [1, 'table', false, 'RileyOriginsTable', 'Origins of the Riley Line'],
        [1, 'section', true, '', 'The Riley Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
