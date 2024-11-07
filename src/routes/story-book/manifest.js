import { Manifest } from '$lib/book'

import { manifest as introduction} from './introduction/manifest.js'
import { manifest as bevins } from './bevins-lineage/manifest.js'
import { manifest as collins } from './collins-lineage/manifest.js'
import { manifest as heddens } from './heddens-lineage/manifest.js'
import { manifest as nattrass } from './nattrass-lineage/manifest.js'
import { manifest as riley } from './riley-lineage/manifest.js'
import { manifest as dereus } from './dereus-lineage/manifest.js'
import { manifest as trombley } from './trombley-lineage/manifest.js'
import { manifest as nelson } from './nelson-lineage/manifest.js'

export function manifest() {
    const items = [
        introduction,
        bevins,
        collins,
        heddens,
        nattrass,
        riley,
        dereus,
        trombley,
        nelson]
    return new Manifest(items)
}