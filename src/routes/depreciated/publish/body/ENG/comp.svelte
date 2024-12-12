<script>
    import { Pager, setup } from '$lib/publish'
    import DEV from './DEV/comp.svelte'
    import LEI from './LEI/comp.svelte'

    export let sections, pages, parent, seq
    const section = setup('ENG', 'England', seq, parent, sections, pages)
    const self = section.self

</script>

<Pager {pages} {section}/>
<div class='text-xl'>{seq} = {self}</div>

<DEV {sections} {pages} parent={self} seq={seq+'-01'}/>
<LEI {sections} {pages} parent={self} seq={seq+'-02'}/>