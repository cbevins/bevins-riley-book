<script>
    // ./body/bevins/migrations/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import A from './A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='migrations' title='Bevins Migrations'/>
<Content {man} {depth} file='A' comp={A}
    features={[['Table', 'Bevins Family Immigrants to America']]} />

<Section {man} depth={d1} folder='bevins-bolt' title='The Bevins-Bolt Family'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} features={[
    ['Map', 'Bevins-Bolt Migration Path']
]} />

<Section {man} depth={d1} folder='bevins-white' title='Mary Ann White'/>
<Content {man} depth={d1} file='placeholder' comp={Placeholder} features={[
    ['Figure', 'Mary Ann White Obituary']
]} />
