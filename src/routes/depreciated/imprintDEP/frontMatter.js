// See createManifest.js for array details
import { ignore, newpg, recto, same, verso } from '$lib/imprint'

const bookTitle = 'Our Ancestors Through Time and Place'

// Front matter has its own page numbers and headers system
let folder = 'front'
export const frontMatter = [
    ['book', 0, ignore, '', bookTitle],
    [folder, 1, newpg, 'HalfTitle', 'Half Title'],              // p 1 recto
    [folder, 1, newpg, 'Frontispiece', 'Frontispiece'],         // p 2 verso
    [folder, 1, newpg, 'TitlePage', 'Title Page'],              // p 3 recto
    [folder, 1, newpg, 'Colophon', 'Colophon'],                 // p 4 verso
    [folder, 1, newpg, 'Dedication', 'Dedication'],             // p 5 recto
    [folder, 1, recto, 'TableContents', 'Table of Contents'],   // p 6 recto
    [folder, 1, recto, 'ListTables', 'List of Tables'],         // p ? recto
    [folder, 1, recto, 'ListFigures', 'List of Figures'],       // p ? recto
    [folder, 1, recto, 'Preface', 'Preface'],                   // p ? recto
    [folder, 1, newpg, 'Epigraph', 'Epigraph'],                 // p ? verso
]
