// A manifest[] is an array defining the parts of a book.
// Each manifest element is itself an array of:
// [<depth>, <newpage>, <component>, <title>, <embeds>]
// and <embeds> is an array of items embedded in the section
// [<'callout'|'figure'|'map'|'table'>, <title>]
const manifest = [
    [0, true, 'BackMatter', '', []],
    [1, true, 'EndNotes', 'End Notes', []],
    [1, true, 'Sources', 'Sources', []],
    [1, true, 'BackCover', '', []],
]

export function getManifest() {
    return manifest
}
