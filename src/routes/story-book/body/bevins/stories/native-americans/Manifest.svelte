<script>
    // ./body/bevins/stories/native-americans/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import NativeRelations from './NativeRelations.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='native-americans' title='Native American Relations'/>
<Content {man} {depth} file='nativeRelations' comp={NativeRelations}/>
