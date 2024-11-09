// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function introductionManifest(startDepth=0) {
    const items = [
    [0, 'section', true, 'Introduction', 'Introduction'],
        [1, 'section', true, 'IntroductionMotivation', 'Motivation'],
        [1, 'section', true, 'IntroductionKeyTakeAways', 'Key Take-Aways'],
        [1, 'section', true, 'GenerationsNotation', 'Generations and Motivation'],
        [1, 'section', true, 'IntroductionSources', 'Sources and Methods'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
