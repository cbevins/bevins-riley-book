<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Map, Page, Section, Sidebar } from '$lib/publish'
    import HistoryIntro from './HistoryIntro.svelte'
    import HistoryEarlyCultues from './HistoryEarlyCultures.svelte'
    import HistoryEnglish from './HistoryEnglish.svelte'
    import HistoryLandCommonsEnclosures from './HistoryLandCommonsEnclosures.svelte'
    import HistoryRomanConquest from './HistoryRomanConquest.svelte'
    import HistoryAngloSaxonPeriod from '../history/HistoryAngloSaxonPeriod.svelte'
    import HistorySexualMorals from './HistorySexualMorals.svelte'
    import HistoryVikings from './HistoryVikings.svelte'
    import HistoryWilliamConqueror from './HistoryWilliamConqueror.svelte'
    import NewboldVerdonPage1 from './NewboldVerdonPage1.svelte'
	import NewboldVerdonPage2 from './NewboldVerdonPage2.svelte'
	import NewboldVerdonPage3 from './NewboldVerdonPage3.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='history' title='English History and Geography'/>
<Content {man} {depth} file='HistoryIntro.svelte' comp={HistoryIntro} />
<Section {man} depth={d1} folder='history' title='Early Cultures in Britain (12,000 - 43 BC)'/>
<Content {man} depth={d1} file='HistoryEarlyCultures.svelte' comp={HistoryEarlyCultues} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Roman Conquest (43 BC - 410 AD)'/>
<Content {man} depth={d1} file='HistoryRomanConquest.svelte' comp={HistoryRomanConquest} />
<Sidebar {man} depth={d1} file='HistorySexualMorals.svelte' comp={HistorySexualMorals}
                title='Roman v Scottish Sexual Morals' />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Anglo-Saxon Period (410-1066)'/>
<Content {man} depth={d1} file='HistoryAngloSaxonPeriod.svelte' comp={HistoryAngloSaxonPeriod}/>

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Vikings Age (793-878)'/>
<Content {man} depth={d1} file='HistoryVikings.svelte' comp={HistoryVikings}/>

<Page {man}/>
<Section {man} depth={d1} folder='history' title='English Language Development'/>
<Content {man} depth={d1} file='HistoryEnglish.svelte' comp={HistoryEnglish}/>

<Page {man}/>
<Section {man} depth={d1} folder='history' title='William the Conqueror'/>
<Content {man} depth={d1} file='HistoryWilliamConqueror.svelte' comp={HistoryWilliamConqueror} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='Manors, Commons, and Enclosures'/>
<Content {man} depth={d1} file='HistoryLandCommonsEnclosures.svelte' comp={HistoryLandCommonsEnclosures} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='Newbold Verdon, Home of the Bevins'/>
<Content {man} depth={d1} file='NewboldVerdonPage1.svelte' comp={NewboldVerdonPage1}/>

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonPage2.svelte' comp={NewboldVerdonPage2}/>

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonPage3.svelte' comp={NewboldVerdonPage3}/>
