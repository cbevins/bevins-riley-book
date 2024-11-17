<script>
    import { NewPage, P, SectionTitle } from '$lib/markup'
    import { Placeholder } from '$lib/publish'

    export let man
    export let title = 'Book Title'
    export let showBreak = true

    function prefix(item) {
        const parts = item.href.split('-')
        let pre = parts[2]
        for(let i=3; i<parts.length; i++) pre += '.' + parts[i]
        return pre
    }
    function newpage(item) {
        return man.items[item.idx-1].type==='page'
    }
</script>

{#each man.items as item}
    {#if item.depth}
        {#if item.type === 'page'}
            <NewPage id={item.href} num={item.page} book={title} {showBreak}
                firstPage={item.page===1}/>
        {:else if item.type === 'section'}
            <SectionTitle depth={item.depth} id={item.href} title={item.title}
                prefix={prefix(item)} newpage={newpage(item)} />
        {:else if item.type === 'content'}
            {#if ! item.comp}
                <Placeholder {man} {item} />
            {:else}
                <svelte:component this={item.comp} {man} {item} />
            {/if}
        {/if}
    {/if}
{/each}