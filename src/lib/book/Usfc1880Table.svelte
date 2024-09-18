<script>
    export let census
    const headers = ['Name', 'Age', 'Relationhip', 'Status', 'Occupation',
        'Health', 'Attend<br>School?', 'Cannot Read?', 'Cannot Write?',
        "Person's<br>Birth Place", "Father's<br>Birth Place", "Mother's<br>Birth Place"]

    function check(item) { return item ? '&#10004;' : ''}
    function status(member) {
        if (member.single) return 'S'
        if (member.married) return 'M'
        if (member.widowed==='D') return 'D'
        if(member.widowed) return 'W'
        return ''
    }

    function health(member) {
        let str = ''
        str += (member.sick) ? 'Sick' : ''
        str += (member.blind) ? 'Blind' : ''
        str += (member.deaf) ? 'Deaf/Dumb' : ''
        str += (member.idiotic) ? 'Idiotic' : ''
        str += (member.insane) ? 'Insane' : ''
        str += (member.disabled) ? 'Disabled' : ''
        return str
}
</script>

<div class="relative overflow-x-auto shadow-md border-4 border-slate-500 rounded-xl">
    <div class='text-lg text-center font-bold'>{census.family.name}</div>
    <div class='text-lg text-center'>1880 United States Federal Census</div>
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
                    <th scope="col" class="px-1 py-1">{@html header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each census.lines as member }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-4 py-2" text-left>{member.name}</td>
                    <td class="px-2 py-2 text-center">{member.age}</td>
                    <td class="px-2 py-2 text-center">{member.rel}</td>
                    <td class="px-2 py-2 text-center">{@html status(member)}</td>
                    <td class="px-2 py-2 text-center">{member.occ}</td>
                    <td class="px-2 py-2 text-center">{@html health(member)}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.school)}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.cannotRead)}</td>
                    <td class="px-2 py-2 text-center">{@html check(member.cannotWrite)}</td>
                    <td class="px-2 py-2 text-center">{member.personBornin}</td>
                    <td class="px-2 py-2 text-center">{member.personBornin}</td>
                    <td class="px-2 py-2 text-center">{member.personBornin}</td>
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