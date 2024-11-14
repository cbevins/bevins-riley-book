<script>
    import { Pager, setup } from '$lib/imprint'
    export let collection, pages, parent, seq
    const section = setup('OR', seq, parent, collection, pages)
</script>
<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self}</div>