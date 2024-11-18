<script>
    // ./body/trombley/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='trombley' title='Trombley Family Line'/>
