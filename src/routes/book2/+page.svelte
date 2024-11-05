<script>
    import { getToc } from './getToc.js'
    import {Book} from '$lib/book'
    import Chapter from './Chapter.svelte'
    import Filler from './Filler.svelte'
    import Figure from './Figure.svelte'
    import NewPage from './NewPage.svelte'
    import Section from './Section.svelte'
    import Table from './Table.svelte'
    import Toc from './Toc.svelte'
    
    import BevinsOverview from './bevins-lineage/BevinsOverview.svelte'
    import BevinsImmigrantsTable from './bevins-lineage/BevinsImmigrantsTable.svelte'
    import NewboldVerdon1 from './bevins-lineage/NewboldVerdon1.svelte'

    const compMap = new Map([
        ['BevinsOverview', BevinsOverview],
        ['BevinsImmigrantsTable', BevinsImmigrantsTable],
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
        if (item.type === 'content') return Filler
        if (item.type === 'figure') return Figure
        if (item.type === 'table') return Table
        throw new Error(`Item with unknown type: type='${item.type}' id='${item.id}' title='${item.title}''`)
    }

    const toc = getToc()
</script>
<Book>
    <div class="text-left">

    <!-- <Toc {toc}/> -->
    
    {#each toc.pages as page}
    {#each  page.items as item}
    <svelte:component this={comp(item)} {item}/>
    {/each}
    {/each}
    </div>
</Book>