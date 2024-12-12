<script>
    export let man
    export let title
</script>

<div class="content-center mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
{title}
<table class="text-sm text-left text-gray-500 rounded-lg">
<tbody>
    {#each man as [depth, newpage, comp, title, embeds]}
        <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
            <td class="px-2 py-2">{depth}</td>
            <td class="px-2 py-2">{newpage}</td>
            <td class="px-2 py-2">{comp}</td>
            <td class="px-2 py-2">'{title}'</td>
            <td class="px-2 py-2">{embeds.length}</td>
        </tr>
    {/each}
</tbody></table>
</div>