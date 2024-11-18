<script>
    export let man
    const pre = '#' + man.href + man.hrefSep + 'page' + man.hrefSep 
    
    function href(item) { return '#' + item.href }

    function indentHtml(item) {
        const spaces = '&nbsp;&nbsp;&nbsp;&nbsp;'
        let indent = ''
        for (let i=0; i<item.depth; i++) indent += spaces
        return indent
    }

    function pageHtml(item) {
        return `<a class="underline" href='${pre}${item.page}'>${item.page}</a>`
    }

    function seq(item) {
        if (item.type === 'section') return item.number()
        if (item.type === 'figure') return `Figure ${item.id}`
        if (item.type === 'table') return `Table ${item.id}`
    }

    function titleHtml(item) {
        let html = `<a href='${href(item)}'>`
        html += `<span class="underline">${seq(item)}</span>`
        html += `- ${item.title}</a>`
        return html
    }
</script>

<table><tbody>
    {#each man.items as item }
        {#if item.type === 'section' && item.depth}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                {#if item.depth === 1}
                    <td class="text-lg font-bold px-2 py-1">{@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-lg font-bold px-2 py-1">{@html pageHtml(item)}</td>
                {:else}
                    <td class="text-base px-2 py-1">{@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-base px-2 py-1">{@html pageHtml(item)}</td>
                {/if}
            </tr>
        {/if}
    {/each}
</tbody></table>