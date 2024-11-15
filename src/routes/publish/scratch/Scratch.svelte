<script>
    import Content from './Content.svelte'
    import Page from './Page.svelte'
    import Placeholder from './Placeholder.svelte'
    import Section from './Section.svelte'

    export let man
    export let depth = 0
    const d1 = depth + 1
    const d2 = depth + 2
</script>
<Page {man}/>
<Section {man} {depth} tag='UN' title='United Nations'/>
    <Page {man}/>
    <Section {man} depth={d1} tag='CAN' title='Canada'/>
        <Section {man} depth={d2} tag='AB' title='Alberta'/>
        <Content {man} comp={Placeholder}/>
    
        <Page {man}/>
        <Section {man} depth={d2} tag='BC' title='British Columbia'/>
        <Content {man} comp={Placeholder}/>

    <Page {man}/>
    <Section {man} depth={d1} tag='ENG' title='England'/>
        <Section {man} depth={d2} tag='DEV' title='Devonshire'/>
        <Content {man} comp={Placeholder}/>
        <Page {man}/>
        <Section {man} depth={d2} tag='LEI' title='Leicestershire'/>
        <Content {man} comp={Placeholder}/>

    <Page {man}/>
    <Section {man} depth={d1} tag='USA' title='United States'/>
        <Section {man} depth={d2} tag='MN' title='Minnesota'/>
        <Content {man} comp={Placeholder} file='MN1'/>
        <Page {man}/>
        <Content {man} comp={Placeholder} file='MN2'/>
        <Page {man}/>
        <Content {man} comp={Placeholder} file='MN3'/>
        <Page {man}/>
        <Section {man} depth={d2} tag='MT' title='Montana'/>
        <Content {man} comp={Placeholder} file='MT1'/>
        <Page {man}/>
        <Section {man} depth={d2} tag='OR' title='Oregon'/>
        <Content {man} comp={Placeholder} file='OR1'/>
