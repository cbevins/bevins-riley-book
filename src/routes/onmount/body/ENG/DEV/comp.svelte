<script>
    import { Pager, setup } from '$lib/imprint'
    export let collection, pages, parent, seq
    const section = setup('DEV', seq, parent, collection, pages)
</script>

<div class='text-xl'>{section.seq} = {section.self}</div>