<script>
    import { Pager, setup } from '$lib/imprint'
    import CAN from './CAN/comp.svelte'
    import ENG from './ENG/comp.svelte'
    import USA from './USA/comp.svelte'

    export let collection
    export let pages

    const parent = null
    const seq = '0'
    const section = setup('UN', seq, parent, collection, pages)
    const self = section.self
</script>

<div class='text-xl'>{seq} = {self}</div>
<Pager {pages} {section}/>
<CAN {collection} {pages} parent={self} seq={seq+'-01'}/>
<ENG {collection} {pages} parent={self} seq={seq+'-02'}/>
<USA {collection} {pages} parent={self} seq={seq+'-03'}/>
