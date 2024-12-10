<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Lineage } from '$lib/publish'
    import { Da, Date, Footnote, Name, P, Place } from '$lib/markup'
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
<Lineage {names}/>

<P>
Our father <span><Da node={wcBevins}/></span>
was born near <Place>Deer River, Minnesota</Place>, the last of 9 children of
<Da node={hattieCollins}/> and <Da node={samBevins}/>.
</P><P>
Grandfather Samuel was born on <Date date='22 Dec 1881'/> <Footnote chapter='bevins' num='1'/>
in <Place>Annawan, Henry County, Illinois</Place>,
the last of 6 children raised by the immigrants <Da node={maryAnnWhite}/> and
<Da node={waBevins}/>.
</P><P>
<Da node={waBevins}/> was born in Newbold Verdon, Leicestershire, England in 1843.
In 1845 at age 2 he immigrated to America with his 30 year old father <Da node={wlBevins}/>
and 23 year old mother <Da node={maryBolt}/>. Also accompanying them
was his 7 year old step-brother <Name life='1838-1923'>John Henry Bevins</Name>
and 4 year old brother <Name life='1841-1926'>Joseph Bevins</Name>.
</P><P>
Twenty-four of the 27 known ancestors of <Da node={waBevins}/> are from
Newbold Verdon.  The exceptions are his grandmother <Da node={sarahAnnLongford}/>
and her parents who were originally from Somerset.
</P><P>
The remaining 23 known ancestors are on his wife's side; <Da node={maryAnnWhite}/>
immigrated to the US 26 years after her future husband.
All 19 of her father's known ancesters were from Brixham, Devon,
while all 4 of her mother's known ancestors were from Mevagissey, Cornwall.
Both are seaside fishing villages on England's southwest coast.
</P><P>
Documentation of our <Name>Bevins</Name> family line goes back many generations
in the immediate area of <Place>Newbold Verdon, Leicestershire, England</Place>,
a small farming village in the middle of the English Midlands:
</P>
    
    
