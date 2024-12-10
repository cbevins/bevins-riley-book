<script>
    import { getChannels } from '$lib/content/singletons.js'
	import SamuelBevinsBirthYear from './SamuelBevinsBirthYear.svelte'
    import EarliestBevinsInAmerica from './EarliestBevinsInAmerica.svelte'
    const p = $$props // Ignore passed props: man, item, id

    // These are all Lineage {node} references
    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const johnBevins = lineage.find('JohnBevins1783')
    const maryAnnIsom = lineage.find('MaryAnnIsom1766')
    const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
    const josephBevins = lineage.find('JosephBevins1762')
    const thomasBevins = lineage.find('ThomasBevins1731')
    const sarahWrathburn = lineage.find('SarahWrathburn1736')
    const williamBevins = lineage.find('WilliamBevins1705')
    const sarahWilkinson = lineage.find('SarahWilkinson1696')
</script>

<SamuelBevinsBirthYear id='footnote-bevins-1' num={1}/>
<EarliestBevinsInAmerica id='footnote-bevins-2' num={2}/>
