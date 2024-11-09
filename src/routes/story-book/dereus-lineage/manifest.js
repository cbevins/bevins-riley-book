// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function dereusManifest(startDepth) {
    const items = [
    [0, 'section', true, 'DeReusIntroduction', 'Direct Ancestors of Gladys Mae DeReus'],
        [1, 'table', false, 'DeReusImmigrantsTable','Immigrants of the DeReus Line'],
        [1, 'table', false, 'DeReusOriginsTable', 'Origins of the DeReus Line'],
        [1, 'section', true, '', 'The DeReus Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
