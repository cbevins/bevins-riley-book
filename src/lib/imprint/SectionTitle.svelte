<script>
    // <SectionTitle> is used by <BookPart>
    import { same, ignore } from './createManifest.js'

    export let section 
    const id = section.id
    const parts = id.split('-')
    let part = parts[3]
    for (let i=4; i<parts.length; i++) part += '.' + parts[i]
    const text = part + ' ' + section.title
    const newpage = section.pager !== same && section.pager !== ignore
</script>

<div class='font-serif font-semibold'>
    {#if newpage}
            {#if section.depth <= 1}
                <div id={id} class="text-2xl mt-3">{text}</div>
            {:else if section.depth === 2}
                <div id={id} class="text-xl mt-3">{text}</div>
            {:else if section.depth === 3}
                <div id={id} class="text-lg mt-3">{text}</div>
            {:else}
                <div id={id} class="text-lg mt-3 font-normal">{text}</div>
            {/if}
    {/if}
    
    <!-- Add more space before this title -->
    {#if ! newpage}
        {#if section.depth <= 1}
                <div id={id} class="text-2xl mt-8">{text}</div>
            {:else if section.depth === 2}
                <div id={id} class="text-xl mt-8">{text}</div>
            {:else if section.depth === 3}
                <div id={id} class="text-lg mt-8">{text}</div>
            {:else}
                <div id={id} class="text-lg mt-8 font-normal">{text}</div>
            {/if}
    {/if}
    </div>