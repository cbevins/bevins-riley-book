<script>
    import { Book, NewPage, P } from '$lib/newbook'
    import FrontCover from '$lib/content/FrontCover.svelte'
    import Toc from './Toc.svelte'

    export let toc

    let page = 0
</script>

<!-- <FrontCover/> -->
<P>NEW Book</P>
<Book>
    <!-- Table of Contents -->
    <Toc {toc}/>

    {#each toc.parts as item}
        {#if item.page === 0}
            <NewPage page={item.begins}/>
        {/if}

        {#if item.type === 'chapter'}
            <div class='text-lg text-center text-black font-serif font-bold'>
                Chapter {item.numb}: {item.title}
            </div>
        {/if}

        {#if item.type === 'section'}
            <div class='text-md text-left text-black font-serif font-bold'>
                Section {item.numb}: {item.title}
            </div>
        {/if}

        {#if item.type === 'table'}
            <div class='text-sm text-left text-black font-serif font-bold'>
                Table {item.numb}: {item.title}
            </div>
        {/if}

<!-- 
        {#if part.comp}
            <svelte:component this={part.comp}/>
        {/if}
-->
    {/each}
</Book>