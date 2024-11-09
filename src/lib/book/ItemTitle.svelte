<script>
    // <ItemTitle> is used by <BookPart>
    import { itemSequence } from '$lib/book'
    export let item
    let text, id
    if (item.type === 'section') {
        id = itemSequence(item, '-', 0, 'book-')
        text = itemSequence(item, '.') + ' ' + item.title
    } else if (item.type === 'figure') {
        id = 'book-figure-' + item.id
        text = 'Figure ' + item.id + ' - ' + item.title
    } else if (item.type === 'table') {
        id = 'book-table-' + item.id
        text = 'Table ' + item.id + ' - ' + item.title
    }
</script>

<div class='font-serif font-semibold'>
    {#if item.newpage}
            {#if item.depth === 0}
                <div id={id} class="text-2xl mt-3">{text}</div>
            {:else if item.depth === 1}
                <div id={id} class="text-xl mt-3">{text}</div>
            {:else if item.depth === 2}
                <div id={id} class="text-lg mt-3">{text}</div>
            {:else}
                <div id={id} class="text-lg mt-3 font-normal">{text}</div>
            {/if}
    {/if}
    
    {#if ! item.newpage}
        {#if item.depth === 0}
                <div id={id} class="text-2xl mt-8">{text}</div>
            {:else if item.depth === 1}
                <div id={id} class="text-xl mt-8">{text}</div>
            {:else if item.depth === 2}
                <div id={id} class="text-lg mt-8">{text}</div>
            {:else}
                <div id={id} class="text-lg mt-8 font-normal">{text}</div>
            {/if}
    {/if}
    </div>