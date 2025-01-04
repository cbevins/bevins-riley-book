<script>
    // ./body/bevins/stories/native-americans/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import NativeRelations from './NativeRelations.svelte'
    import WhiteEarthBevinsChart from './WhiteEarthBevinsChart.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Section {man} {depth} folder='native-americans' title='Native American Relations'/>
<Content {man} {depth} file='nativeRelations' comp={NativeRelations}/>

<Page {man}/>
<Content {man} {depth} file='WhiteEarthBevinsChart.svelte' comp={WhiteEarthBevinsChart} />
