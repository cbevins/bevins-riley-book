<script>
    // ./body/bevins/origins/Manifest.svelte
    import { Content, Page, Section } from '$lib/publish'
    import HistoryIntro from './HistoryIntro.svelte'
    import HistoryEarlyCultues from './HistoryEarlyCultures.svelte'
    import HistoryEnglishPage1 from './HistoryEnglishPage1.svelte'
    import HistoryEnglishPage2 from './HistoryEnglishPage2.svelte'
    import HistoryLandCommonsEnclosures from './HistoryLandCommonsEnclosures.svelte'
    import HistoryRomanConquest from './HistoryRomanConquest.svelte'
    import HistoryAngloSaxonPeriod from '../history/HistoryAngloSaxonPeriod.svelte'
    import HistoryVikings from './HistoryVikings.svelte'
    import HistoryWilliamConquerorPage1 from './HistoryWilliamConquerorPage1.svelte'
    import HistoryWilliamConquerorPage2 from './HistoryWilliamConquerorPage2.svelte'

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
<Section {man} depth={d1} folder='history' title='The Viking Age (793-878)'/>
<Content {man} depth={d1} file='HistoryVikings.svelte'
    comp={HistoryVikings}/>

<Page {man}/>
<Section {man} depth={d1} folder='history' title='English Language Development'/>
<Content {man} depth={d1} file='HistoryEnglishPage1.svelte'
    comp={HistoryEnglishPage1}
    features={[['figure', 'Beowulf Manuscript'],
        ['table', 'Example Beowulf Translation']]}/>

<Page {man}/>
<Content {man} depth={d1} file='HistoryEnglishPage2.svelte'
    comp={HistoryEnglishPage2}
    features={[['table', 'Canterbury Tales Translation']]} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='William the Conqueror'/>
<Content {man} depth={d1} file='HistoryWilliamConquerorPage1.svelte'
    comp={HistoryWilliamConquerorPage1}
    features={[['figure', "Wine for William's Invasion"]]} />
<Page {man}/>
<Content {man} depth={d1} file='HistoryWilliamConquerorPage2.svelte'
    comp={HistoryWilliamConquerorPage2} />

<Page {man}/>
<Section {man} depth={d1} folder='history' title='Manors, Commons, and Enclosures'/>
<Content {man} depth={d1} file='HistoryLandCommonsEnclosures.svelte'
    comp={HistoryLandCommonsEnclosures}
    features={[['figure', "Plan of a Mediaeval Manor"]]} />
