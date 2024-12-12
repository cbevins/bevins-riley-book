<script>
    import { NewPage } from '$lib/markup'

    export let man
    export let type     // 'figure', 'map', 'sidebar', or 'table'
    export let book = ''

    const Type = type.charAt(0).toUpperCase() + type.slice(1)
    const chapter = `List of ${Type}s`

    function pageHtml(feature) {
        const id = man.pageId(feature.item.page)
        return `<a class="underline" href='#${id}'>${feature.item.page}</a>`
    }

    function sectionHtml(feature) {
        return `<a href='#${feature.item.id}'>`
            + `<span class="underline">${feature.item.section}</span>`
    }

    function titleHtml(feature) {
        return `<a href='#${feature.id}'>`
            + `<span class="underline">${feature.title}</span>`
    }
</script>

<NewPage {book} {chapter} id={man.folder+'-listOf'+Type+'s'}/>

<div class="mb-4 text-4xl font-bold text-left">{chapter}</div>

<table class='w-full mb-8'>
    <thead>
        <tr class="even:bg-white odd:bg-gray-50 bg-white border-b ">
            <th class="text-lg px-2 py-1">Section</th>
            <th class="text-lg px-2 py-1">{Type} Title</th>
            <th class="text-lg px-2 py-1">Page</th>
        </tr>
    </thead>
    <tbody>
        {#each man.features as feature }
        {#if feature.type === type}
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="text-lg px-2 py-1">{@html sectionHtml(feature)}</td>
                <td class="text-lg px-2 py-1">{@html titleHtml(feature)}</td>
                <td class="text-lg px-2 py-1">{@html pageHtml(feature)}</td>
            </tr>
            {/if}
        {/each}
    </tbody>
</table>