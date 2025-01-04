<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Lineage } from '$lib/publish'
    import { Bold, Da, Date, Footnote, H1, H2, H3, Italic, ListItem18, Name, P, Place } from '$lib/markup'
    import Eng from '../images/England.jpg'
    const p = $$props // Ignore passed props: man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],  // parents
        ['Margaret E Nattrass', 'Ralph V Heddens'], // gp
        ['Harry S Nattrass', 'Gina O Myhre'],       // 1st ggp
        ['Alfred C Nattrass', 'Harriet L Sing'],    // 2nd ggp
        ['Thomas Nattrass', 'Mary Dexter'],         // 3rd ggp
        ['Matthew Nattrass', 'Elizabeth Hedley'],   // 4th ggp
        ['Matthew Nattrass', 'Ann Blades'],         // 5th

    ]
    const titles = ['Parents', 'Grand Parents',
        '1st Great Grand Parents', '2nd Great Grand Parents',
        '3rd Great Grand Parents', '4th Great Grand Parents']

    const lineage = getChannels('nattrass')
    // 5th GGP from Stanhope, Durham
    const matthewNattrass1748 = lineage.find('MatthewNattrass1748')
    const annBlades1748 = lineage.find('AnnBlades1748')
    // 4th GGP from Stanhope, Durham
    const matthewNattrass1771 = lineage.find('MatthewNattrass1771')
    const elizabethHedley1780 = lineage.find('ElizabethHedley1780')
</script>
<div class='mt-2'/>

<Lineage {names} {titles}/>
<H3>Nattrass Place of Origin</H3>
<P>
Nattrass ancestral homeland is Stanhope, Durham, England between Newcastle and the Pennines.
</P><P>
Immigrant is 3rd GGF Thomas Nattrass, born 1799 in Stanhope, Durham, and died
1865 in Peterborough County, Ontario.  He married Mary Dexter who was born in
1805 in Quebec (although many of her ancestral generations were American)
and died in 1849 in Ontario.
</P>
<P>
From <Bold>Hopkins Family Tree</Bold> by Kimberly Bowler
Edward Allerton (1553-1590) m. 1579 Rose Davis (1559-1596)
Earnest John Vincent (1608-1663) m Mary H Smith (1610-1675)
Mary E Vincent (1628-1712) m. Thomas Dexter Jr (1614-1686)

</P>
