<script>
    // ./body/bevins/stories/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import NativeManifest from './native-americans/Manifest.svelte'
    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man} recto={true}/>
<NativeManifest {man} depth={d1} />
