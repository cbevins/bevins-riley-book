<script>
    // ./body/collins/surname/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    // import Etymology from './Etymology.svelte'
    // import Prevalence from './Prevalence.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='surname' title='Collins Family Surname'/>

<Section {man} depth={d1} folder='surname' title='Collins Surname Etymology'/>
<Content {man} depth={d1} file='etymology' comp={Placeholder} />

<Page {man}/>
<Section {man} depth={d1} folder='surname' title='Collins Surname Prevalence'/>
<Content {man} depth={d1} file='prevalence' comp={Placeholder} />
