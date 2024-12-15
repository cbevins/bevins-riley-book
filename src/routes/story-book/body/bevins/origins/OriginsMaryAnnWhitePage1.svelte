<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Bold, Em, ListItem18, Lf, Name, P, Place } from '$lib/markup'
    const p = $$props // Ignore passed props: man, item, id

    const lineage = getChannels('bevins')
    function find(key) {
        const node = lineage.find(key)
        if (!node) throw new Error(`Unable to find Lineage node with name key '${key}'`)
        return node
    }
    const johnDecent1705 =  find('JohnDecent1705')
    const williamDecent1725 = find('WilliamDecent1725')
    const maryPorter1723 = find('MaryPorter1723')
    const johnDecent1748 = find('JohnDecent1748')
    const elizabethDecent1750 = find('ElizabethDecent1750')
    const johnCaldwellDecent1776 = find('JohnCaldwellDecent1776')
    const agnesWheaton1778 = find('AgnesWheaton1778')

    const maryAnnWhite= find('MaryAnnWhite1848')
    // const johnWheaton1725 = find('JohnWheaton1725')
    // const johnWheaton1750 = find('JohnWheaton1750')
    // const susannaAulgar1721 = find('SusannaAulgar1721')
    // const agnesCollier1749 = find('AgnesCollier1749')
    // const nicholasCollier = find('NicholasCollier1701')
    // const janePutt = find('JanePutt1710')
    // const johnDecent1776 = find('JohnCaldwellDecent1776')
    const thomasWhite1827 = find('ThomasWhite1827')
    const janeOliver = find('JaneOliver1829')
</script>

<P>
Grandfather <Name>Samuel Bevins</Name>'s mother <Da node={maryAnnWhite}/>
was born in 1848 in <Bold>Torquay, Devon, England</Bold> across Tor Bay from Brixham.
Documentation of her family also goes back at least 7 generations in the seaport
village of <Bold>Brixham</Bold>.
</P>
<Lf/>

<ListItem18 item='7th Gen'>
<Da node={johnDecent1705}/> was born in Brixham, Devon.
He and his wife <Name>Susannah</Name> had a sone name <Name>William</Name>.
</ListItem18>

<ListItem18 item='6th Gen'>
<Da node={williamDecent1725}/> was born in Brixham, Devon, and his wife
<Da node={maryPorter1723}/> was born 4 miles away in Dartmouth, Devon.
They had at least 7 children together including son <Name>John</Name>.
</ListItem18>

<ListItem18 item='5th Gen'>
<Da node={johnDecent1748}/> was born in Brixham, Devon, as was his wife
<Da node={elizabethDecent1750}/>. They had at least 4 children together
including son <Name>John Caldwell Decent</Name>.
</ListItem18>

<ListItem18 item='4th Gen'>
<Da node={johnCaldwellDecent1776}/> was born in Brixham, Devon, as was his wife
<Da node={agnesWheaton1778}/>. Agnes has 2 parents and 4 grandparents who were
also all born in Brixham. They had at least 11 children together
including daughter <Name>Agnes</Name>.
</ListItem18>
