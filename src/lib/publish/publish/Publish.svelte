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
        <NewPage id={item.id} {book} num={item.page} {showBreak}
            firstPage={item.page===1} chapter={item.title} />
    
    {:else if item.type === 'section'}
        {#if item.title !== ''}
            <SectionTitle depth={item.depth} id={item.id} title={item.toc}
                newpage={newpage(item)} />
        {/if}
    
    <!-- All other types are some form of content -->
    {:else}
        {#if ! item.comp}
            <Placeholder {man} {item} id={item.id} />
        {:else}
            <div id={item.id}>
                <svelte:component this={item.comp} {man} {item} id={item.id} />
            </div>
        {/if}
    {/if}
{/each}