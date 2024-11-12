import { updateItems } from '$lib/book'
import { introManifest } from './intro/manifest.js'
import { originsManifest } from './origins/manifest.js'
import { migrationManifest } from './migration/manifest.js'
import { surnameManifest } from './surname/manifest.js'
import { bevinsBoltManifest } from './bevins-bolt/manifest.js'
// import { bevinsWhiteManifest } from './bevins-white/manifest.js'
import { nativeAmericansManifest } from './native-americans/manifest.js'

const manifest = introManifest.concat(
    originsManifest,
    surnameManifest,
    migrationManifest,
    bevinsBoltManifest,
    // bevinsWhiteManifest,
    nativeAmericansManifest
)

// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function bevinsManifest(startDepth, partId) {
    return updateItems(startDepth, partId, manifest)
}
