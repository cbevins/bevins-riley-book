<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import OriginsIntro from './OriginsIntro.svelte'
    import NewboldVerdonEnglandPage1 from './NewboldVerdonEnglandPage1.svelte'
    import NewboldVerdonEnglandPage2 from './NewboldVerdonEnglandPage2.svelte'
    import NewboldVerdonEnglandPage2b from './NewboldVerdonEnglandPage2b.svelte'
    import NewboldVerdonEnglandPage3 from './NewboldVerdonEnglandPage3.svelte'
    import NewboldVerdonEnglandPage4 from './NewboldVerdonEnglandPage4.svelte'
    import OriginsChartWilliamAlfredBevins from './OriginsChartWilliamAlfredBevins.svelte'
    import OriginsChartMaryAnnWhite from './OriginsChartMaryAnnWhite.svelte'
    import BrixhamEnglandPage1 from './BrixhamEnglandPage1.svelte'
    import BrixhamEnglandPage2 from './BrixhamEnglandPage2.svelte'
    import BrixhamEnglandPage3 from './BrixhamEnglandPage3.svelte'
    import MAW from './MaryAnnWhite.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
    const d2 = d1 + 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Bevins Origins'/>
<Content {man} {depth} file='OriginsIntro.svelte' comp={OriginsIntro}
    features={[['map', 'Bevins Origins in England']]} />

<Page {man}/>
<Section {man} depth={d1} folder='origins'
    title='Newbold Verdon, Leicestershire, England (1665 - 1845)'/>
<Section {man} depth={d2} folder='origins' title='The Bevins Family in Newbold Verdon'/>
<Content {man} depth={d1} file='NewboldVerdonEnglandPage1.svelte'
    comp={NewboldVerdonEnglandPage1}
    features={[['figure', 'William Alfred Bevins']]} />

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonEnglandPage2.svelte'
    comp={NewboldVerdonEnglandPage2} />

<Section {man} depth={d2} folder='origins' title='About Newbold Verdon, Leicestershire'/>
<Content {man} depth={d1} file='NewboldVerdonEnglandPage2b.svelte'
    comp={NewboldVerdonEnglandPage2b}
    features={[['figure', 'Newbold Verdon Main Street']]} />

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonEnglandPage3.svelte'
    comp={NewboldVerdonEnglandPage3}
    features={[['figure', 'Framework Knitters']]} />

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonEnglandPage4.svelte'
    comp={NewboldVerdonEnglandPage4}
    features={[['map', 'Modern Day Newbold Verdon']]}/>

<Page {man}/>
<Content {man} depth={d1} file='OriginsChartWilliamAlfredBevins.svelte'
    comp={OriginsChartWilliamAlfredBevins}
    features={[['figure', 'Ancestor Chart for William Alfred Bevins']]}/>
    
<Page {man}/>
<Section {man} depth={d1} folder='origins'
    title='Brixham, Devon, England (1705-1870)'/>

<Section {man} depth={d2} folder='origins' title='The White Family in Brixham, Devon'/>
<Content {man} depth={d1} file='BrixhamEnglandPage1.svelte'
    comp={BrixhamEnglandPage1}
    features={[['figure', 'Brixham Harbor'],
        ['map', 'Google Earth Image of Brixham, Devon']]} />

<Page {man}/>
<Content {man} depth={d1} file='BrixhamEnglandPage2.svelte'
    comp={BrixhamEnglandPage2} />

<Page {man}/>
<Section {man} depth={d2} folder='origins' title='About Brixham, Devon'/>
<Content {man} depth={d1} file='BrixhamEnglandPage3.svelte'
    comp={BrixhamEnglandPage3} />

<Page {man}/>
<Content {man} depth={d1} file='OriginsChartMaryAnnWhite.svelte'
    comp={OriginsChartMaryAnnWhite}
    features={[['figure', 'Ancestor Chart for Mary Ann White']]} />
