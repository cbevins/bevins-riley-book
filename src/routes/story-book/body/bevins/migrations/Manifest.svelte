<script>
    // ./body/bevins/migrations/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import A from './A.svelte'
    import ImmigrantsTable from './BevinsImmigrantsTable.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='migrations' title='Bevins Migrations'/>
<Content {man} {depth} file='BevinsImmigrantsTable.svelte' comp={ImmigrantsTable}
    title='Bevins Family Immigrants to America'
    features={[['table', 'Bevins Immigrants']]} />

<Section {man} depth={d1} folder='bevins-bolt' title='The Bevins-Bolt Family'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} />

<Content {man} depth={d1} file='migration-path' comp={Placeholder}
    title='Bevins-Bolt Migration Path'/>

<Page {man}/>
<Section {man} depth={d1} folder='bevins-white' title='Mary Ann White'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} />

<Content {man} depth={d1} file='white-obit' comp={Placeholder}
    title='Mary Ann White Obituary' />

