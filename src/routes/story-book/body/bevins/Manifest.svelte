<script>
    // ./body/bevins/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import Intro from './intro/A.svelte'
    import Origins from './origins/A.svelte'
    import Migrations from './migration/A.svelte'
    // import Surname from './surname/A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='bevins' title='Samuel Bevins Family Line'/>
<Content {man} {depth} file='A' comp={Intro} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='Bevins Origins'/>
<Content {man} depth={d1} file='A' comp={Origins} />

<Page {man}/>
<Section {man} depth={d1} folder='migration' title='Bevins Migrations'/>
<Content {man} depth={d1} file='A' comp={Migrations} />

<Page {man}/>
<Section {man} depth={d1} folder='surname' title='Bevins Surname'/>
