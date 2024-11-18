<script>
    // ./body/introduction/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='introduction' title='Introduction'/>
