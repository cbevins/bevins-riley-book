<script>
    import Content from '../Content.svelte'
    import Page from '../Page.svelte'
    import Placeholder from '../Placeholder.svelte'
    import Section from '../Section.svelte'

    export let man
    export let depth

    const d1 = depth + 1
</script>

<Page {man}/>
<Section {man} {depth} folder='CAN' title='Canada'/>
    <Section {man} depth={d1} folder='AB' title='Alberta'/>
    <Content {man} comp={Placeholder} file='AB'/>

    <Page {man}/>
    <Section {man} depth={d1} folder='BC' title='British Columbia'/>
    <Content {man} comp={Placeholder} file='BC'/>

