<script>
    // ./body/nattrass/stories/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man} recto={true}/>
<Section {man} {depth} folder='stories' title='Nattrass Family Stories'/>
<Content {man} {depth} file='placeholder' comp={Placeholder} />
