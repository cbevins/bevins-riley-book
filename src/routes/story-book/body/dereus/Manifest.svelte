<script>
    // ./body/dereus/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='dereus' title='DeReus Family Line'/>
