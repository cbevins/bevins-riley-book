<script>
    import { getChannels } from '$lib/content/singletons.js'
    import Photo from '../images/WilliamAlfredBevins.jpg'
    import { Da, Bold, ListItem18, Lf, Name, P, Place } from '$lib/markup'
	import { AppleSolid } from 'flowbite-svelte-icons';
    export let id
    const p = $$props // Ignore passed props: man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],
        ['Samuel Bevins', 'Hattie J Collins'],
        ['William A Bevins', 'Mary A White'],
        ['William L Bevins', 'Mary Bolt'],
    ]

    const lineage = getChannels('bevins')
    const johnWheaton1725 = lineage.find('JohnWheaton1725')
    const johnWheaton1750 = lineage.find('JohnWheaton1750')
    const susannaAulgar = lineage.find('SusannaAulgar1721')
    const agnesCollier1749 = lineage.find('AgnesCollier1749')
    const agnesWheaton = lineage.find('AgnesWheaton1778')
    const nicholasCollier = lineage.find('NicholasCollier1701')
    const janePutt = lineage.find('JanePutt1710')
    const johnDecent1776 = lineage.find('JohnDecent1776')
    const agnesDecent = lineage.find('AgnesDecent1806')
    const thomasWhite1797 = lineage.find('ThomasWhite1797')
    const thomasWhite1827 = lineage.find('ThomasWhite1827')
    const janeOliver = lineage.find('JaneOliver1829')
</script>
<Lf/>
<ListItem18 item='6th Gen'>
<Da node={johnWheaton1725}/> was born in Brixham, Devon, as was his wife
<Da node={susannaAulgar}/>.
They had at least 3 children together including son <Name>John</Name>.
</ListItem18>

<ListItem18 item='6th Gen'>
<Da node={nicholasCollier}/> and his wife <Da node={janePutt}/>
were also both born in Brixham, Devon.
They had at least 8 children together including daughter <Name>Agnes</Name>.
</ListItem18>

<ListItem18 item='5th Gen'>
<Da node={johnWheaton1750}/>, son of <Name>John</Name> and <Name>Susanna</Name>
was also born in Brixham, Devon.  He married <Da node={agnesCollier1749}/>
born in Brixham of <Name>Nicholas</Name> and <Name>Jane</Name>
They had at least 10 children together including daughter also named
<Name>Agnes</Name>.
</ListItem18>

<ListItem18 item='4th Gen'>
<Da node={agnesWheaton}/> and her husband <Da node={johnDecent1776}/>
were also both born in Brixham, Devon. John's parents <Name>John</Name>
and <Name>Elizabeth</Name> were both likewise born in Brixham,
as were his grandparents
 <!-- <Da node={johnDecent1705}/> and <Da node={susannahDecent1705}/>. -->
They had at least 11 children together including yet another daughter
named <Name>Agnes</Name>.
</ListItem18>


<ListItem18 item='3rd Gen'>
<Da node={agnesDecent}/> and her husband <Da node={thomasWhite1797}/>
were also both born in Brixham, Devon. John's parents <Name>George</Name>
and <Name>Jenny</Name> were both likewise born in Brixham. They had at
least 7 children together a son named <Name>Thomas</Name>.
</ListItem18>


<ListItem18 item='2nd Gen'>
<Da node={thomasWhite1827}/> was also born in Brixham, Devon, while his wife
<Da node={janeOliver}/> was born in Torr, Devon.
were also both born in Brixham, Devon. John's parents <Name>George</Name>
and <Name>Jenny</Name> were both likewise born in Brixham. They had at
least 7 children together a son named <Name>Thomas</Name>.
</ListItem18>