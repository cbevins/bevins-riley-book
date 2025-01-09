<script>
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import { getAllChannels } from '$lib/content/singletons.js'

    import Card from '$lib/book/Card.svelte'
    import P from '$lib/book/P.svelte'

    const sylvan = getSylvan()
    const lines = getAllChannels()
    const headers = ['Lineage', 'Lineage Founder', 'Founder Ancestors', 'Lineage Root', 'Root Ancestors']

    let families = sylvan.families().famKeyMap().size
    let people = sylvan.people().nameKeyMap().size
</script>

<Card>
    <a href="/story-book"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-5 py-2.5 focus:outline-none">
        Story Book Edition</a>
    <a href="/diagnostics"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-5 py-2.5 focus:outline-none">
        Gedcom Diagnostics</a>
    <a href="/research-journal"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-5 py-2.5 focus:outline-none">
        Research Journal Edition</a>
    <a href="/forms"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-5 py-2.5 focus:outline-none">
        Forms</a>

    <P>Bevins-Riley Tree currently has {families} families and {people} people</P>

    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr>
                {#each headers as header}
                    <th scope="col" class="px-2 py-1">{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each lines as {channel, key} }
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2 text-left">
                    {key}</td>
                <td class="px-2 py-2 text-left">
                    {channel.branchNode().person.fullName()}</td>
                <td class="px-2 py-2 text-center">
                    {channel.branchNode().ancestors}</td>
                <td class="px-2 py-2 text-left">
                    {channel.rootNode().person.fullName()}</td>
                <td class="px-2 py-2 text-left">
                    {channel.rootNode().ancestors}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</Card>
