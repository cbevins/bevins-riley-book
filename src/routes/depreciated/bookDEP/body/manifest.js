import { bevinsManifest } from './bevins/manifest.js'
import { collinsManifest } from './collins/manifest.js'
// A manifest[] is an array defining the parts of a book.
// Each manifest element is itself an array of:
// [<depth>, <newpage>, <component>, <title>, <embeds>]
// and <embeds> is an array of items embedded in the section
// [<'callout'|'figure'|'map'|'table'>, <title>]
const manifest = [
    [0, true, 'FrontMatter', '', []]
]

export function getManifest() {
    return manifest.concat(
        bevinsManifest(),
        collinsManifest(),
    )
}
