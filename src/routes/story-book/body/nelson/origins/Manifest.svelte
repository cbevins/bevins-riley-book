<script>
    // ./body/nelson/origins/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import OriginsBlockSvg2 from './OriginsBlockSvg2.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='Nelson Family Origins'/>
<!-- <Content {man} {depth} file='A.svelte' comp={A} /> -->

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='Nelson Origins Chart'/>
<Content {man} depth={d1} file='OriginsBlockSvg2.svelte'
    comp={OriginsBlockSvg2}
    features={[['figure', 'Nelson Origins Chart']]} />
    