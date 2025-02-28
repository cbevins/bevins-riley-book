<script>
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import { getChannels } from '$lib/content/singletons.js'
    import { Lineage } from '$lib/lineage/Lineage.js'

    import { Bold, Da, Em, Enquote, Lf, ListItem18, Name, P, Ship, Place } from '$lib/markup'
    const p = $$props // Ignore passed props: man, item, id

    // const sylvan = getSylvan()
    // let people = Array.from(sylvan.people().nameKeyMap().keys())
    // console.log(people.sort())

    const lineage = getChannels('dereus')

    //---------------------------------------------------------
    // 
    //---------------------------------------------------------
    // Create an actual Lineage
    const rootKey = 'GladysMaeDeReus1907'
    const gladysDeReus = find('GladysMaeDeReus1907')
    const dereus = new Lineage(gladysDeReus.person)
    const ar = dereus.persons()
    // const ar = lineage.persons()//.sort(function(a, b) {return a.birthYear() - b.birthYear()})
    // ar.reverse()
    console.log(`${rootKey} Lineage has ${ar.length} members:`)
    for(let i=0; i<ar.length; i++) {
        const p = ar[i]
        // console.log(p.birthYear(), p.label(), p.birthPlace().text())
    }
    //---------------------------------------------------------

    function find(key) {
        const person = lineage.find(key)
        if (!person) throw new Error(
            `***\n***\n*** Unable to find person with key '${key}'\n***\n***`)
        return person
    }
    const sheldonJuniorRiley = find('SheldonJuniorRiley1926')
    const dorothyTrombley = find('DorothyMayTrombley1927')
    const sheldonJamesRiley = find('SheldonJamesRiley1902')
    const peterDeReus = find('PeterDeReus1862')
    const helenPoulson = find('HelenSophia(Ella)Poulson1866')
    const ariedeReus = find('AriedeReus1836')
    const grietjeBruggeman = find('GrietjeMargaret\"Maggie\"DykhaezaBruggeman1839')
    const arijdeReus = find("ArijPieterszdeReus1811")
    const mVanderKreek = find("MagcheltjeArijsdVanderKreek1802")
</script>

<P>
In the summer of 1847, a company of immigrants from the Netherlands settled
in Marion County, Iowa, on the divide between the Des Moines and Skunk Rivers.
In their own country, they had been persecuted on account of religion,
being dissenters from the state Reformed church, and so they called their new home
<Name>Pella</Name>, the name taken from a biblical city of refuge.
Upon the seal of their new town they inscribed the words
<Enquote>In Deo Spes Nostra et Refugium</Enquote>, or “In God Our Hope and Refuge”.
</P>
<a href="https://www.pellahistorical.org/historyofpella">
History of Pella
</a>
<ListItem18 item='3rd GGP'>
<Da node={arijdeReus}/> was born in 1811 in Oud-Beijerland, Zuid-Holland, Netherlands.
He has 31 know ancestors going back 10 more generations to 13th great grandparents
born in 1479 and 1480.  All these ancestors were born in Zuid-Holland, except for 
2 born in England in 1503 and 1520.
<div class='mt-1'></div>
His wife <Da node={mVanderKreek}/> (also Van Der Kreek, Van der Krek, or Vandee Crake)
was born in 1802 in Mijnsheerenland, Binnenmaas, Zuid-Holland, Netherlands.
She has 17 known ancestors going back 7 more generations to our 10th great grand parents,
all of whom were born in Zuid-Holland, Netherlands.
<div class='mt-1'></div>
The couple married in 1834 in Mijnsheerenland, Zuid-Holland and had 6 children.
The family emigrated to America in 1850, arriving in New York from London
aboard the ship <Ship>York Town</Ship>.  The passenger list included sons Peter (10),
Marinus (7), and daughters Andrea (11) and Neelus (4).
<div class='mt-1'></div>
In 1894, at age 84 Arij remarried 60 year old <Name>Elizabeth Jachtenberg Donker</Name>.
He died a few months later, and services where held at the
<Name>Holland Presbyterian Church</Name>, so apparently the Pella are had a
substantial Dutch community.
<div class='mt-1'></div>
</ListItem18>

<ListItem18 item='2nd GGP'>
Immigrant <Da node={ariedeReus}/> was born 1836 in Oud-Beijerland, Zuid-Holland, Netherlands.
He arrived in America with his family in either 1847 or 1850.
<div class='mt-1'></div>
His wife, the immigrant <Da node={grietjeBruggeman}/>, was born 1839
in Westmass, Binnenmass, Zuid-Holland, Netherlands.
She has 45 known ancestors going back 10 more generations to our 12th great grand parents,
all of whom were born in Zuid-Holland, Netherlands (except one who was born in Germany).
She arrived in America in 1856, probably in Baltimore.
They had 10 children who survived to adulthood (and 3 or 5
(depending on the source) others who did not).
</ListItem18>

<ListItem18 item='1st GGP'>
<Da node={peterDeReus}/> born 1862 in Pella, Marion, IA.
<Da node={helenPoulson}/> born 1866 in Colfax, Jasper, IA.
</ListItem18>

<ListItem18 item='GP'>
<Da node={gladysDeReus}/> born 1907 in Valeria, Jasper, IA.
<Da node={sheldonJamesRiley}/> born 1902 in What Cheer, Keokuk, IA.
</ListItem18>

<ListItem18 item='Par'>
<Da node={sheldonJuniorRiley}/> born 1926 in Newton, Jasper, IA.
<Da node={dorothyTrombley}/> born 1927 in Minneapolis, MN.
</ListItem18>
