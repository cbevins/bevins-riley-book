<script>
    import { manifest } from './manifest.js'
    import { Book, Chapter, NewPage, Section, Toc } from '$lib/book'
    import { ContentPlaceholder, FigurePlaceholder, TablePlaceholder } from '$lib/book'
    
    import BevinsOverview from './bevins-lineage/BevinsOverview.svelte'
    import BevinsImmigrantsTable from './bevins-lineage/BevinsImmigrantsTable.svelte'
    import BevinsBolt from './bevins-lineage/bevins-bolt/BevinsBolt.svelte'
    import BevinsBoltUsfc1850 from './bevins-lineage/bevins-bolt/Usfc1850.svelte'
    import BevinsBoltUsfc1850Table from './bevins-lineage/bevins-bolt/Usfc1850Table.svelte'
    import BevinsBoltUsfc1860 from './bevins-lineage/bevins-bolt/Usfc1860.svelte'
    import BevinsBoltUsfc1860Table from './bevins-lineage/bevins-bolt/Usfc1860Table.svelte'
    import BevinsBoltUsfc1870 from './bevins-lineage/bevins-bolt/Usfc1870.svelte'
    import BevinsBoltUsfc1870Table from './bevins-lineage/bevins-bolt/Usfc1870Table.svelte'
    import BevinsBoltUsfc1880 from './bevins-lineage/bevins-bolt/Usfc1880.svelte'
    import BevinsBoltUsfc1880Table from './bevins-lineage/bevins-bolt/Usfc1880Table.svelte'
    import BevinsWhite from './bevins-lineage/bevins-white/WhatAboutMaryWhite.svelte'
    import NewboldVerdon1 from './bevins-lineage/NewboldVerdon1.svelte'

    const compMap = new Map([
        ['BevinsImmigrantsTable', BevinsImmigrantsTable],
        ['BevinsOverview', BevinsOverview],
        ['BevinsBolt', BevinsBolt],
        ['BevinsBoltUsfc1850', BevinsBoltUsfc1850],
        ['BevinsBoltUsfc1850Table', BevinsBoltUsfc1850Table],
        ['BevinsBoltUsfc1860', BevinsBoltUsfc1860],
        ['BevinsBoltUsfc1860Table', BevinsBoltUsfc1860Table],
        ['BevinsBoltUsfc1870', BevinsBoltUsfc1870],
        ['BevinsBoltUsfc1870Table', BevinsBoltUsfc1870Table],
        ['BevinsBoltUsfc1880', BevinsBoltUsfc1880],
        ['BevinsBoltUsfc1880Table', BevinsBoltUsfc1880Table],
        ['BevinsWhite', BevinsWhite],
        ['NewboldVerdon1', NewboldVerdon1],
    ])

    function comp(item) {
        // These types use a standardized component throught the Book
        if (item.type === 'chapter') return Chapter
        if (item.type === 'newpage') return NewPage
        if (item.type === 'section') return Section
        // The 'content', 'figure', and 'table' types will use a filler component
        // if the specified item.comp is not in the map
        const key = (item.type === 'component') ? item.id : item.type
        if (compMap.has(item.comp)) return compMap.get(item.comp)
        if (item.type === 'content') return ContentPlaceholder
        if (item.type === 'figure') return FigurePlaceholder
        if (item.type === 'table') return TablePlaceholder
        throw new Error(`Item with unknown type: type='${item.type}' id='${item.id}' title='${item.title}''`)
    }

    const man = manifest()
</script>
There are {man.pages.length} pages
<Book>
    <!-- <Toc {toc}/> -->
    {#each man.pages as page}
        {#each  page.items as item}
            <svelte:component this={comp(item)} {item}/>
        {/each}
    {/each}
</Book>