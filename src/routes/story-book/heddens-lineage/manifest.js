// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function heddensManifest(startDepth) {
    const items = [
    [0, 'section', true, 'HeddensIntroduction', 'Direct Ancestors of Ralph Vernon Heddens'],
        [1, 'table', false, 'HeddensImmigrantsTable','Immigrants of the Heddens Line'],
        [1, 'table', false, 'HeddensOriginsTable', 'Origins of the Heddens Line'],
        [1, 'section', true, '', 'The Heddens Surname'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
