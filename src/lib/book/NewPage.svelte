<script>
    export let page
    export let showBreak = true
</script>

<!-- If not first page, add a bottom margin to previous page -->
{#if page.pageno !== 1}
    <div class='mt-8'></div>
{/if}

<!-- Force the page break -->
<div style="page-break-before: always"/>

{#if showBreak}
    <hr class="relative -left-[0.75in] w-[8.5in] h-0.5 drop-shadow-md bg-slate-200 border-0 rounded">
{/if}

<div id='pager' class='relative w-[7in] h-[0.75in] drop-shadow-md border-2 border-slate-200'>
    <div class="float-left mt-2 italic">{page.headers[0]}<br>{page.headers[1]}</div>
    <div class="float-right mt-2 italic">Page {page.pageno}</div>
</div>
