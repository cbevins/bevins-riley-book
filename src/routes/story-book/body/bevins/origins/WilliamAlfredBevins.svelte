<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Name, P, Place, ListItem18} from '$lib/markup'
    import { Lineage } from '$lib/publish'
    // export let man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],
        ['Samuel Bevins', 'Hattie J Collins'],
        ['William A Bevins', 'Mary A White'],
        ['William L Bevins', 'Mary Bolt'],
    ]
/**
 * Lineage {node} properties:
 * - person: reference to the {node} subject's Person instance
 * - father: reference to the subject's father's {node}, or null
 * - mother: reference to the subject's mother's {node}, or null
 * - child: reference to the subject's descendant's {node}, or null
 * - gen: generation index, where root Person generation===0
 * - seq: lineage father-descent-first sequence number, where root Persin seq===1
*/
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
<Lineage {names}/>
<P>
Grandfather <Name>Samuel Bevins</Name>'s father <Da node={waBevins}/>
was born in <Place>Leicester, England</Place> in 1843.
He arrived in America at age 2 in 1845 along with his 30 year old
father <Da node={wlBevins}/> and 23 year old mother <Da node={maryBolt}/>.
Also accompanying them wa the 7 year old step-brother
<Name life='1838-1923'>John Henry Bevins</Name>
and 4 year old brother <Name life='1841-1926'>Joseph Bevins</Name>.
</P><P>
Documentation of the Bevins family line goes back at least 5 generations
in <Place>Newbold Verdon</Place>:
</P>

<ListItem18 item='6th Gen'>
<Da node={williamBevins}/> was born in Newbold Verdon.
His wife <Da node={sarahWilkinson}/> was born 3 miles northeast in <Place>Thornton</Place>.
</ListItem18>

<ListItem18 item='5th Gen'>
Their son <Da node={thomasBevins}/> was also born in <Place>Newbold Verdon</Place>.
His wife <Da node={sarahWrathburn}/>
was born 4 miles southwest in <Place>Shenton</Place>.
</ListItem18>

<ListItem18 item='4th Gen'>
Their son <Da node={josephBevins}/> was also born in <Place>Newbold Verdon</Place>
and his wife <Da node={maryAnnIsom}/> was born 4 miles south in <Place>Earl Shilton</Place>.
</ListItem18>

<ListItem18 item='3rd Gen'>
Their son <Da node={johnBevins}/> was born 10 miles north of <Place>Newbold Verdon</Place>
in <Place>Sheepshed Township</Place>
while his wife <Da node={sarahAnnLongford}/> was born further away (85 miles southwest)
in <Place>Middlesex, London</Place>.
</ListItem18>

<ListItem18 item='2nd Gen'>
Their son <Da node={wlBevins}/> was also born in <Place>Newbold Verdon</Place>,
while his wife <Da node={maryBolt}/>
was born 4 miles south in <Place>Barwell</Place>.
It was this couple who emmigrated to America in 1845 with their 3 children,
</ListItem18>

<ListItem18 item='1st Gen'>
Their son, the immigrant <Da node={waBevins}/>
was also born in <Place>Newbold Verdon</Place>,
while his wife <Da node={maryAnnWhite}/> had resided in
<Place>Leicester</Place> before emmigrating to Illinois.
</ListItem18>
    