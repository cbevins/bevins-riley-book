// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
import { updateItems } from '$lib/book'
export function introductionManifest(startDepth, partId) {
    return updateItems(startDepth, partId, [
    [0, 'section', true, 'Introduction', 'Introduction'],
        [1, 'section', true, 'IntroductionMotivation', 'Motivation'],
        [1, 'section', true, 'IntroductionKeyTakeAways', 'Key Take-Aways'],
        [1, 'section', true, 'GenerationsNotation', 'Generations and Motivation'],
        [1, 'section', true, 'IntroductionSources', 'Sources and Methods'],
    ])
}
