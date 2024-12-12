<script>
	import { Lineage } from '$lib/lineage/Lineage.js'
    import { H3 } from '$lib/markup'
    export let prefix
    export let subjectNameKey
	export let sylvan

    $: subject = sylvan.people().find(subjectNameKey)
    $: lineage = new Lineage(subject)
    $: rows = runDiagnostics(prefix)

function runDiagnostics(prefix) {
    const rows = []
    // Check file seq numbers
    for (const [person, node] of lineage.personsMap().entries()) {
        const msgs = person.review()
        const id = '(#' + prefix + node.seq + ')'
        if (! person.nameSuffix() || person.nameSuffix() === '')
            msgs.push(['Ancestor Id Missing', `Add ${id}`])
        else if (! person.nameSuffix().includes(id))
            msgs.push(['Ancestor Id Wrong', `Change from '${person.nameSuffix()}' to '${id}'`])
		if (msgs.length) rows.push([node.seq, person, msgs])
    }
    rows.sort((a, b) => { return (a[0] - b[0]) })
    return rows
}
</script>

<H3>Diagnostics for {subject.label()}</H3>
<H3>{rows.length} messages for {lineage.size()} Direct Ancestors</H3>
<table class="text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <th scope="col" class="px-2 py-1">Seq</th>
        <th scope="col" class="px-2 py-1">Name</th>
        <th scope="col" class="px-2 py-1">Message</th>
    </thead>
    <tbody>
        {#each rows as [seq, person, msgs]}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="px-2 py-2 text-left">{seq}</td>
                <td class="px-2 py-2 text-left">{person.label()}</td>
                <td class="px-2 py-2 text-left">
                {#each msgs as msg, i}
                    {msg[0]}: {msg[1]}<br>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
<!-- {@html diagnosticsHtml(sylvan, subjectNameKey, prefix)}  -->
