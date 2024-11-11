<script>
    import { NewPage } from '$lib/book'
    import EndNotes from './end-notes/A.svelte'
    import Sources from './sources/A.svelte'

    export let body     // book body manifest
    export let back     // back-matter manifest

    const lastPage = body.pages[body.pages.length-1]
    const pageno = lastPage.pageno + 1

    const title = 'Our Ancestors Through Time and Place'
</script>

<NewPage page={{pageno, headers: [title, 'End Notes']}}/>
<EndNotes/>

<NewPage page={{pageno: pageno+1, headers: [title, 'End Notes']}}/>
<Sources/>
