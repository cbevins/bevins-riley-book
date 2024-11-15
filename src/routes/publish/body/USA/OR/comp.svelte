<script>
    import { Pager, setup } from '$lib/publish'
    export let sections, pages, parent, seq
    const section = setup('OR', 'Oregon',
        seq, parent, sections, pages)
</script>
<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self}</div>