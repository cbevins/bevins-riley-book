<script>
    import {getPage, incPage, addToc} from '$lib/book/singletons.js'
    
    export let part = ''
    export let title = ''
    export let showBreak = true
    
    const pn = incPage()
</script>

<div style="page-break-before: always"/>

{#if showBreak}
<hr class="relative -left-[0.75in] w-[8.5in] h-0.5 drop-shadow-md bg-slate-500 border-0 rounded">
{/if}

<div id='pager' class='relative w-[7in] h-[0.75in] border-2 border-slate-400'>
    <div class="float-left mt-2 italic">Our Ancestors<br>through Time and Place</div>
    <div class="float-right mt-5 italic">Page {getPage()}</div>
    <div class="mx-auto w-[3in] mt-2 text-center italic">{part}<br>{title}</div>
</div>
