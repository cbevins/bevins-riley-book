<script>
    import { manifest } from './manifest.js'
    import { Book, Chapter, NewPage, Section, Toc } from '$lib/book'
    import { ContentPlaceholder, FigurePlaceholder, TablePlaceholder } from '$lib/book'
    
    import Introduction from './introduction/Introduction.svelte'
    import BevinsIntroduction from './bevins-lineage/Introduction.svelte'
    import BevinsTimeLine from './bevins-lineage/TimeLine.svelte'
    import CollinsIntroduction from './collins-lineage/Introduction.svelte'
    import HeddensIntroduction from './heddens-lineage/Introduction.svelte'
    import NattrassIntroduction from './nattrass-lineage/Introduction.svelte'
    import RileyIntroduction from './riley-lineage/Introduction.svelte'
    import DeReusIntroduction from './dereus-lineage/Introduction.svelte'
    import TrombleyIntroduction from './trombley-lineage/Introduction.svelte'
    import NelsonIntroduction from './nelson-lineage/Introduction.svelte'

    // Maps the Manifest item.comp key to its SVelte component
    const compMap = new Map([
        ['Introduction', Introduction],
        ['BevinsIntroduction', BevinsIntroduction],
        ['BevinsTimeLine', BevinsTimeLine],
        ['CollinsIntroduction', CollinsIntroduction],
        ['HeddensIntroduction', HeddensIntroduction],
        ['NattrassIntroduction', NattrassIntroduction],
        ['RileyIntroduction', RileyIntroduction],
        ['DeReusIntroduction', DeReusIntroduction],
        ['TrombleyIntroduction', TrombleyIntroduction],
        ['NelsonIntroduction', NelsonIntroduction],

    ])

    function comp(item) {
        // Use the requested component, if it is in the Map
        if (compMap.has(item.comp)) return compMap.get(item.comp)
        // Otherwise, these types use a standardized component
        if (item.type === 'chapter') return Chapter
        if (item.type === 'pageheader') return NewPage
        if (item.type === 'section') return Section
        // While these types use a placeholder component
        if (item.type === 'content') return ContentPlaceholder
        if (item.type === 'figure') return FigurePlaceholder
        if (item.type === 'table') return TablePlaceholder
        throw new Error(`Manifest Item with unknown type: type='${item.type}' id='${item.id}' title='${item.title}''`)
    }

    const man = manifest()
</script>
Bevins-Riley Storybook has {man.pages.length} pages
<Book>
    <!-- <Toc {toc}/> -->
    {#each man.pages as page}
        {#each page.items as item}
            <svelte:component this={comp(item)} {item}/>
        {/each}
    {/each}
</Book>