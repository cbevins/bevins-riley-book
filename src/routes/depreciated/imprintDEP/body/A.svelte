<script>
    // A.svelte files simply invoke the CompMap components of their content folders
    import { H1, ManifestTable } from '$lib/imprint'
    import Bevins from './bevins/CompMap.svelte'
    export let man 
</script>

<H1>Front A.svelte</H1>
<ManifestTable {man}/>
<Bevins {man}/>
