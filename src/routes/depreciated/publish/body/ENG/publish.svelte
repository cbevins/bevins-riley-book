<script>
    // body/ENG/publish.svelte is invoked by lib/publish/Publish.svelte
    import { Publish, SectionPlaceholder } from '$lib/publish'
    import DEV from './DEV/publish.svelte'
    import LEI from './LEI/publish.svelte'
    export let man, section
</script>
<!-- <SectionPlaceholder {section}/> -->
<Publish {man} parent={section} comp={DEV} tag='DEV' title='Devonshire'/>
<Publish {man} parent={section} comp={LEI} tag='LEI' title='Leicestershire'/>
