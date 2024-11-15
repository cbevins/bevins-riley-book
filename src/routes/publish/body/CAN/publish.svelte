<script>
    // body/CAN/publish.svelte is invoked by lib/publish/Publish.svelte
    import { Publish, SectionPlaceholder } from '$lib/publish'
    import AB from './AB/publish.svelte'
    import BC from './BC/publish.svelte'
    export let man, section
</script>
<!-- <SectionPlaceholder {section}/> -->
<Publish {man} parent={section} comp={AB} tag='AB' title='Alberta'/>
<Publish {man} parent={section} comp={BC} tag='BC' title='British Columbia'/>