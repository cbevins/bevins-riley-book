<script>
    import { NewPage } from '$lib/markup'

    export let man
    export let book = ''
    export let chapter = ''
    
    function indentHtml(item) {
        const spaces = '&nbsp;&nbsp;&nbsp;&nbsp;'
        let indent = ''
        for (let i=0; i<item.depth; i++) indent += spaces
        return indent
    }

    function pageHtml(item) {
        const id = man.pageId(item.page)
        return `<a class="underline" href='#${id}'>${item.page}</a>`
    }

    function seq(item) {
        if (item.type === 'section') return man.sectionNumber(item)
        if (item.type === 'Figure') return `Figure ${item.seq}`
        if (item.type === 'Map') return `Map ${item.seq}`
        if (item.type === 'Sidebar') return `Sidebar ${item.seq}`
        if (item.type === 'Table') return `Table ${item.seq}`
        throw new Error(`TableContents seq() has unknwon type '${type}'`)
        return ''
    }

    function titleHtml(item) {
        let html = `<a href='#${item.id}'>`
        html += `<span class="underline">${seq(item)}</span>`
        html += ` - ${item.title}</a>`
        return html
    }
</script>

<NewPage {book} {chapter} id={man.folder+'-toc'} />

<div id='book-table-contents'
    class="mb-4 text-4xl font-bold text-left">
    Table of Contents
</div>

<table><tbody>
    {#each man.items as item }
        {#if item.type === 'section' && item.depth}
            <tr class="even:bg-white odd:bg-gray-50 bg-white border-b ">
                {#if item.depth === 1}
                    <td class="text-lg font-bold px-2 py-1">
                        {@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-lg font-bold px-2 py-1">
                        {@html pageHtml(item)}</td>
                {:else}
                    <td class="text-base px-2 py-1">
                        {@html indentHtml(item)}{@html titleHtml(item)}</td>
                    <td class="text-base px-2 py-1">
                        {@html pageHtml(item)}</td>
                {/if}
            </tr>
        {/if}
    {/each}
</tbody></table>