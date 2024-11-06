<script>
    export let item
    export let showBreak = true
</script>

<div style="page-break-before: always"/>

{#if showBreak}
    <hr class="relative -left-[0.75in] w-[8.5in] h-0.5 drop-shadow-md bg-slate-200 border-0 rounded">
{/if}

<div id='pager' class='relative w-[7in] h-[0.75in] drop-shadow-md border-2 border-slate-200'>
    <div class="float-left mt-2 italic">{item.title}</div>
    <div class="float-right mt-2 italic">Page {item.page}</div>
</div>
