// See createManifest.js for array details
import { ignore, newpg, recto, same, verso } from '$lib/imprint'

const bookTitle = 'Our Ancestors Through Time and Place'

function dummyChapter(folder, surname) {
    return [
        [folder, 1, newpg, `${surname}ChapterIntro`, `${surname} Family Line`],
        [folder, 2, newpg, `${surname}Origins`, `${surname} Family Origins`],
            [folder, 3, same, `${surname}Geography`, `${surname} Origin Geography`, [
                ['figure', `Map of ${surname} Origins`],
                ['table', `${surname} Origins`],
            ]],
            [folder, 3, newpg, `${surname}Generations`, `${surname} Origin Generations`],
        [folder, 2, newpg, `${surname}Migrations`, `${surname} Family Migrations`, [
                ['table', `${surname} Immigrants`],
            ]],
            [folder, 3, same, `${surname}AtlanticCrossings`, 'Atlantic Crossings'],
            [folder, 3, newpg, `${surname}AmericanMigrations`, 'American Migrations'],
        [folder, 2, newpg, `${surname}Surname`, `${surname} Surname`],
        [folder, 2, newpg, `${surname}Stories`, `${surname} Family Stories`],
    ]
}

// Book body has sections that appear in the ToC
// and begins the book body page numbers and headers system
const bookBody = [['book', 0, ignore, '', bookTitle]].concat(
    dummyChapter('bevins', 'Bevins'),
    dummyChapter('collins', 'Collins')
)

// Back matter sections also appear in the ToC,
// and continues the book body page numbers and headers system
const backMatter = [
    // ['back', 0, ignore, '', bookTitle],
    ['back', 1, recto, 'EndNotes', 'End Notes'],
    ['back', 1, recto, 'Sources', 'Sources'],
]

// The book body and back matter use the same page numbering and headers
export const bodyMatter = bookBody.concat(backMatter)
