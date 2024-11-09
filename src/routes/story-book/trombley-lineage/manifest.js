// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function trombleyManifest(startDepth) {
    const items = [
    [0, 'section', true, 'TrombleyIntroduction', 'Direct Ancestors of Harold Richard Trombley'],
        [1, 'table', false, 'TrombleyImmigrantsTable','Immigrants of the Trombley Line'],
        [1, 'table', false, 'TrombleyOriginsTable', 'Origins of the Trombley Line'],
        [1, 'section', true, '', 'The Trombley Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
