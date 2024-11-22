<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Date, Footnote, Name, P, Place } from '$lib/markup'

    export let man, item, id

    const lineage = getChannels('bevins')
    const wcBevins = lineage.find('WilliamCollinsBevins1931')
    const samBevins = lineage.find('SamuelBevins1878')
    const hattieCollins =  lineage.find('HattieJaneCollins1889')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const sarahWilkinson = lineage.find('SarahWilkinson1696')

    const ancestors = samBevins.ancestors
    let nodes = lineage.nodes()
    let firstBorn = nodes[0]
    for(let i=1; i<nodes.length; i++) {
        const node = nodes[1]
        if (node.person.birthYear() < firstBorn.person.birthYear()) {
            firstBorn = node
        }
    }
    const firstYear = firstBorn.person.birthYear()
</script>
<P>
Our father <span><Da node={wcBevins}/></span>
was born near <Place>Deer River, Minnesota</Place>, the last of 9 children of
<Da node={hattieCollins}/> and <Da node={samBevins}/>.
<Footnote chapter='bevins' num='1'/>
</P><P>
Grandfather Samuel was born on <Date date='22 Dec 1879'/> in
<Place>Annawan, Henry County, Illinois</Place>,
the last of 6 children raised by <Da node={maryAnnWhite}/> and
<Da node={waBevins}/>.
</P><P>
In this chapter I share some of my discoveries about the direct ancestors
of our grandfather <Name>Samuel Bevins</Name>,
and how he arrived in northern Minnesota by the 1930's.
</P><P>
To date I have located {ancestors} direct ancestors of <Name>Samuel Bevins</Name>
going back 8 generations, with the earliest recorded birth in {firstYear}
for <Da node={firstBorn}/>.
</P>