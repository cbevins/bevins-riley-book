<script>
    // ./body/bevins/notes/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import Notes1 from './Notes1.svelte'
    import Notes2 from './Notes2.svelte'
    import Notes3 from './Notes3.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='notes' title='Bevins Family Notes'/>
<Content {man} depth={d1} file='notes1' comp={Notes1}/>
<Page {man}/>
<Content {man} depth={d1} file='notes2' comp={Notes2}/>
<Page {man}/>
<Content {man} depth={d1} file='notes3' comp={Notes3}/>
