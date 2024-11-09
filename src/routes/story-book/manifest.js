import { createManifest } from '$lib/book'

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
        bevinsManifest(0, 'bevins'),
        collinsManifest(0, 'collins'),
        heddensManifest(0, 'heddens'),
        nattrassManifest(0, 'nattrass'),
        rileyManifest(0, 'riley'),
        dereusManifest(0, 'dereus'),
        trombleyManifest(0, 'trombley'),
        nelsonManifest(0, 'nelson'),
    )
    const man = createManifest(lines)
    logPages(man)
    // logItems(man)
    return man
}

// item = {type, depth, newpage, comp, title, page, part, levels: lvl}
export function logItems(man) {
    for (let i=0; i<man.items.length; i++) {
        const item = man.items[i]
        console.log(`${item.part} ${item.levels.join('-')} `
            + `${item.page.pageno} (${item.newpage}) [${item.depth}]: `
            + `<${item.type}> [${item.comp}] "${item.title}"`)
    }
}

// page = {pageno, part, headers, items[]}
export function logPages(man) {
    for (let i=0; i<man.pages.length; i++) {
        const page = man.pages[i]
        console.log(`${page.part} ${page.pageno} (${page.items.length} items) `
            + `"${page.headers[0]}" "${page.headers[1]}"`)
    }
}
