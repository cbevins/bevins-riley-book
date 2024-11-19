<script>
    // ./body/Manifest.svelte
    import BevinsManifest from './bevins/Manifest.svelte'
    import CollinsManifest from './collins/Manifest.svelte'
    import DereusManifest from './dereus/Manifest.svelte'
    import HeddensManifest from './heddens/Manifest.svelte'
    import IntroManifest from './introduction/Manifest.svelte'
    import NattrassManifest from './nattrass/Manifest.svelte'
    import NelsonManifest from './nelson/Manifest.svelte'
    import RileyManifest from './riley/Manifest.svelte'
    import TrombleyManifest from './trombley/Manifest.svelte'

    export let man
    export let depth = 1
</script>

<IntroManifest {man} {depth} />
<BevinsManifest {man} {depth} />
<CollinsManifest {man} {depth} />
<HeddensManifest {man} {depth} />
<NattrassManifest {man} {depth} />
<!-- <RileyManifest {man} {depth} /> -->
<DereusManifest {man} {depth} />
<!-- <TrombleyManifest {man} {depth} /> -->
<!-- <NelsonManifest {man} {depth} /> -->
