<script>
    import { Pager, setup } from '$lib/imprint'
    export let collection, pages, parent, seq
    const section = setup('BC', seq, parent, collection, pages)
    collection.set(seq, section)
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self}</div>