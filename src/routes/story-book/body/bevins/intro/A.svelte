<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Name, P } from '$lib/markup'
    export let man, item, id
    const p = $$props // Ignore passed props: man, item, id

    const lineage = getChannels('bevins')
    // const wcBevins = lineage.find('WilliamCollinsBevins1931')
    const samBevins = lineage.find('SamuelBevins1881')
    // const hattieCollins =  lineage.find('HattieJaneCollins1889')
    // const waBevins = lineage.find('WilliamAlfredBevins1843')
    // const wlBevins = lineage.find('WilliamLongfordBevins1815')
    // const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    // const sarahWilkinson = lineage.find('SarahWilkinson1696')

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
The first family line I present is devoted to the direct ancestors of our grandfather
<Name>Samuel Bevins</Name>.  My choice is influenced, of course, by the fact that
<Name>Bevins</Name> is our patronymic surname, but there are other factors I
considered as well.
</P><P>
Most importantly, the <Name>Bevins</Name> line is the most recent of
our 8 lineages to immigrate to America (in 1845 and 1871), and since there were only
4 of them I have fewer ancestors to discover before tracking them down to
their geography of origin, and fewer ancestors to document and write about.
The other 7 lineages, on the other hand, have deep colonial American roots.
Also, primary source documentation is generally more available and reliable
with the more recent generations.  This allows me to start out in the shallow
end, get my legs under myself, and wade into deeper waters in later chapters.
</P><P>
That said, I have so far located {ancestors} direct ancestors of
<Name>Samuel Bevins</Name> going back 9 generations with the earliest recorded
birth in {firstYear} for <Da node={firstBorn}/>.
In the following sections we'll discover the geographic origins of our <Name>Bevins</Name>
family branch; the historical context in which our ancestors were born and lived;
why, where, and how they migrated to Minnesota;
and the (most likely) real meaning of the <Name>Bevins</Name> surname.
</P><P>
So ... here we go!
</P>