<script>
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    export let id, num
    const data = [
        ['Fulton','William Bevins','Eng',34,5],
        ['Knox','Bazel Bevins','PN',2091,'1 of 7'],
        ['Sangamon','Margaret Bevins','MD',7,'1 of 6'],
        ['Madison','Egbert Bevins','IL',43,4],
    ]
</script>

<div id={id}>
<NoteItem  item={num}>
    Bevins households enumerated by the 1850 Census in Illinois
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th class='px-2 text-left'>County</th>
                <th class='px-2 text-left'>Name</th>
                <th class='px-2 text-left'>Born</th>
                <th class='px-2 text-left'>Dwelling #</th>
                <th class='px-2 text-left'>No of Bevins</th></tr>
        </thead>
        <tbody class='text-left'>
            {#each data as [county, name, born, dwell, no]}
            <tr>
                <td class='px-2 text-left'>{county}</td>
                <td class='px-2 text-left'>{name}</td>
                <td class='px-2 text-left'>{born}</td>
                <td class='px-2 text-center'>{dwell}5</td>
                <td class='px-2 text-center'>{no}</td></tr>
        {/each}
    </tbody>
</table>
</NoteItem>
</div>
