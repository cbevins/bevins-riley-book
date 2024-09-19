<script>
    import { belgium, canada, england, france, germany, ireland, netherlands,
        norway, scotland, sweden, unknown, wales, usa } from '$lib/gxml/flagsGxml.js'
    import { flagPinSingleGxml } from '$lib/gxml/flagPinSingleGxml.js'
    import { gxmlStr } from '$lib/gxml/gxmlStr.js'

    export let immigrants

    export const flag = new Map([
        ['Belgium', belgium],
        ['Canada', canada],
        ['England', england],
        ['France', france],
        ['Germany', germany],
        ['Ireland', ireland],
        ['Netherlands', netherlands],
        ['Norway', norway],
        ['Scotland', scotland],
        ['Sweden', sweden],
        ['unknown', unknown],
        ['USA', usa],
        ['Wales', wales]
    ])

    const titles = Array.isArray(immigrants.titles) ? immigrants.titles : [immigrants.titles]
    const headers = ['', 'Name', 'Born', 'Arrived', 'Age']
</script>

<div class="relative overflow-x-auto shadow-md border-4 border-slate-500 rounded-xl">
    {#each titles as title}
        <div class='text-lg text-center font-bold'>{title}</div>
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
            {#each immigrants.persons as person }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py-2 text-center">
                        {@html gxmlStr(flagPinSingleGxml(flag.get(person.born), 0, 0, 0.25))}
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
