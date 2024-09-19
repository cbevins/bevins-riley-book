<script>
    import {addToc} from '$lib/book/singletons.js'
    import NewPage from '$lib/book/NewPage.svelte'

    export let captions = []    // Section captions
    export let id = ''          // Section element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin

    if (!Array.isArray(captions)) captions = [captions]
    addToc({id, part, title, captions})
</script>

{#if newpage}
    <NewPage {part} {title}/>
{/if}

<div id={id} class='text-lg text-center text-black font-serif font-bold'>
    {#each captions as caption}
        <div>{caption}</div>
    {/each}
</div>
