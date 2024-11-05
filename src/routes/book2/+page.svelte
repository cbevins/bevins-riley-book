<script>
    import { getToc } from './getToc.js'
    import {Book} from '$lib/book'
    import Chapter from './Chapter.svelte'
    import Component from './Component.svelte'
    import Figure from './Figure.svelte'
    import NewPage from './NewPage.svelte'
    import Section from './Section.svelte'
    import Table from './Table.svelte'
    import Toc from './Toc.svelte'

    const compMap = new Map([
        ['chapter', Chapter],
        ['component', Component],
        ['figure', Figure],
        ['newpage', NewPage],
        ['section', Section],
        ['table', Table],
    ])

    function comp(item) {
        return compMap.get(item.type)
    }

    const toc = getToc()
</script>
<Book>

    <!-- <Toc {toc}/> -->
    
    {#each toc.pages as page}
    {#each  page.items as item}
    <svelte:component this={comp(item)} {item}/>
    {/each}
    {/each}
</Book>