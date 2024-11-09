<script>
    export let item
    let text
    if (item.type === 'section') {
        let level = item.levels[0]
        for (let i=1; i<item.levels.length; i++) {
            if (item.levels[i])
            level += '.' + item.levels[i]
        }
        text = level + ' ' + item.title
    } else if (item.type === 'figure') {
        text = 'Figure ' + item.id + ' ' + item.title
    } else if (item.type === 'table') {
        text = 'Table ' + item.id + ' ' + item.title
    }
</script>

<div class='font-serif font-semibold'>
    {#if item.newpage}
            {#if item.depth === 0}
                <div class="text-2xl mt-3">{text}</div>
            {:else if item.depth === 1}
                <div class="text-xl mt-3">{text}</div>
            {:else if item.depth === 2}
                <div class="text-lg mt-3">{text}</div>
            {:else}
                <div class="text-lg mt-3 font-normal">{text}</div>
            {/if}
    {/if}
    
    {#if ! item.newpage}
        {#if item.depth === 0}
                <div class="text-2xl mt-8">{text}</div>
            {:else if item.depth === 1}
                <div class="text-xl mt-8">{text}</div>
            {:else if item.depth === 2}
                <div class="text-lg mt-8">{text}</div>
            {:else}
                <div class="text-lg mt-8 font-normal">{text}</div>
            {/if}
    {/if}
    </div>