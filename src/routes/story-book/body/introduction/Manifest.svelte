<script>
    // ./body/introduction/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import Introduction from './Introduction.svelte'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='introduction' title='Introduction'/>
<Content {man} {depth} file='Introduction.svelte' comp={Introduction} />
    