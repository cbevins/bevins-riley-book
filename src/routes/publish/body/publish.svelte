<script>
    // body/publish.svelte
    import { Publish, publishFirst } from '$lib/publish'
    import Can from './CAN/publish.svelte'
    import Eng from './ENG/publish.svelte'
    import Usa from './USA/publish.svelte'
    const {man, section:parent} = publishFirst('UN', 'United Nations')
</script>
<Publish {man} {parent} comp={Can} tag='CAN' title='Canada'/>
<Publish {man} {parent} comp={Eng} tag='ENG' title='England'/>
<Publish {man} {parent} comp={Usa} tag='USA' title='United States'/>