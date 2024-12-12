<script>
    import { Pager, setup } from '$lib/publish'
    export let sections, pages, parent, seq
    const section = setup('MT', 'Montana', seq, parent, sections, pages)
</script>

{#each [1,2,3,4] as p}
<Pager {pages} {section}/>
<div class='text-xl'>{section.seq} = {section.self} page {p}</div>
{/each}
