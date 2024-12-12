<script>
    // body/publish.svelte is invoked by lib/publish/Publish.svelte
    import { Publish } from '$lib/publish'
    import Can from './CAN/publish.svelte'
    import Eng from './ENG/publish.svelte'
    import Usa from './USA/publish.svelte'

    export let man
    export let section
</script>
<Publish {man} parent={section} comp={Can} tag='CAN' title='Canada'/>
<Publish {man} parent={section} comp={Eng} tag='ENG' title='England'/>
<Publish {man} parent={section} comp={Usa} tag='USA' title='United States'/>