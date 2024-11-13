/**
 * Defines the book contents with a array of parts and sections.
 * There are 3 Book parts:
 *  - 1 Front matter has its own manifest with page numbers and headers
 *  - 2 Book body starts page number and headers
 *  - 3 Back matter constinues with the page numbering and headers
 * Book front and back covers must be added independently.
 * 
 * Each part is defined by an array of sections.
 * Each section is defined by an array of:
 *  [<folder> <depth>, <pager>, <compKey>, <title>, <embeds>], where
 *  - depth is the section nesting level
 *      - 0 is the *part* level with the book title and is never displayed
 *      - 1 is a *section* level
 *  - pager is 'same', 'newpage', 'rector', or 'verso'
 *  - compKey is a string key to a Svelte component 'import'
 *      - if falsey or empty, no component will be displayed
 *      - if compKey *cannot be matched* to a Svelte component 'import',
 *          a placeholder component will be displayed
 *      - if compKey *is matched* to a Svelte compnent 'import',
 *          the Svelte component will be displayed
 *  - title is a string that, if not falsey or empty, is
 *      - appended to the table of contents, and
 *      - appended to the current {page}
 *  - embeds is an optional array of items embedded in the section
 *      to be added to a 'List of <embedType>s'. Each embed is an array of 
 *      [<'callout'|'figure'|'map'|'table'>, <title>]
*/

// <pager> value constants
import { ignore, newpg, recto, same, verso } from './createManifest.js'
import { createManifest } from './createManifest.js'

const bookTitle = 'Our Ancestors Through Time and Place'

function dummyChapter(folder, surname) {
    return [
        [folder, 1, recto, 'A', `${surname} Family Line`],
        [folder, 2, newpg, 'Origins', `${surname} Family Origins`],
            [folder, 3, same, 'Geography', `${surname} Origin Geography`, [
                ['figure', `Map of ${surname} Origins`],
                ['table', `${surname} Origins`],
            ]],
            [folder, 3, newpg, 'Generations', `${surname} Origin Generations`],
        [folder, 2, newpg, 'Migrations', `${surname} Family Migrations`, [
                ['table', `${surname} Immigrants`],
            ]],
            [folder, 3, same, 'AtlanticCrossings', 'Atlantic Crossings'],
            [folder, 3, newpg, 'AmericanMigrations', 'American Migrations'],
        [folder, 2, newpg, 'Stories', `${surname} Family Stories`]
    ]
}

// Front matter has its own page numbers and headers system
let folder = 'front'
const frontMatter = [
    [folder, 0, ignore, '', bookTitle],
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

// Book body has sections that appear in the ToC
// and begins the book body page numbers and headers system
const bookBody = [['body', 0, ignore, '', bookTitle]].concat(
    dummyChapter('bevins', 'Bevins'),
    dummyChapter('collins', 'Collins')
)

// Back matter has sections also appear in the ToC,
// and continues the book body page numbers and headers system
const backMatter = [
    ['back', 0, ignore, '', bookTitle],
    ['back', 1, recto, 'EndNotes', 'End Notes'],
    ['back', 1, recto, 'Sources', 'Sources'],
]

// The book body and back matter use the same page numbering and headers
const bodyMatter = bookBody.concat(backMatter)

export function getManifest() {
    const body = createManifest(bodyMatter, 'book')
    const front = createManifest(frontMatter, 'book')
    return {body, front}
}
