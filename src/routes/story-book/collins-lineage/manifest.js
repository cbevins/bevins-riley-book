// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function collinsManifest(startDepth) {
    const items = [
    [0, 'section', true, 'CollinsIntroduction', 'Direct Ancestors of Hattie Jane Collins'],
        [1, 'table', false, 'CollinsImmigrantsTable','Immigrants of the Collins Line'],
        [1, 'table', false, 'CollinsOriginsTable', 'Origins of the Collins Line'],
        [1, 'section', true, '', 'The Collins Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
