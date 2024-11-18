<script>
    // ./body/heddens/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    // import Intro from './intro/A.svelte'
    // import Origins from './origins/A.svelte'
    // import Migrations from './migrations/A.svelte'
    // import Surname from './surname/A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man} recto={true}/>
<Section {man} {depth} folder='heddens' title='Ralph Vernon Heddens Family Line'/>
