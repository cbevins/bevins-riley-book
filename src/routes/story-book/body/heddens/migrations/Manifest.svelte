<script>
    // ./body/heddens/migrations/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    // import A from './A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='migrations' title='Heddens Migrations'/>
<Content {man} {depth} file='placeholder' comp={Placeholder} />
