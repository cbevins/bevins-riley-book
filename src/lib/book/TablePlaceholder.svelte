<script>
    import {P} from '$lib/book'
    export let item
</script>
<div class="border-2 border-black mt-4 mb-4 p-4 rounded overflow-hidden shadow-lg shadow-slate-500 bg-blue-100">
    <div class="text-lg mt-3 font-semibold">
        Table: {item.title}
    </div>
    <P>The table Svelte component [{item.comp}] is currently under construction.</P>

<table class="mx-auto text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr>
            <th scope="col" class="px-2 py-1">Row</th>
            <th scope="col" class="px-2 py-1">Col 1</th>
            <th scope="col" class="px-2 py-1">Col 2</th>
            <th scope="col" class="px-2 py-1">Col 3</th>
        </tr>
    </thead>
    <tbody>
        {#each [1, 2, 3, 4] as row}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2 text-left">Row {row}</td>
                <td class="px-2 py-2 text-center">Col 1</td>
                <td class="px-2 py-2 text-center">Col 2</td>
                <td class="px-2 py-2 text-center">Col 3</td>
            </tr>
        {/each}
    </tbody>
</table>
</div>
