<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Lf, ListItem18, Place } from '$lib/markup'
    const p = $$props // Ignore passed props: man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],
        ['Samuel Bevins', 'Hattie J Collins'],
        ['William A Bevins', 'Mary A White'],
        ['William L Bevins', 'Mary Bolt'],
    ]

    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    const wcBevins = lineage.find('WilliamCollinsBevins1931')
    const wBevinsSr = lineage.find('WilliamBevins1665')
    const samBevins = lineage.find('SamuelBevins1881')
    const hattieCollins =  lineage.find('HattieJaneCollins1889')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const sarahWilkinson = lineage.find('SarahWilkinson1696')

    const judithBaker = lineage.find('JudithBaker1665')
    const johnBevins = lineage.find('JohnBevins1783')
    const maryAnnIsom = lineage.find('MaryAnnIsom1766')
    const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
    const josephBevins = lineage.find('JosephBevins1762')
    const thomasBevins = lineage.find('ThomasBevins1731')
    const sarahWrathburn = lineage.find('SarahWrathburn1736')
    const williamBevins = lineage.find('WilliamBevins1705')

</script>

<ListItem18 item='2nd Gen'>
Their son <Da node={wlBevins}/> was also born in <Place>Newbold Verdon</Place>,
while his wife <Da node={maryBolt}/> was born 4 miles south in <Place>Barwell</Place>.
It was this couple who emmigrated to America in 1845 with their then 3 children.
They would eventually raise 11 children.
</ListItem18>

<ListItem18 item='1st Gen'>
Their son, the immigrant <Da node={waBevins}/>
was also born in <Place>Newbold Verdon</Place>,
while his wife the immigrant <Da node={maryAnnWhite}/> had resided in
<Place>Leicester</Place> before emmigrating to Illinois with her daughter
Allace in 1871.  Her family origins are in Devon and Cornwall
in the southwest. They would have 5 more children between them.
</ListItem18>
<Lf/>
