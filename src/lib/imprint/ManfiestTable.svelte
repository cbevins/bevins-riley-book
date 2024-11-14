<script>
    export let man  // an array
    const title = man.pages[0].titles[0]
</script>

<div class="content-center mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
{title}
<table class="text-sm text-left text-gray-500 rounded-lg">
<tbody>
    {#each man.pages as page}
        {#each page.sections as section}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2">{page.num}</td>
                <td class="px-2 py-2">{page.id}</td>
                <td class="px-2 py-2">{section.folder}</td>
                <td class="px-2 py-2">{section.id}</td>
                <td class="px-2 py-2">{section.depth}</td>
                <td class="px-2 py-2">{section.pager}</td>
                <td class="px-2 py-2">{section.compkey}</td>
                <td class="px-2 py-2">'{section.title}'</td>
                <td class="px-2 py-2">{section.embeds.length}</td>
            </tr>
        {/each}
    {/each}
</tbody></table>
</div>