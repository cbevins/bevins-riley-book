<script>
    import { manifest as backManifest } from './back-matter/manifest.js'
    import { manifest as bodyManifest } from './body/manifest.js'
    import { Book } from '$lib/book'
    import BackMatter from './back-matter/BackMatter.svelte'
    import BookBody from './body/BookBody.svelte'
    import FrontMatter from './front-matter/FrontMatter.svelte'

    // const frontMan = frontManifest()
    const backMan = backManifest()
    const bodyMan = bodyManifest()
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    The Bevins-Riley Storybook currently, has {bodyMan.pages.length} pages.
</div>

<Book>
    <FrontMatter body={bodyMan} back={backMan}/>
    <BookBody man={bodyMan}/>
    <BackMatter body={bodyMan} back={backMan}/>
</Book>
