<script>
    export let item
    const text = item.id + ' ' + item.title
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