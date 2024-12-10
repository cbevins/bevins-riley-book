<script>
    import { NewPage } from '$lib/markup'

    export let man
    export let name     // 'Figure', 'Map', 'Sidebar', or 'Table'
    export let items    // reference to man.figures, man.maps, man.tables
    export let book = ''
    export let chapter = ''

    function pageHtml(item) {
        const id = man.pageId(item.page)
        return `<a class="underline" href='#${id}'>${item.page}</a>`
    }

    function titleHtml(item) {
        let html = `<a href='#${item.id}'>`
        html += `<span class="underline">${name} ${item.seq}</span>`
        html += ` - ${item.toc}</a>`
        return html
    }
</script>

<NewPage {book} {chapter} id={man.folder+'-listOf'+name}/>

<div class="mb-4 text-4xl font-bold text-left">
    {chapter}
</div>

<table class='w-full mb-8'>
    <thead>
        <tr class="even:bg-white odd:bg-gray-50 bg-white border-b ">
            <th class="text-lg px-2 py-1">{name} Title</th>
            <th class="text-lg px-2 py-1">Section</th>
            <th class="text-lg px-2 py-1">Page</th>
        </tr>
    </thead>
    <tbody>
        {#each items as item }
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="text-lg px-2 py-1">{@html titleHtml(item)}</td>
                <td class="text-lg px-2 py-1">{item.section}</td>
                <td class="text-lg px-2 py-1">{@html pageHtml(item)}</td>
            </tr>
        {/each}
    </tbody>
</table>