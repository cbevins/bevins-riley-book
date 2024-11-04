<script>
    import { Book, P } from '$lib/book'
    import FrontCover from '$lib/content/FrontCover.svelte'

    export let toc

    function tocLine(part) {
        if (part.type === 'chapter')
            return `Chapter ${part.numb}: ${part.title} [#${part.href}]`
        if (part.type === 'section')
            return `${pad(part)} ${part.numb}: ${part.title} [#${part.href}]`
        return `${pad(part)} ${part.type} ${part.numb}: ${part.title} [#${part.href} in section ${part.section}]`
    }

    function pad(item) {
        let str = ''
        for (let i=0; i<4*(item.depth-1); i++) str += '&nbsp;'
        return str
    }
</script>

<!-- <FrontCover/> -->
<P>NEW Book</P>
<Book>
    <!-- Table of Contents -->
    {#each toc.parts as part}
        <P>{@html tocLine(part)}</P>
    {/each}
<!-- 
    {#each parts as part}
        {#if part.comp}
            <svelte:component this={part.comp}/>
        {/if}
    {/each}
     -->
</Book>