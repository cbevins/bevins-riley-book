<script>
    import { buildToc } from './buildToc.js'
    import { bookToc } from './toc.js'
    import NewBook from './NewBook.svelte'
    import OldBook from './OldBook.svelte'
    const toc = buildToc(bookToc)
</script>

<NewBook {toc}/>