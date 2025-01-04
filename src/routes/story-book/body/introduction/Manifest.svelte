<script>
    // ./body/introduction/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import Introduction from './Introduction.svelte'
    import HorzLineageChart from './HorzLineageChart.svelte'
    import VertLineageChart from './VertLineageChart.svelte'
    import WhiteEarthBevinsChart from './WhiteEarthBevinsChart.svelte'
    export let man
    export let depth
</script>

<Page {man}/>
<Section {man} {depth} folder='introduction' title='Introduction'/>
<Content {man} {depth} file='Introduction.svelte' comp={Introduction} />

<Page {man}/>
<Content {man} {depth} file='HorzLineageChart.svelte' comp={HorzLineageChart} />

<Page {man}/>
<Content {man} {depth} file='VertLineageChart.svelte' comp={VertLineageChart} />

<Page {man}/>
<Content {man} {depth} file='WhiteEarthBevinsChart.svelte' comp={WhiteEarthBevinsChart} />
