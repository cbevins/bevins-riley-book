<script>
    import { Pager, setup } from '$lib/imprint'
    export let collection, pages, parent, seq
    const section = setup('MT', seq, parent, collection, pages)
</script>

{#each [1,2,3,4] as p}
<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self} page {p}</div>
{/each}
