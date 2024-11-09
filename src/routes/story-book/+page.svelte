<script>
    import { manifest } from './manifest.js'
    import { Book, Toc } from '$lib/book'
    import { ContentPlaceholder, FigurePlaceholder, TablePlaceholder } from '$lib/book'
    
    import BevinsLineage from './bevins-lineage/Lineage.svelte'
    import CollinsLineage from './collins-lineage/Lineage.svelte'
    import DeReusLineage from './dereus-lineage/Lineage.svelte'
    import HeddensLineage from './heddens-lineage/Lineage.svelte'
    import NattrassLineage from './nattrass-lineage/Lineage.svelte'
    import NelsonLineage from './nelson-lineage/Lineage.svelte'
    import RileyLineage from './riley-lineage/Lineage.svelte'
    import TrombleyLineage from './trombley-lineage/Lineage.svelte'

    function comp(item) {
        // Use the requested component, if it is in the Map
        if (compMap.has(item.comp)) return compMap.get(item.comp)
        // Otherwise, use a standardized component
        if (item.type === 'section') return ContentPlaceholder
        if (item.type === 'figure') return FigurePlaceholder
        if (item.type === 'table') return TablePlaceholder
        throw new Error(`Manifest Item with unknown type: type='${item.type}' id='${item.id}' title='${item.title}''`)
    }

    // const man = manifest()
    const man = manifest()
</script>
Bevins-Riley Storybook has {man.pages.length} pages
<Book>
    <BevinsLineage {man} part='bevins'/>
    <CollinsLineage {man} part='collins'/>
    <HeddensLineage {man} part='heddens'/>
    <NattrassLineage {man} part='nattrass'/>
    <RileyLineage {man} part='riley'/>
    <DeReusLineage {man} part='dereus'/>
    <TrombleyLineage {man} part='trombley'/>
    <NelsonLineage {man} part='nelson'/>
</Book>