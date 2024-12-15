<script>
    import { Name, NoteItem } from '$lib/markup'
    export let id, num
    const data = [
        ['Carroll','Chas F Bevins','VT',5,2],
        ['Carroll','Thomas Bevins','VT',104,5],
        ['Cook','Martha Bevins','OH',653,4],
        ['Fulton','Haney Mary Bevins','NY',97,5],
        ['Henry','William Bevins','Eng',29,10],
        ['Iroquois','James Bevins (Wid)','Eng',238,4],
        ['Menard','Hannah Bevins','VI',210,5],
        ['Pike','Charles Bevins','NC',125,2],
        ['Union','James Bevins','OH',27,2],
    ]
</script>

<div id={id}>
<NoteItem  item={num}>
    Some elder Bevins from the 1870 USFC in Illinois:
    There was a <Name>Hannah Bevins</Name> born in Virginia in 1798.
    There was a <Name>Charles Bevins</Name> born in North Carolina in 1790.
<div class='mt-1'/>
    Bevins households enumerated by the 1870 Census in Illinois:
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th class='px-2 text-left'>County</th>
                <th class='px-2 text-left'>Name</th>
                <th class='px-2 text-left'>S, M, F</th>
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
    </tbody></table>
</NoteItem>
</div>
