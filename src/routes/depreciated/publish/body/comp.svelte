<script>
    import { Pager, setup } from '$lib/publish'
    import CAN from './CAN/comp.svelte'
    import ENG from './ENG/comp.svelte'
    import USA from './USA/comp.svelte'

    export let sections
    export let pages

    const parent = null
    const seq = '0'
    const section = setup('UN', 'Unites Nations', seq, parent, sections, pages)
    const self = section.self
</script>

<Pager {pages} {section} firstPage={true}/>
<div class='text-xl'>{seq} = {self}</div>
<CAN {sections} {pages} parent={self} seq={seq+'-01'}/>
<ENG {sections} {pages} parent={self} seq={seq+'-02'}/>
<USA {sections} {pages} parent={self} seq={seq+'-03'}/>
