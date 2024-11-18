<script>
    import { H1, NewPage, P, SectionTitle } from '$lib/markup'
    import { Placeholder } from '$lib/publish'

    export let man
    export let title = 'Book Title'
    export let showBreak = true

    function newpage(item) { return man.items[item.idx-1].type === 'page' }

    function sectionTitle(item) {
        return man.sectionNumber(item) + ' ' + item.title
    }
</script>

{#each man.items as item}
    
    {#if item.type === 'page'}
        <NewPage id={man.pageId(item)}
            num={item.page} book={title} {showBreak}
            firstPage={item.page===1} chapter={item.title} />
    
    {:else if item.type === 'section'}
        {#if item.title !== ''}
            <SectionTitle depth={item.depth} id={man.sectionId(item)}
                title={sectionTitle(item)} newpage={newpage(item)} />
        {/if}
    
    {:else if item.type === 'content'}
        {#if ! item.comp}
            <Placeholder {man} {item} />
        {:else}
            <svelte:component this={item.comp} {man} {item} />
        {/if}
    {/if}
{/each}