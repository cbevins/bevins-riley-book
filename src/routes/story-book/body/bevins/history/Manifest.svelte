<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import HistoryIntro from './HistoryIntro.svelte'
    import HistoryEarlyCultues from './HistoryEarlyCultures.svelte'
    import HistoryEnglish from './HistoryEnglish.svelte'
    import HistoryLandCommonsEnclosures from './HistoryLandCommonsEnclosures.svelte'
    import HistoryRomanConquest from './HistoryRomanConquest.svelte'
    import HistoryAngloSaxonPeriod from '../history/HistoryAngloSaxonPeriod.svelte'
    import HistoryVikings from './HistoryVikings.svelte'
    import HistoryWilliamConqueror from './HistoryWilliamConqueror.svelte'
    import NewboldVerdonPage1 from './NewboldVerdonPage1.svelte'
	import NewboldVerdonPage2 from './NewboldVerdonPage2.svelte'

    export let man
    export let depth
    const d1 = depth + 1    // down 1
</script>

<Page {man}/>
<Section {man} {depth} folder='history' title='English History and Geography'/>
<Content {man} {depth} file='HistoryIntro.svelte' comp={HistoryIntro} />

<Section {man} depth={d1} folder='history' title='Early Cultures in Britain (12,000 - 43 BC)'/>
<Content {man} depth={d1} file='HistoryEarlyCultures.svelte'
    comp={HistoryEarlyCultues} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Roman Conquest (43 BC - 410 AD)'/>
<Content {man} depth={d1} file='HistoryRomanConquest.svelte'
    comp={HistoryRomanConquest}
    features={[['sidebar', 'Roman vs Scottish Sexual Morals']]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Anglo-Saxon Period (410-1066)'/>
<Content {man} depth={d1} file='HistoryAngloSaxonPeriod.svelte'
    comp={HistoryAngloSaxonPeriod}
    features={[['map', 'Anglo-Saxon Migration'],['map', 'Anglo-Saxon-Heptarchy']]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='The Vikings Age (793-878)'/>
<Content {man} depth={d1} file='HistoryVikings.svelte'
    comp={HistoryVikings}/>

<Page {man}/>
<Section {man} depth={d1} folder='history' title='English Language Development'/>
<Content {man} depth={d1} file='HistoryEnglish.svelte'
    comp={HistoryEnglish}
    features={[['figure', 'Beowulf Manuscript'],
    ['table', 'Example Beowulf Translation'],
    ['table', 'Canterbury Tales Translation']]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='William the Conqueror'/>
<Content {man} depth={d1} file='HistoryWilliamConqueror.svelte'
    comp={HistoryWilliamConqueror}
    features={[['figure', "Wine for William's Invasion"]]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='Manors, Commons, and Enclosures'/>
<Content {man} depth={d1} file='HistoryLandCommonsEnclosures.svelte'
    comp={HistoryLandCommonsEnclosures}
    features={[['figure', "Plan of a Mediaeval Manor"]]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='Newbold Verdon, Home of the Bevins'/>
<Content {man} depth={d1} file='NewboldVerdonPage1.svelte' comp={NewboldVerdonPage1}/>

<Page {man}/>
<Content {man} depth={d1} file='NewboldVerdonPage2.svelte' comp={NewboldVerdonPage2}
    features={[['figure', "Framework Knitters"],
            ['map', 'Modern Day Newbold Verdon']]} />
