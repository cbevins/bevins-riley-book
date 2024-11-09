<script>
    import { NewPage, ItemTitle } from '$lib/book'
    import { ContentPlaceholder, FigurePlaceholder, TablePlaceholder } from '$lib/book'
    import { FigureContainer, TableContainer } from '$lib/book'

    export let man  // reference to a {manifest} object
    export let part // display only pages with the part id
    export let comps // Map() of component key => Svelte component

    function comp(item) {
        // Use the requested component, if it is in the Map
        if (comps.has(item.comp)) return comps.get(item.comp)
        // Otherwise, use a standardized component
        if (item.type === 'section') return ContentPlaceholder
        if (item.type === 'figure') return FigurePlaceholder
        if (item.type === 'table') return TablePlaceholder
        throw new Error(`Manifest Item with unknown type: type='${item.type}' id='${item.id}' title='${item.title}''`)
    }
</script>

{#each man.pages as page}
    {#if page.part === part}
        <NewPage {page}/>
        {#each page.items as item}
            <ItemTitle {item}/>
            {#if item.type === 'table'}
                <TableContainer comp={comp(item)} {item}/>
            {:else if item.type === 'figure'}
                <FigureContainer comp={comp(item)} {item}/>
            {:else}
                <svelte:component this={comp(item)} {item}/>
            {/if}
        {/each}
    {/if}
{/each}