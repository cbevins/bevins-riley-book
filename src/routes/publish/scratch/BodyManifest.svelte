<script>
    import Content from './Content.svelte'
    import Page from './Page.svelte'
    import Placeholder from './Placeholder.svelte'
    import Section from './Section.svelte'

    import CanManifest from './CAN/Manifest.svelte'
    import EngManifest from './ENG/Manifest.svelte'
    import UsaManifest from './USA/Manifest.svelte'

    export let man
    export let depth
    const d1 = depth + 1
</script>
<Page {man}/>
<Section {man} {depth} folder='UN' title='United Nations'/>
    <CanManifest {man} depth={d1} />
    <EngManifest {man} depth={d1} />
    <UsaManifest {man} depth={d1} />
