<script>
    // Chapter usually begins with a <NewPage>, titles, and subtitles
    import {addToc} from '$lib/book/singletons.js'
    import NewPage from '$lib/book/NewPage.svelte'
    
    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let sections = []    // Chapter section components
    export let subs = []        // Chapter sub titles

</script>

{#if newpage}
    <NewPage {part} {title}/>
{/if}

<div id={id} class='text-center text-black font-serif'>
    <div class="text-lg mt-3 font-semibold">{part}</div>
    <div class="text-2xl mt-2 mb-2 font-bold">{title}</div>
    
    {#if subs.length}
        <hr class="w-48 h-1 mx-auto my-2 bg-gray-400 border-0 rounded">
    {/if}
    {#each subs as sub}
        <div class="text-lg font-normal">{sub}</div>
    {/each}
    
    <hr class="w-48 h-1 mx-auto my-2 bg-gray-400 border-0 rounded">
    <hr class="w-48 h-1 mx-auto my-2 mb-8 bg-gray-400 border-0 rounded">
    
    {#each sections as section}
        <svelte:component this={section.comp} {...section.props} {part} {title}/>
    {/each}
</div>