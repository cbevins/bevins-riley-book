<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Map, Page, Section, Sidebar } from '$lib/publish'
    import OriginsIntro from './OriginsIntro.svelte'
    import OriginsInNewboldVerdon from './OriginsInNewboldVerdon.svelte'
    import MAW from './MaryAnnWhite.svelte'
    // import WAB from './WilliamAlfredBevins.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Bevins Origins'/>
<Content {man} {depth} file='OriginsIntro.svelte' comp={OriginsIntro} />
<Page {man}/>
<Content {man} {depth} file='BevinsInNewboldVerdon' comp={OriginsInNewboldVerdon} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='Bevins-Bolt'/>
<!-- <Content {man} {depth} file='WilliamAlfredBevins' comp={WAB} /> -->
<Section {man} depth={d1} folder='origins' title='Bevins-White'/>
<Content {man} {depth} file='MaryAnnWhite' comp={MAW} />
