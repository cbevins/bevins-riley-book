<script>
    // ./body/dereus/origins/Manifest.svelte
    import { Content, Page, Placeholder, Section } from '$lib/publish'
    import OriginsBlockSvg from './OriginsBlockSvg.svelte'
    import OriginsBlockSvg2 from './OriginsBlockSvg2.svelte'
    import A from './A.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='origins' title='DeReus Family Origins'/>
<Content {man} {depth} file='A.svelte' comp={A} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='DeReus Origins Chart 2'/>
<Content {man} depth={d1} file='OriginsBlockSvg2.svelte'
    comp={OriginsBlockSvg2}
    features={[['figure', 'DeReus Origins Chart 2']]} />

<Page {man}/>
<Section {man} depth={d1} folder='origins' title='DeReus Origins Chart'/>
<Content {man} depth={d1} file='OriginsBlockSvg.svelte'
    comp={OriginsBlockSvg}
    features={[['figure', 'DeReus Origins Chart']]} />
    