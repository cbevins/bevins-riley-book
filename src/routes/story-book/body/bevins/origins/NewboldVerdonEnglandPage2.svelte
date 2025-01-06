<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Bold, Da, Em, Lf, ListItem18, P, Place } from '$lib/markup'
    const p = $$props // Ignore passed props: man, item, id

    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    // const wcBevins = lineage.find('WilliamCollinsBevins1931')
    // const wBevinsSr = lineage.find('WilliamBevins1665')
    // const samBevins = lineage.find('SamuelBevins1881')
    // const hattieCollins =  lineage.find('HattieJaneCollins1889')
    const johnBevins = lineage.find('JohnBevins1783')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
</script>

<ListItem18 item='3rd GGP'>
Their son <Da node={johnBevins}/> was born 10 miles north of <Place>Newbold Verdon</Place>
in <Place>Sheepshed</Place> while his wife <Da node={sarahAnnLongford}/>
was born 85 miles southwest <Place>Middlesex, London</Place>.
Her family origins appear to be near Bridgewater in Somerset county in the southwest.
They are known to have at least 9 children.
</ListItem18>

<ListItem18 item='2nd GGP'>
Their son <Da node={wlBevins}/> was also born in <Place>Newbold Verdon</Place>,
while his wife <Da node={maryBolt}/> was born 4 miles south in <Place>Barwell</Place>.
It was this couple who emmigrated to America in 1845 with their then 3 children.
They would eventually raise 11 children.
</ListItem18>

<ListItem18 item='1st GGP'>
Their son, the immigrant <Da node={waBevins}/>
was also born in <Place>Newbold Verdon</Place>.
His wife, the immigrant <Da node={maryAnnWhite}/>, was born in <Place>Brixham</Place>
but had been residing in <Place>Leicester</Place> with her first husband
(another Bevins) before marrying William and emigrating to Illinois
with her daughter Allace in 1871.  Her family origins are in Devon and Cornwall
in southwest England (see next section).
William and Mary would have 5 more children between them in AMerica.
</ListItem18>
<Lf/>
