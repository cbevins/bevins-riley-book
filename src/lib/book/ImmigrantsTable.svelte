<script>
    import { flagPinGxml } from '$lib/flags/flagPinsGxml.js'
    import { gxmlStr } from '$lib/gxml/gxmlStr.js'

    export let item
    export let immigrants       // Array of 
    export let captions = []
    const headers = ['', 'Name', 'Born', 'Arrived', 'Age']
</script>

<div class='text-left text-black font-serif'>
    <div class="text-lg mt-3 font-semibold">Table {item.id}: {item.title}</div>
</div>

<div class="relative overflow-x-auto shadow-md border-4 border-slate-500 rounded-xl">
    {#each captions as caption}
        <div class='text-lg text-center font-bold'>{caption}</div>
    {/each}
    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                {#each headers as header}
                    <th scope="col" class="px-2 py-1">{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each immigrants as person }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py-2 text-center">
                        {@html gxmlStr(flagPinGxml(person.born, 0, 0, 0.25))}
                    </td>
                    <td class="px-2 py-2" text-left>{person.name}</td>
                    <td class="px-2 py-2" text-left>{person.born}</td>
                    <td class="px-2 py-2" text-left>{person.year}</td>
                    <td class="px-2 py-2" text-left>{person.age}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
