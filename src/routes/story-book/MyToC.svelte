<script>
    import { itemSequence } from '$lib/book'
    export let man

    function href(item) { return itemSequence(item, '-', 0, '#book-') }

    function seq(item) { return itemSequence(item, '.')}

    function indentHtml(item) {
        const spaces = '&nbsp;&nbsp;&nbsp;&nbsp;'
        let indent = ''
        for (let i=0; i<item.depth; i++) indent += spaces
        return indent
    }
</script>

<table>
    <tbody>
        {#each man.pages as page }
            {#each page.items as item }
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py-1">
                        {@html indentHtml(item)}
                        <a href={href(item)}>{seq(item)}  {item.title}</a>
                    </td>
                    <td class="px-2 py-1">
                        <a href='#page-{item.page.pageno}'>
                        {item.page.pageno}</a>
                    </td>
                </tr>
            {/each}
        {/each}
    </tbody>
</table>