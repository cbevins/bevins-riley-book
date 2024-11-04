<script>
    import NewBook from './NewBook.svelte'
    import OldBook from './OldBook.svelte'

    import { buildToc } from './buildToc.js'
    import { toc as bevinsToc } from './bevins-lineage/toc.js'
    import Websites from '$lib/content/Websites.svelte'

    const bookToc = {
        type: 'book',
        title: 'Our Ancestors through Time and Place',
        comp: null,
        items: [
            bevinsToc,
            {
                type: 'chapter', comp: null, page: 0,   // start on anew page
                title: 'The Collins Lineage',
                items: []
            },{
                type: 'chapter', comp: null,  page: 0,   // start on a new page
                title: 'The Heddens Lineage',
                items: []
            },{
                type: 'chapter', comp: Websites,  page: 0,   // start on a new page
                title: 'Useful Web Sites',
                items: []
            }
        ]
    }

    const toc = buildToc(bookToc)
</script>

<NewBook {toc}/>
<OldBook/>