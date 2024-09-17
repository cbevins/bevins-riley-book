<script>
    export let id = ''
    export let pageno = ''  // current pageno
    export let titles = []  // Section title

    if (!Array.isArray(titles)) titles = [titles]
</script>

<div id={id} class='text-lg text-center text-black font-serif font-bold'>
    {#each titles as title}
        <div>{title}</div>
    {/each}
</div>
