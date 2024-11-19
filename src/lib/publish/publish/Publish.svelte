<script>
    import { NewPage, SectionTitle } from '$lib/markup'
    import { Placeholder } from '$lib/publish'

    export let man
    export let book = 'Book Title'
    export let showBreak = true

    function newpage(item) { return man.items[item.idx-1].type === 'page' }
</script>

{#each man.items as item}
    
    {#if item.type === 'page'}
        <NewPage id={man.id(item)} {book} num={item.page} {showBreak}
            firstPage={item.page===1} chapter={item.title} />
    
    {:else if item.type === 'section'}
        {#if item.title !== ''}
            <SectionTitle depth={item.depth} id={man.id(item)}
                title={item.toc}
                newpage={newpage(item)} />
        {/if}
    
    {:else if item.type === 'content'}
        {#if ! item.comp}
            <Placeholder {man} {item} />
        {:else}
            <svelte:component this={item.comp} {man} {item} id={man.id(item)} />
        {/if}
    {/if}
{/each}