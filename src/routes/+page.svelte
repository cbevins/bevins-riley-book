<script>
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import { Channels } from '$lib/lineage/Channels.js'

    import Card from '$lib/book/Card.svelte'
    import P from '$lib/book/P.svelte'
    
    const sylvan = getSylvan()
    const bevinsRoot = sylvan.people().find('CollinDouglasBevins1952')
    const rileyRoot = sylvan.people().find('BarbaraJeanneRiley1953')

    const lines = [
        {name: 'Bevins', lineage: new Channels(bevinsRoot, true, 'SamuelBevins1878')},
        {name: 'Collins', lineage: new Channels(bevinsRoot, true, 'HattieJaneCollins1889')},
        {name: 'Heddens', lineage: new Channels(bevinsRoot, true, 'RalphVernonHeddens1909')},
        {name: 'Heddens', lineage: new Channels(bevinsRoot, true, 'MargaretEvaNattrass1914')},
        {name: 'Riley', lineage: new Channels(rileyRoot, true, 'SheldonJamesRiley1902')},
        {name: 'Trombley', lineage: new Channels(rileyRoot, true, 'DorothyMayTrombley1927')},
        {name: 'Nelson', lineage: new Channels(rileyRoot, true, 'MyrtleEstelleNelson1899')},
        {name: 'De Reus', lineage: new Channels(rileyRoot, true, 'GladysMaeDeReus1907')}
    ]
    for(let i=0; i<lines.length; i++) {
        lines[i].rootNode = lines[i].lineage.rootNode()
        lines[i].branchNode = lines[i].lineage.branchNode()
    }
    const headers = ['Lineage', 'Root Person', 'Root Ancestors', 'Founder Person', 'Founder Ancestors']
</script>

<Card>
    <a href="/book" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-5 py-2.5 focus:outline-none">
        Read the Book</a>
    <P>Sylvan has {sylvan.families().famKeyMap().size} families</P>

    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                {#each headers as header}
                    <th scope="col" class="px-2 py-1">{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each lines as line }
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2 text-left">{line.name}</td>
                <td class="px-2 py-2 text-left">{line.rootNode.person.fullName()}</td>
                <td class="px-2 py-2 text-left">{line.rootNode.ancestors}</td>
                <td class="px-2 py-2 text-left">{line.branchNode.person.fullName()}</td>
                <td class="px-2 py-2 text-center">{line.branchNode.ancestors}</td>
            </tr>
        {/each}
    </tbody>
</table>
</Card>
