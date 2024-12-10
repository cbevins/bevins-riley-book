<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Enquote, Name, P, Place, Source } from '$lib/markup'

    // Ignore passed props: man, item, id
    const p = $$props

    // These are all Lineage {node} references
    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    // const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    // const johnBevins = lineage.find('JohnBevins1783')
    // const maryAnnIsom = lineage.find('MaryAnnIsom1766')
    // const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
    // const josephBevins = lineage.find('JosephBevins1762')
    // const thomasBevins = lineage.find('ThomasBevins1731')
    // const sarahWrathburn = lineage.find('SarahWrathburn1736')
    // const williamBevins = lineage.find('WilliamBevins1705')
    // const sarahWilkinson = lineage.find('SarahWilkinson1696')
</script>

<P>
<Da node={wlBevins}/> and <Da node={maryBolt}/> had 11 children together
(plus 1 from William's first marriage to <Name>Ruth Gent</Name>).
One was our direct ancestor <Da node={waBevins}/>, with a younger brother
<Name>George Harrison Bevins</Name>, our great-granduncle.
</P><P>
George's second marriage to <Name>Lillian Belle Johnson</Name> produced
10 children, the second being <Name>Aaron Thomas Bevins</Name>,
our 1st cousin 2x removed.
He was born in 1894 in <Place>Gage County, Nebraska</Place>.
In 1910 he was in <Place>O'Brien, Iowa</Place>, and by
1920 had arrived in <Place>White Earth, Becker County, MN</Place>
</P><P>
<Name>Aaron Thomas Bevins</Name> first married <Name>Mary C Big Bear</Name>
in 1926 at <Place>White Earth, MN</Place>.  Mary was born in 1905 and is listed
on the 1934 Indian Census Roll with a 31/32 'Degree of Blood'.
Her 5 children of the time all have a 31/64 'Degree of Blood'.
Mary died in Dec 1935, just 6 months after the birth of her 6th child.
</P><P>
<Name>Aaron Bevins</Name> then married <Name>Marciana Alice Oshkinowe</Name> in 1938.
Marciana was born in <Place>White Earth, MN</Place> in 1918 and is listed on the
1927 US Indian Census Rolls as a member of the the Otter Tail Pillager Chippewa.
The couple had 11 children together (1 died very young).
At the time of her death, she reportedly had 351 descendants according to
<Source>The Forum of Fargo-Moorhead, May 25, 2005</Source>.
The family appears to still be centered primarily in the White Earth area.
</P><P>
So <Name>Aaron Thomas Bevins</Name> fatherd 17 children of which we know.
His children, which are of our parents' generation, are our 2nd cousins 1x removed.
His grandchildren, which are of our generation, are our 3rd cousins.
</P>
