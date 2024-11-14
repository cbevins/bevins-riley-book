<script>
    export let tdata

    // tdata = {
    //    cols: ['Row', 'A', 'B', 'C', 'D'],
    //    rows: [
    //        ['1', 'A1', 'B1', 'C1', 'D1'],
    //        ...
    //        ['4', '4A', 'B4', 'C4', 'D4'],
    //    ]
    //}
</script>

<table class="text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr>
            {#each tdata.cols as col}
                <th scope="col" class="px-2 py-1">{col}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each tdata.rows as row}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                {#each row as cell}
                    <td class="px-2 py-2 text-left">{cell}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
