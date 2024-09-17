<script>
    import ChapterBeg from '$lib/book/ChapterBeg.svelte'
    import Page from '$lib/book/Page.svelte'
    import { addpage } from '$lib/book/singletons.js'
    
    // Book attributes
    export let id       // something like '<book>-<chapter>'
    export let part     // part, something like 'Chapter 1'
    export let title    // part title
    
    // Chapter subtitles
    const subs = [
    ]
</script>

{addpage()}
<Page hl={part} hc={title}>
    <ChapterBeg part={part} title={title} subs={subs}/>
</Page>
