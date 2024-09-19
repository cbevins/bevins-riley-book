<script>
    export let census
    const headers = ['Name', 'Age', 'Sex', 'Occupation', 'Birth Place', 'Marr?', 'School', 'Illit?']
    function check(item) { return item ? '&#10004;' : ''}
</script>

<div class="relative overflow-x-auto shadow-md border-4 border-slate-500 rounded-xl">
    <div class='text-lg text-center font-bold'>{census.family.name}</div>
    <div class='text-lg text-center'>1860 United States Federal Census</div>
    <div class='text-md text-center mt-2'>
        {census.sheet.place}, {census.sheet.county} County, in the State of {census.sheet.state}
    </div>
    <div class='text-md text-center mb-2'>
        Census Sheet {census.sheet.number} Recorded on {census.sheet.date}
    </div>
    <div class='text-md text-center mb-2'>
        Real Eastate Value {census.family.realEstate}, Personal Value {census.family.personal}
    </div>
    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                {#each headers as header}
                    <th scope="col" class="px-2 py-1">{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each census.lines as member }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py-2 text-left">{member.name}</td>
                    <td class="px-2 py-2 text-center">{member.age}</td>
                    <td class="px-2 py-2 text-center">{member.sex}</td>
                    <td class="px-2 py-2 text-center">{member.occ}</td>
                    <td class="px-2 py-2 text-center">{member.bornin}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.married)}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.school)}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.illit)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
    {#if census.sheet.notes.length}
        {#each census.sheet.notes as note, i}
            <div class='text-sm text-left text-gray-500 font-normal'>Note {i+1}: {note}</div>
        {/each}
    {/if}
</div>