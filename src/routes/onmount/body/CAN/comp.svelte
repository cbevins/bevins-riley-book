<script>
    import { Pager, setup } from '$lib/imprint'
    import AB from './AB/comp.svelte'
    import BC from './BC/comp.svelte'
    export let collection, pages, parent, seq
    const section = setup('CAN', seq, parent, collection, pages)
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self}</div>

<AB {collection} {pages} parent={section.self} seq={seq+'-01'}/>
<BC {collection} {pages} parent={section.self} seq={seq+'-02'}/>