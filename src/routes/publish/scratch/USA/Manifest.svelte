<script>
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    export let man
    export let depth

    const d1 = depth + 1
    const d2 = depth + 2
</script>

<Page {man}/>
<Section {man} {depth} folder='USA' title='United States'/>
    <Section {man} depth={d1} folder='MN' title='Minnesota'/>
    <Content {man} depth={d1} comp={Placeholder} file='MNp1'/>
    <Page {man}/>
    <Content {man} depth={d1} comp={Placeholder} file='MNp2'/>
    <Page {man}/>
    <Content {man} depth={d1} comp={Placeholder} file='MNp3'/>

    <Page {man}/>
    <Section {man} depth={d1} folder='MT' title='Montana'/>
    <Content {man} depth={d1} comp={Placeholder} file='MTp1'/>

    <Page {man}/>
    <Section {man} depth={d1} folder='OR' title='Oregon'/>
    <Content {man} depth={d1} comp={null} file='ORp1'/>
