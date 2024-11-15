<script>
    import { Pager, setup } from '$lib/publish'
    import MN from './MN/comp.svelte'
    import MT from './MT/comp.svelte'
    import OR from './OR/comp.svelte'

    export let sections, pages, parent, seq
    const section = setup('USA', 'United States', seq, parent, sections, pages)
    const self = section.self
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{seq} = {self}</div>

<MN {sections} {pages} parent={self} seq={seq+'-01'}/>
<MT {sections} {pages} parent={self} seq={seq+'-02'}/>
<OR {sections} {pages} parent={self} seq={seq+'-03'}/>
