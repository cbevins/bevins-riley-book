<script>
    // ./body/nelson/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='nelson' title='Nelson Family Line'/>
