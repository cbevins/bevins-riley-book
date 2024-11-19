<script>
    // ./body/nattrass/intro/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import A from './A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Section {man} {depth} folder='intro' title='Introduction'/>
<Content {man} {depth} file='A' comp={A} />
