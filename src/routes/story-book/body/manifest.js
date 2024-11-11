/**
 * manifest() concatenates the section contents definitions into a single array,
 * generates a {manifest} object from the array, and returns a reference to it.
 */
import { createManifest } from '$lib/book'
import { logItems, logPages } from '$lib/book'

// Section manifest definition access functions.
import { introductionManifest } from './introduction/manifest.js'
import { bevinsManifest } from './bevins/manifest.js'
import { collinsManifest } from './collins/manifest.js'
import { heddensManifest } from './heddens/manifest.js'
import { nattrassManifest } from './nattrass/manifest.js'
import { rileyManifest } from './riley/manifest.js'
import { dereusManifest } from './dereus/manifest.js'
import { trombleyManifest } from './trombley/manifest.js'
import { nelsonManifest } from './nelson/manifest.js'

export function manifest() {
    const items = introductionManifest(0, 'intro').concat(
        bevinsManifest(0, 'bevins'),
        collinsManifest(0, 'collins'),
        heddensManifest(0, 'heddens'),
        nattrassManifest(0, 'nattrass'),
        rileyManifest(0, 'riley'),
        dereusManifest(0, 'dereus'),
        trombleyManifest(0, 'trombley'),
        nelsonManifest(0, 'nelson'),
    )
    const man = createManifest(items)
    if (false) logPages(man)
    if (false) logItems(man)
    return man
}
