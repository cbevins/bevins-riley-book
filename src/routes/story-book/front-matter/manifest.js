/**
 * manifest() concatenates the section contents definitions into a single array,
 * generates a {manifest} object from the array, and returns a reference to it.
 */
import { createManifest } from '$lib/book'
import { updateItems, logItems, logPages } from '$lib/book'

export function manifest(startDepth, partId) {
    const defs = [
        [0, 'section', true, 'HalfTitle', 'Half Title'],
        [0, 'section', true, 'Colophon', 'Colophon'],
        [0, 'section', true, 'TitlePage', 'Title Page'],
        [0, 'section', true, 'Frontispiece', 'Frontispiece'],
        [0, 'section', true, 'Dedication', 'Dedication'],
        [0, 'section', true, 'TableContents', 'Table of Contents'],
        [0, 'section', true, 'Epigraph', 'Epigraph'],
        [0, 'section', true, 'Preface', 'Preface'],
        [0, 'section', true, 'Forward', 'Forward'],
        [0, 'section', true, 'ListFigures', 'List of Figures'],
        [0, 'section', true, 'ListTables', 'List of Tables'],
    ]
    const items = updateItems(startDepth, partId, defs)
    const man = createManifest(items)

    if (false) logPages(man)
    if( false) logItems(man)
    return man
}
