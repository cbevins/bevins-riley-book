<script>
    import { manifest as bodyManifest } from './body/manifest.js'
    import { Book } from '$lib/book'
    import BookBody from './body/BookBody.svelte'
    import MyToC from './MyToC.svelte'

    const bodyMan = bodyManifest()
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    The Bevins-Riley Storybook currently, has {bodyMan.pages.length} pages.
</div>

<Book>
    <MyToC man={bodyMan}/>
    <BookBody man={bodyMan}/>
</Book>
