<script>
    export let toc
</script>

<table class="w-full text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr>
            <th scope="col" class="px-2 py-1">Section</th>
            <th scope="col" class="px-2 py-1">Page</th>
        </tr>
    </thead>
    <tbody>
        {#each toc.pages as page}
            {#each  page.items as item}
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2 text-left">{item.type} {item.id} {item.title}</td>
                <td class="px-2 py-2 text-center">{item.page}</td>
                </tr>
            {/each}
        {/each}
    </tbody>
</table>
