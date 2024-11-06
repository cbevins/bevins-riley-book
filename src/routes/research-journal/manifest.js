import { Manifest } from '$lib/book'
import { manifest as chapter1 } from './bevins-lineage/manifest.js'
import { manifest as chapter2 } from './collins-lineage/manifest.js'
import { manifest as chapter3 } from './heddens-lineage/manifest.js'
import { manifest as chapter4 } from './nattrass-lineage/manifest.js'
import { manifest as chapter5 } from './riley-lineage/manifest.js'
import { manifest as chapter6 } from './dereus-lineage/manifest.js'
import { manifest as chapter7 } from './trombley-lineage/manifest.js'
import { manifest as chapter8 } from './nelson-lineage/manifest.js'

export function manifest() {
    const man = new Manifest()
    chapter1(man, '1')
    chapter2(man, '2')
    chapter3(man, '3')
    chapter4(man, '4')
    chapter5(man, '5')
    chapter6(man, '6')
    chapter7(man, '7')
    chapter8(man, '8')
    return man
}
