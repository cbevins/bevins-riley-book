<script>
    import {getPage} from '$lib/book'
    export let id
    export let showBreak = true

    const page = getPage(id)
</script>

<div style="page-break-before: always"/>

{#if showBreak}
<hr class="relative -left-[0.75in] w-[8.5in] h-0.5 drop-shadow-md bg-slate-200 border-0 rounded">
{/if}

<div id='pager' class='relative w-[7in] h-[0.75in] drop-shadow-md border-2 border-slate-200'>
    <div class="float-left mt-2 italic">{page.chapter}</div>
    <div class="float-right mt-2 italic">{page.section} Page {page.page}</div>
</div>
