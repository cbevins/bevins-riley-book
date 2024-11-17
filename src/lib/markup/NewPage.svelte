<script>
    export let id
    export let num = ''
    export let book = ''
    export let chapter = ''
    export let showBreak = true
    export let firstPage = false
</script>

<!-- If not first page, add a bottom margin to previous page -->
{#if ! firstPage}
    <div class='mt-8'></div>
{/if}

<!-- Force the page break -->
<div style="page-break-before: always"/>

{#if showBreak}
    <hr class="relative -left-[0.75in] w-[8.5in] h-0.5 drop-shadow-md bg-slate-200 border-0 rounded">
{/if}

<div id={id}
        class='relative w-[7in] h-[0.75in] drop-shadow-md border-2 border-slate-200'>
    <div class="float-left mt-2 italic">{book}<br>{chapter}</div>
    <div class="float-right mt-2 italic">Page {num}</div>
</div>
