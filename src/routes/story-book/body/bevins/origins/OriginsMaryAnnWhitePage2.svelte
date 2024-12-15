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

    const agnesDecent = find('AgnesDecent1806')
    const thomasWhite1797 = find('ThomasWhite1797')
    const maryAnnWhite= find('MaryAnnWhite1848')
    const thomasWhite1827 = find('ThomasWhite1827')
    const janeOliver = find('JaneOliver1829')
</script>

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
was born in <Place>Torquey, Devon</Place> some 5 miles north of Brixham
across Tor Bay.
</ListItem18>
    
<P>
The <Bold>Decent</Bold> side of the family appears to have been involved
in the maritime trades, and perhaps fishing, as several members are listed as
'mariner' or 'master mariner' and lived in 'Lower Brixham' (also known
as 'Fishtown').
</P><P>
When <Name>Mary Ann White</Name> emigrated to America in 1871, her name was already
<Name>Mary Ann Bevins</Name> and she had a daughter <Name>Mary Allace Bevins</Name>.
She had been married in <Bold>Plymouth, Devon</Bold> in April 1869.  It appears
she somehow met and wedded a member of the <Name>Bevins</Name> clan in Devon.
Her daughter <Name>Mary Allace Bevins</Name> was born a 18 months later in Leicester,
so they must have moved back to the <Name>Bevins</Name> familial grounds.
</P>