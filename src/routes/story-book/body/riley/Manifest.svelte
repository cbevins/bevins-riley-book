<script>
    // ./body/riley/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='riley' title='Sheldon Junior Riley Family Line'/>
