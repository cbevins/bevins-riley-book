<script>
    import Book from '$lib/book/Book.svelte'
    import NewPage from '$lib/book/NewPage.svelte'
    import LoremIpsum from '../../lib/book/LoremIpsum.svelte'

    import FrontCover from './FrontCover.svelte'
    import Chapter1 from './bevins-lineage/Chapter.svelte'
    import Chapter2 from './collins-lineage/Chapter.svelte'

    const parts = [ // [component, id, part, title, pageno]
        [Chapter1, 'oattap-bevins', 'Chapter 1', 'The Bevins Lineage', 11],
        [Chapter1, 'oattap-collins', 'Chapter 2', 'The Collins Lineage',  22],
    ]
    let pn = 0
    function addPages(pages)  {
        pn += pages
        return pages
    }
</script>

<FrontCover/>
<Book>
    {#each parts as [comp, id, part, title, pages]}
        <svelte:component this={comp} {id} {part} {title} pageno={addPages(pages)}/>
    {/each}
</Book>
