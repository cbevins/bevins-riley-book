<script>
    import { Pager, setup } from '$lib/publish'
    import AB from './AB/comp.svelte'
    import BC from './BC/comp.svelte'
    export let sections, pages, parent, seq
    const section = setup('CAN', 'Canada', seq, parent, sections, pages)
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self}</div>

<AB {sections} {pages} parent={section.self} seq={seq+'-01'}/>
<BC {sections} {pages} parent={section.self} seq={seq+'-02'}/>