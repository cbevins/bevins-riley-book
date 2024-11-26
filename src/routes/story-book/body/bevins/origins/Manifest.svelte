<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Map, Page, Placeholder, Table, Section } from '$lib/publish'
    import A from './A.svelte'
    import MAW from './MaryAnnWhite.svelte'
    import WAB from './WilliamAlfredBevins.svelte'
    import NewboldVerdonEngland from './NewboldVerdonEnglandMap.svelte'
	import NewboldVerdonEnvironsMap from './NewboldVerdonEnvironsMap.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Bevins Origins'/>
<Content {man} {depth} file='A' comp={A} />

<Section {man} depth={d1} folder='origins' title='Bevins-Bolt'/>
<Content {man} {depth} file='WilliamAlfredBevins' comp={WAB} />

<Page {man}/>
<Map {man} depth={d1} file='NewboldVerdonEnglandMap' comp={NewboldVerdonEngland}
    title='Newbold Verdon, Leicestershire, England' />

<Page {man}/>
<Map {man} depth={d1} file='NewboldVerdonEnvironsMap' comp={NewboldVerdonEnvironsMap}
        title='Newbold Verdon and Environs' />
    
<Page {man}/>
<Section {man} depth={d1} folder='origins' title='Bevins-White'/>
<Content {man} {depth} file='MaryAnnWhite' comp={MAW} />

<Page {man}/>
<Section {man} depth={d1} folder='newbold-verdon' title='Newbold Verdon, Leicestershire, England'/>
<Content {man} depth={d1} file='A' comp={A} />
    