<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import OriginsIntro from './OriginsIntro.svelte'
    import OriginsWilliamAlfredBevinsPage1 from './OriginsWilliamAlfredBevinsPage1.svelte'
    import OriginsWilliamAlfredBevinsPage2 from './OriginsWilliamAlfredBevinsPage2.svelte'
    import OriginsChartWilliamAlfredBevins from './OriginsChartWilliamAlfredBevins.svelte'
    import OriginsChartMaryAnnWhite from './OriginsChartMaryAnnWhite.svelte'
    import OriginsMaryAnnWhitePage1 from './OriginsMaryAnnWhitePage1.svelte'
    import MAW from './MaryAnnWhite.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Bevins Origins'/>
<Content {man} {depth} file='OriginsIntro.svelte' comp={OriginsIntro}
    features={[['map', 'Bevins Origins in England']]} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='William Alfred Bevins'/>
<Content {man} depth={d1} file='OriginsWilliamAlfredBevinsPage1.svelte'
    comp={OriginsWilliamAlfredBevinsPage1}
    features={[['figure', 'William Alfred Bevins']]} />

<Page {man}/>
<Content {man} depth={d1} file='OriginsWilliamAlfredBevinsPage2.svelte'
    comp={OriginsWilliamAlfredBevinsPage2}
    features={[['figure', 'Ancestor Chart for William Alfred Bevins']]} />

<Page {man}/>
<Content {man} depth={d1} file='OriginsChartWilliamAlfredBevins.svelte'
    comp={OriginsChartWilliamAlfredBevins} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='Mary Ann White'/>
<Content {man} depth={d1} file='OriginsMaryAnnWhitePage1.svelte'
    comp={OriginsMaryAnnWhitePage1} />

<Page {man}/>
<Content {man} depth={d1} file='OriginsChartMaryAnnWhite.svelte'
    comp={OriginsChartMaryAnnWhite}
    features={[['figure', 'Ancestor Chart for Mary Ann White']]} />
