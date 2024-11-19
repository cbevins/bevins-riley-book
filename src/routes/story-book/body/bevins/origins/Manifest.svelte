<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Map, Page, Placeholder, Table, Section } from '$lib/publish'
    import A from './A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Bevins Origins'/>
<Content {man} {depth} file='A' comp={A} />
<Table {man} {depth} file='immigrants' comp={Placeholder}
    title='Bevins Family Countries of Origin' />

<Section {man} depth={d1} folder='newbold-verdon' title='Newbold Verdon, Leicestershire, England'/>
<Content {man} depth={d1} file='A' comp={A} />
<Map {man} depth={d1} file='migration-path' comp={Placeholder}
    title='Newbold Verdon, Leicestershire, England' />
