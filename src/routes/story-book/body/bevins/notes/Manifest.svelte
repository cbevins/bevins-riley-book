<script>
    // ./body/bevins/notes/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import Notes from './Notes.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='notes' title='Bevins Family Notes'/>
<Content {man} depth={d1} file='notes' comp={Notes} />
