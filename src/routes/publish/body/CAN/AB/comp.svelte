<script>
    import { Pager, setup } from '$lib/publish'
    export let sections, pages, parent, seq
    const section = setup('AB', 'Alberta', seq, parent, sections, pages)
</script>

<div class='text-xl'>{section.seq} = {section.self}</div>