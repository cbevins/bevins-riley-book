<script>
    // ./body/bevins/migrations/Manifest.svelte
    import { Content, Figure, Map, Page, Placeholder, Section, Table } from '$lib/publish'
    import A from './A.svelte'
    import ImmigrantsTable from './BevinsImmigrantsTable.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='migrations' title='Bevins Migrations'/>
<Table {man} {depth} file='bevins-immigrants-table' comp={ImmigrantsTable}
    title='Bevins Family Immigrants to America' />

<Section {man} depth={d1} folder='bevins-bolt' title='The Bevins-Bolt Family'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} />

<Map {man} depth={d1} file='migration-path' comp={Placeholder}
    title='Bevins-Bolt Migration Path'/>

<Section {man} depth={d1} folder='bevins-white' title='Mary Ann White'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} />

<Figure {man} depth={d1} file='white-obit' comp={Placeholder}
    title='Mary Ann White Obituary' />

