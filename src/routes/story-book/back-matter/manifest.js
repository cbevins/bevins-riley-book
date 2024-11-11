/**
 * manifest() concatenates the section contents definitions into a single array,
 * generates a {manifest} object from the array, and returns a reference to it.
 */
import { createManifest } from '$lib/book'
import { updateItems, logItems, logPages } from '$lib/book'

export function manifest(startDepth, partId) {
    const defs =  [
        [0, 'section', true, 'EndNotes', 'End Notes'],
        [0, 'section', true, 'Sources', 'Sources'],
    ]
    const items = updateItems(startDepth, partId, defs)
    const man = createManifest(items)

    if (false) logPages(man)
    if (true) logItems(man)
    return man
}
