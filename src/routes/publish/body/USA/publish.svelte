<script>
    // body/USA/publish.svelte is invoked by lib/publish/Publish.svelte
    import { P, Publish, SectionPlaceholder } from '$lib/publish'
    import MN from './MN/publish.svelte'
    import MT from './MT/publish.svelte'
    import OR from './OR/publish.svelte'
    export let man, section
</script>
<SectionPlaceholder {section}/>
<Publish {man} parent={section} comp={MN} tag='MN' title='Minnesota'/>
<Publish {man} parent={section} comp={MT} tag='MT' title='Montana'/>
<Publish {man} parent={section} comp={OR} tag='OR' title='Oregon'/>