<script>
    export let pages
    export let section
    export let showBreak = true
    export let firstPage = false

    let num = pages.length + 1
    section.page = num
    console.log(`Pager page ${num} for ${section.name} ${section.depth} '${section.header0}' '${section.header1}'`)
    pages.push(section)
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

<div id={'page-'+num}
        class='relative w-[7in] h-[0.75in] drop-shadow-md border-2 border-slate-200'>
    <div class="float-left mt-2 italic">{section.header0}<br>{section.header1}</div>
    <div class="float-right mt-2 italic">Page {num}</div>
</div>
