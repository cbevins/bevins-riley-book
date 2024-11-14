<script>
    import { createManifest, Book } from '$lib/imprint'
    import { frontMatter } from './frontMatter.js'
    import { bodyMatter } from './bodyMatter.js'

    import Body from './body/A.svelte'
    import Front from './front/A.svelte'

    const frontMan = createManifest(frontMatter, 'book')
    const bodyMan = createManifest(bodyMatter, 'book')
    console.log(bodyMan.pages[0])
</script>
Imprint
<Book>
    <Front man={frontMan}/>
    <Body man={bodyMan}/>
</Book>
