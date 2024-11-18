<script>
    // ./body/nattrass/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='nattrass' title='Margaret Eva Nattrass Family Line'/>
