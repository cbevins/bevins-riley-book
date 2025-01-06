<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Bold, ListItem18, Lf, Name, P, Place } from '$lib/markup'
    import { LineageChart } from '$lib/publish'
    import Photo from '../images/WilliamAlfredBevins.jpg'
    const p = $$props // Ignore passed props: man, item, id
    
    const gens = [  // [person, pgender, spouse, sgender, gen]
        // ['Collin D Bevins', 'm', 'Barbara J Riley', 'f', 'Children'],
        ['Wm Collins Bevins', 'm', 'Meartia M Heddens', 'f', 'Parents'],
        ['Samuel Bevins', 'm', 'Hattie J Collins', 'f', 'Grand Parents'],
        ['Wm Alfred Bevins', 'm', 'Mary Ann White', 'f', '1st Great GP'],
        ['Wm Longford Bevins', 'm', 'Mary Bolt', 'f', '2nd Great GP'],
        // ['John Bevins', 'm', 'Sarah A Longford', 'f', '3rd Great GP'],
        // ['Joseph Bevins', 'm', 'Mary A Isom', 'f', '4th Great GP'],
        // ['Thomas Bevins', 'm', 'Sarah Wrathburn', 'f', '5th Great GP'],
        // ['William Bevins', 'm', 'Sarah Wilkinson', 'f', '6th Great GP'],
        // ['William Bevins', 'm', 'Judith Baker', 'f', '7th Great GP'],
    ]

    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    const wBevinsSr = lineage.find('WilliamBevins1665')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const sarahWilkinson = lineage.find('SarahWilkinson1696')

    const judithBaker = lineage.find('JudithBaker1665')
    const maryAnnIsom = lineage.find('MaryAnnIsom1766')
    const josephBevins = lineage.find('JosephBevins1762')
    const thomasBevins = lineage.find('ThomasBevins1731')
    const sarahWrathburn = lineage.find('SarahWrathburn1736')
    const williamBevins = lineage.find('WilliamBevins1705')

</script>
<Lf/>
<LineageChart {gens} vertical={false}/>

<div id='figure-william-alfred-bevins'
    class="float-left w-[2in] h-[2.7in] p-4 mr-4 mt-4 rounded-xl bg-green-200">
    <img src={Photo} alt='Willaim Alfred Bevins' width="300"/>
    <div class='text-center text-sm text-black font-serif'>
        William Alfred Bevins
    </div>  
</div>
<P>
Grandfather <Name>Samuel Bevins</Name>'s father <Da node={waBevins}/>
was born in <Bold>Newbold Verdon, Leicestershire, England</Bold> in 1843.
In 1845 at age 2 he emigrated to America with his then 30 year old father
<Da node={wlBevins}/> and 23 year old mother <Da node={maryBolt}/>.
Also accompanying them was his 7 year old step-brother
<Name life='1838-1923'>John Henry Bevins</Name>
and 4 year old brother <Name life='1841-1926'>Joseph Bevins</Name>.
</P><P>
Documentation of our <Name>Bevins</Name> family line goes back at least 7 generations
in the immediate vicvinity of <Place>Newbold Verdon</Place>,
a small farming village in the middle of the English Midlands:
</P>

<Lf/>

<ListItem18 item='7th GGP'>
<Da node={wBevinsSr}/> was born in Newbold Verdon.
His wife <Da node={judithBaker}/> was also born in Newbold Verdon.
They had at least 5 children together.
</ListItem18>

<ListItem18 item='6th GGP'>
Their son <Da node={williamBevins}/> was also born in Newbold Verdon.
His wife <Da node={sarahWilkinson}/> was born 3 miles northeast in <Place>Thornton</Place>.
They also had at least 5 children.
</ListItem18>
    
<ListItem18 item='5th GGP'>
Their son <Da node={thomasBevins}/> was also born in <Place>Newbold Verdon</Place>.
His wife <Da node={sarahWrathburn}/>
was born 4 miles southwest in <Place>Shenton</Place>.
They are known to have at least 10 children.
</ListItem18>

<ListItem18 item='4th GGP'>
Their son <Da node={josephBevins}/> was also born in <Place>Newbold Verdon</Place>
and his wife <Da node={maryAnnIsom}/> was born 4 miles south in <Place>Earl Shilton</Place>.
They raised at least 10 children.
</ListItem18>
