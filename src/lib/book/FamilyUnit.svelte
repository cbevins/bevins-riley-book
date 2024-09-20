<script>
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import { getAllChannels, getChannels } from '$lib/content/singletons.js'

    import Card from '$lib/book/Card.svelte'
    import P from '$lib/book/P.svelte'

    export let id = ''          // Chapter element id
    export let lineageKey
    export let fatherKey = null
    export let motherKey = null
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = []

    const sylvan = getSylvan()
    const lines = getAllChannels()
    const headers = ['Heads of Family Unit', 'Parental', 'Spousal']

    // How to get a lineage person's families
    const channels = getChannels(lineageKey)
    const fatherNode = channels.findPersonByNameKey(fatherKey)
    const father = fatherKey ? fatherNode.person : null
    const fatherParental = father ? father.familyParents() : null
    const fatherSpousal = father ? father.familySpouses() : null

    const motherNode = channels.findPersonByNameKey(motherKey)
    const mother = motherKey ? motherNode.person : null
    const motherParental = mother ? mother.familyParents() : null
    const motherSpousal = mother ? mother.familySpouses() : null
</script>

<Card>
<table>
    <tr>
        {#each headers as header}
            <td class="text-left">{header}</td>
        {/each}
    </tr>
    <tr>
        <td class="text-left">{father ? father.fullName() : 'Unknown'}</td>
        <td class="text-center">{father ? fatherParental.length : 0}</td>
        <td class="text-center">{father ? fatherSpousal.length : 0}</td>
    </tr>
    <tr>
        <td class="text-left">{mother ? mother.fullName() : 'Unknown'}</td>
        <td class="text-center">{mother ? motherParental.length : 0}</td>
        <td class="text-center">{mother ? motherSpousal.length : 0}</td>
    </tr>
</table>
</Card>

