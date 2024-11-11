<script>
    import { itemSequence } from '$lib/book'
    export let man      // book body manifest
    export let part     // 'toc'
    
    function href(item) {
        if (item.type === 'section')
            return itemSequence(item, '-', 0, '#book-')
        if (item.type === 'figure')
            return '#book-figure-' + item.id
        if (item.type === 'table')
            return '#book-table-' + item.id
    }

    function indentHtml(item) {
        const spaces = '&nbsp;&nbsp;&nbsp;&nbsp;'
        let indent = ''
        for (let i=0; i<item.depth; i++) indent += spaces
        return indent
    }

    function pageHtml(item) {
        let html = `<a class="underline" href='#page-${item.page.pageno}'> `
        html += `${item.page.pageno}</a>`
        return html
    }

    function seq(item) {
        if (item.type === 'section') return itemSequence(item, '.')
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
    {#each man.pages as page }
        {#each page.items as item }
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                {#if item.depth === 0}
                    <td class="text-lg font-bold px-2 py-1">{@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-lg font-bold px-2 py-1">{@html pageHtml(item)}</td>
                {:else}
                    <td class="text-base px-2 py-1">{@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-base px-2 py-1">{@html pageHtml(item)}</td>
                {/if}
            </tr>
        {/each}
    {/each}
</tbody></table>