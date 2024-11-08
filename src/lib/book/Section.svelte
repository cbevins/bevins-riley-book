<script>
    export let item
</script>
<div class='text-left text-black font-serif font-semibold'>
    {#if item.depth === 0}
        <div class="text-2xl mt-3">{item.id} {item.title}</div>
    {:else if item.depth === 1}
        <div class="text-xl mt-3">{item.id} {item.title}</div>
    {:else if item.depth === 2}
        <div class="text-lg mt-3">{item.id} {item.title}</div>
    {:else}
        <div class="text-lg mt-3 font-normal">{item.id} {item.title}</div>
    {/if}
</div>