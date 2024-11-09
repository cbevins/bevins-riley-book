import { getManifest } from '$lib/book'

import { introductionManifest } from './introduction/manifest.js'
import { bevinsManifest } from './bevins-lineage/manifest.js'
import { collinsManifest } from './collins-lineage/manifest.js'
import { heddensManifest } from './heddens-lineage/manifest.js'
import { nattrassManifest } from './nattrass-lineage/manifest.js'
import { rileyManifest } from './riley-lineage/manifest.js'
import { dereusManifest } from './dereus-lineage/manifest.js'
import { trombleyManifest } from './trombley-lineage/manifest.js'
import { nelsonManifest } from './nelson-lineage/manifest.js'

export function manifest() {
    const lines = introductionManifest(0).concat(
        bevinsManifest(0),
        collinsManifest(0),
        heddensManifest(0),
        nattrassManifest(0),
        rileyManifest(0),
        dereusManifest(0),
        trombleyManifest(0),
        nelsonManifest(0),
    )
    const man = getManifest(lines)
    return man
}

export function logItems(man) {
    for (let i=0; i<man.items.length; i++) {
        const item = man.items[i]
        console.log(`${item.page.pageno} (${item.newpage}) [${item.depth}]: `
            + `<${item.type}> [${item.comp}] "${item.title}"`)
    }
}

export function logPages(man) {
    for (let i=0; i<man.pages.length; i++) {
        const page = man.pages[i]
        console.log(`${page.pageno} (${page.items.length} items) `
            + `"${page.headers[0]}" "${page.headers[1]}"`)
    }
}