<script>
    // page    = {type, idx, href, page, recto, verso}
    // section = {type, idx, href, page, depth, pidx, folder, path, seq, title}
    // content = {type, idx, href, page, depth, pidx, folder, path, comp}
    export let man
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    <div class='text-xl'>Publish Manifest has {man.items.length} Items</div>
    <table class="text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                <th scope="col" class="px-2 py-1">Index</th>
                <th scope="col" class="px-2 py-1">Type</th>
                <th scope="col" class="px-2 py-1">Page</th>
                <th scope="col" class="px-2 py-1">Depth</th>
                <th scope="col" class="px-2 py-1">Href</th>
                <th scope="col" class="px-2 py-1">Path</th>
                <th scope="col" class="px-2 py-1">Folder</th>
                <th scope="col" class="px-2 py-1">Title</th>
            </tr>
        </thead>
        <tbody>
            {#each man.items as item}
        <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
            <td class="px-2 py-2 text-left">{item.idx}</td>
            <td class="px-2 py-2 text-left">{item.type}</td>
            <td class="px-2 py-2 text-left">{item.page}</td>
            <td class="px-2 py-2 text-left">{item.depth}</td>
            <td class="px-2 py-2 text-left">{item.href}</td>
            <td class="px-2 py-2 text-left">{item.path}</td>
            <td class="px-2 py-2 text-left">{item.folder}</td>
            <td class="px-2 py-2 text-left">{item.title}</td>
        </tr>
    {/each}
</tbody></table>
</div>
