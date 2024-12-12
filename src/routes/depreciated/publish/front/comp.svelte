<script>
    // section = {self, seq, tag, parent, depth, page, tit;e}
    export let sections
    let items  
    $: items = Array.from(sections.values()).sort()
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    <div class='text-xl'>FRONT MATTER sections={sections.size}</div>
    <table class="text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                <th scope="col" class="px-2 py-1">Num</th>
                <th scope="col" class="px-2 py-1">Seq</th>
                <th scope="col" class="px-2 py-1">Parent</th>
                <th scope="col" class="px-2 py-1">Tag</th>
                <th scope="col" class="px-2 py-1">Self</th>
                <th scope="col" class="px-2 py-1">Depth</th>
                <th scope="col" class="px-2 py-1">Page</th>
                <th scope="col" class="px-2 py-1">Title</th>
            </tr>
        </thead>
        <tbody>
            {#each items as item, n}
        <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
            <td class="px-2 py-2 text-left">{n}</td>
            <td class="px-2 py-2 text-left">{item.seq}</td>
            <td class="px-2 py-2 text-left">{item.parent}</td>
            <td class="px-2 py-2 text-left">{item.tag}</td>
            <td class="px-2 py-2 text-left">{item.self}</td>
            <td class="px-2 py-2 text-left">{item.depth}</td>
            <td class="px-2 py-2 text-left">{item.page}</td>
            <td class="px-2 py-2 text-left">{item.title}</td>
        </tr>
    {/each}
</tbody></table>
</div>
