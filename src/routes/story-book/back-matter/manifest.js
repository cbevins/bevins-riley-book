/**
 * manifest() concatenates the section contents definitions into a single array,
 * generates a {manifest} object from the array, and returns a reference to it.
 */
import { createManifest } from '$lib/book'
import { updateItems, logItems, logPages } from '$lib/book'

export function manifest() {
    const defs =  [
        [0, 'section', true, 'EndNotes', 'End Notes'],
        [0, 'section', true, 'Sources', 'Sources'],
    ]
    const items = updateItems(0, 'back', defs)
    const man = createManifest(items)

    if (false) logPages(man)
    if (false) logItems(man)
    return man
}
