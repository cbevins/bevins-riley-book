<script>
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    export let man
    export let depth

    const d1 = depth + 1
    const d2 = depth + 2
</script>

<Page {man}/>
<Section {man} {depth} folder='ENG' title='England'/>
    <Section {man} depth={d1} folder='DEV' title='Devonshire'/>
    <Content {man} depth={d1} comp={Placeholder} file='DEV'/>

    <Page {man}/>
    <Section {man} depth={d1} folder='LEI' title='Leicestershire'/>
    <Content {man} depth={d1} comp={Placeholder} file='LEI'/>

