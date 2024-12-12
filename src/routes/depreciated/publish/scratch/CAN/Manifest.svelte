<script>
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    export let man
    export let depth

    const d1 = depth + 1
</script>

<Page {man}/>
<Section {man} {depth} folder='CAN' title='Canada'/>
    <Section {man} depth={d1} folder='AB' title='Alberta'/>
    <Content {man} depth={d1} comp={Placeholder} file='AB'/>

    <Page {man}/>
    <Section {man} depth={d1} folder='BC' title='British Columbia'/>
    <Content {man} depth={d1} comp={Placeholder} file='BC'/>

