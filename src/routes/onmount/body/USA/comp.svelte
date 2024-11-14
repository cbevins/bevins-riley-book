<script>
    import { Pager, setup } from '$lib/imprint'
    import MN from './MN/comp.svelte'
    import MT from './MT/comp.svelte'
    import OR from './OR/comp.svelte'

    export let collection, pages, parent, seq
    const section = setup('USA', seq, parent, collection, pages)
    const self = section.self
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{seq} = {self}</div>

<MN {collection} {pages} parent={self} seq={seq+'-01'}/>
<MT {collection} {pages} parent={self} seq={seq+'-02'}/>
<OR {collection} {pages} parent={self} seq={seq+'-03'}/>
