import { Manifest } from '$lib/book'
import { manifest as introduction } from './introduction/manifest.js'
import { manifest as bevins } from './bevins-lineage/manifest.js'
import { manifest as collins } from './collins-lineage/manifest.js'
import { manifest as heddens } from './heddens-lineage/manifest.js'
import { manifest as nattrass } from './nattrass-lineage/manifest.js'
import { manifest as riley } from './riley-lineage/manifest.js'
import { manifest as dereus } from './dereus-lineage/manifest.js'
import { manifest as trombley } from './trombley-lineage/manifest.js'
import { manifest as nelson } from './nelson-lineage/manifest.js'

export function manifest() {
    const man = new Manifest()
    introduction(man, '1')
    bevins(man, '2')
    collins(man, '3')
    heddens(man, '4')
    nattrass(man, '5')
    riley(man, '6')
    dereus(man, '7')
    trombley(man, '8')
    nelson(man, '9')
    return man
}
