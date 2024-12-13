<script>
    import { getChannels } from '$lib/content/singletons.js'
    import Photo from '../images/WilliamAlfredBevins.jpg'
    import { Da, Bold, ListItem18, Lf, Name, P, Place } from '$lib/markup'
	import { AppleSolid } from 'flowbite-svelte-icons';
    const p = $$props // Ignore passed props: man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],
        ['Samuel Bevins', 'Hattie J Collins'],
        ['William A Bevins', 'Mary A White'],
        ['William L Bevins', 'Mary Bolt'],
    ]

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
    const agnesDecent = find('AgnesDecent1806')
    const thomasWhite1797 = find('ThomasWhite1797')
    const thomasWhite1827 = find('ThomasWhite1827')
    const janeOliver = find('JaneOliver1829')
</script>
<P>
Grandfather <Name>Samuel Bevins</Name>'s mother <Da node={maryAnnWhite}/>
was born in 1848 in <Bold>Torquay, Devon, England</Bold> across the bay from Brixham.
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

<ListItem18 item='3rd Gen'>
<Da node={agnesDecent}/> and her husband <Da node={thomasWhite1797}/>
were also both born in Brixham, Devon. John's parents <Name>George</Name>
and <Name>Jenny</Name> were both likewise born in Brixham. They had at
least 7 children together a son named <Name>Thomas</Name>.
</ListItem18>

<ListItem18 item='2nd Gen'>
<Da node={thomasWhite1827}/> was also born in Brixham, Devon, while his wife
<Da node={janeOliver}/> was born in Torr, Devon. Her parents and grandparents
were from <Bold>Mevagissey, Cornwall</Bold> some 60 miles to the southwest.
</ListItem18>

<ListItem18 item='1st Gen'>
Their daughter, the immigrant <Da node={maryAnnWhite}/>
was born in <Place>Torquey, Devon</Place> some 5 miles north of Brixham.
</ListItem18>
    
<P>
When <Name>Mary Ann White</Name> emigrated to America in 1871, her name was already
<Name>Mary Ann Bevins</Name> and she had a daughter <Name>Mary Allace Bevins</Name>.
She had been married in <Bold>Plymouth, Devon</Bold> in April 1869.  It appears
she somehow met and wedded a member of the <Name>Bevins</Name> clan in Devon.
Her daughter <Name>Mary Allace Bevins</Name> was born a 18 months later in Leicester,
so they must have moved back to the <Name>Bevins</Name> familial grounds.
</P>