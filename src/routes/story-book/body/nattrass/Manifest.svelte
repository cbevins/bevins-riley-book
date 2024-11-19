<script>
    // ./body/heddens/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'

    import IntroManifest from './intro/Manifest.svelte'
    import OriginsManifest from './origins/Manifest.svelte'
    import MigrationsManifest from './migrations/Manifest.svelte'
    import StoriesManifest from './stories/Manifest.svelte'
    import SurnameManifest from './surname/Manifest.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man} recto={true}/>
<Section {man} {depth} folder='nattrass' title='Nattrass Family Line'/>

<IntroManifest {man} depth={d1} />
<OriginsManifest {man} depth={d1} />
<MigrationsManifest {man} depth={d1} />
<SurnameManifest {man} depth={d1} />
<StoriesManifest {man} depth={d1} />
