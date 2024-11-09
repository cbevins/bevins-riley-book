<script>
    import { NewPage, ItemTitle } from '$lib/book'
    import { ContentPlaceholder, FigurePlaceholder, TablePlaceholder } from '$lib/book'
    
    import BevinsImmigrantsTable from './BevinsImmigrantsTable.svelte'
    import BevinsIntroduction from './Introduction.svelte'
    import BevinsOrigins from './Origins.svelte'
    import BevinsTimeLine from './TimeLine.svelte'

    export let man  // reference to a {manifest} object
    export let part // display only pages with the part id

    // Maps the Manifest item.comp key to its SVelte component
    const compMap = new Map([
        ['BevinsIntroduction', BevinsIntroduction],
        ['BevinsImmigrantsTable', BevinsImmigrantsTable],
        ['BevinsOrigins', BevinsOrigins],
        ['BevinsTimeLine', BevinsTimeLine],
    ])

    function comp(item) {
        // Use the requested component, if it is in the Map
        if (compMap.has(item.comp)) return compMap.get(item.comp)
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
            <svelte:component this={comp(item)} {item}/>
        {/each}
    {/if}
{/each}