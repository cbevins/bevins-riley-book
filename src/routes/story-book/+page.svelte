<script>
    import { manifest } from './manifest.js'
    import { Book } from '$lib/book'
    import MyToC from './MyToC.svelte'
    import Introduction from './introduction/IntroPart.svelte'
    import BevinsLineage from './bevins-lineage/Lineage.svelte'
    import CollinsLineage from './collins-lineage/Lineage.svelte'
    import DeReusLineage from './dereus-lineage/Lineage.svelte'
    import HeddensLineage from './heddens-lineage/Lineage.svelte'
    import NattrassLineage from './nattrass-lineage/Lineage.svelte'
    import NelsonLineage from './nelson-lineage/Lineage.svelte'
    import RileyLineage from './riley-lineage/Lineage.svelte'
    import TrombleyLineage from './trombley-lineage/Lineage.svelte'

    const man = manifest()
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    The Bevins-Riley Storybook currently, has {man.pages.length} pages.
</div>

<Book>
    <MyToC {man}/>
    <Introduction {man} part='intro'/>
    <BevinsLineage {man} part='bevins'/>
    <CollinsLineage {man} part='collins'/>
    <HeddensLineage {man} part='heddens'/>
    <NattrassLineage {man} part='nattrass'/>
    <RileyLineage {man} part='riley'/>
    <DeReusLineage {man} part='dereus'/>
    <TrombleyLineage {man} part='trombley'/>
    <NelsonLineage {man} part='nelson'/>
</Book>
