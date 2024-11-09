// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function nattrassManifest(startDepth) {
    const items = [
    [0, 'section', true, 'NattrassIntroduction', 'Direct Ancestors of Margaret Eva Nattrass'],
        [1, 'table', false, 'NattrassImmigrantsTable','Immigrants of the Nattrass Line'],
        [1, 'table', false, 'NattrassOriginsTable', 'Origins of the Nattrass Line'],
        [1, 'section', true, '', 'The Nattrass Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
