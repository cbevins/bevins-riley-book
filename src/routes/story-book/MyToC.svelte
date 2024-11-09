<script>
    import { itemSequence } from '$lib/book'
    export let man

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

    function seq(item) {
        if (item.type === 'section') return itemSequence(item, '.')
        if (item.type === 'figure') return `Figure ${item.id}`
        if (item.type === 'table') return `Table ${item.id}`
    }
</script>

<table>
    <tbody>
        {#each man.pages as page }
            {#each page.items as item }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py-1">
                        {@html indentHtml(item)}
                        <a href={href(item)}>
                            <span class="underline">{seq(item)}</span>
                            : {item.title}
                        </a>
                    </td>
                    <td class="px-2 py-1">
                        <a class="underline" href='#page-{item.page.pageno}'>
                        {item.page.pageno}</a>
                    </td>
                </tr>
            {/each}
        {/each}
    </tbody>
</table>