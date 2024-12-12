// A manifest[] is an array defining the parts of a book.
// Each manifest element is itself an array of:
// [<depth>, <newpage>, <component>, <title>, <embeds>]
// and <embeds> is an array of items embedded in the section
// [<'callout'|'figure'|'map'|'table'>, <title>]
const manifest = [
    [0, true, 'FrontMatter', '', []],
    [1, true, 'FrontCover', 'Front Cover', []],
    [1, true, 'HalfTitle', 'Half Title', []],
    [1, true, 'Colophon', 'Colophon', []],
    [1, true, 'TitlePage', 'Title Page', []],
    [1, true, 'Frontispiece', '', []],
    [1, true, 'Dedication', 'Dedication', []],
    [1, true, 'TableContents', 'Table of Contents', []],
    [1, true, 'ListTables', 'List of Tables', []],
    [1, true, 'ListFigures', 'List of Figures', []],
    [1, true, 'Preface', 'Preface', []],
    [1, true, 'Epigraph', 'Epigraph', []],
]

export function getManifest() {
    return manifest
}
