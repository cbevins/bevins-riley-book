<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Lineage } from '$lib/publish'
    import { Bold, Da, Date, Footnote, Name, P, Place } from '$lib/markup'
    import Eng from '../images/England.jpg'
    const p = $$props // Ignore passed props: man, item, id

    const names = [
        ['William C Bevins', 'Meartia M Heddens'],
        ['Samuel Bevins', 'Hattie J Collins'],
        ['William A Bevins', 'Mary A White'],
        ['William L Bevins', 'Mary Bolt'],
    ]
    const titles = ['Parents', 'Grand Parents',
        '1st Great Grand Parents', '2nd Great Grand Parents']

    const lineage = getChannels('bevins')
    const wcBevins = lineage.find('WilliamCollinsBevins1931')
    const samBevins = lineage.find('SamuelBevins1881')
    const hattieCollins =  lineage.find('HattieJaneCollins1889')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
</script>
<div class='mt-2'/>

<Lineage {names} {titles}/>

<P>
Our father <span><Da node={wcBevins}/></span>
was born near <Place>Deer River, Minnesota</Place>, the last of 9 children of
<Da node={hattieCollins}/> and <Da node={samBevins}/>.
</P><P>
Grandfather Samuel was born on <Date date='22 Dec 1881'/> <Footnote chapter='bevins' num='1'/>
in <Place>Annawan, Henry County, Illinois</Place>,
the last of 6 children raised by the immigrants <Da node={maryAnnWhite}/> and
<Da node={waBevins}/>.  His parents emigrated separately from England,
<Name>William Alfred</Name> as a child of 2 in 1843, and <Name>Mary Ann White</Name>
as a 26 year old mother in 1871.  So its not surprising their lines originate
from two separate locations in England.
</P>
<div id="map-bevins-origins-in-england"
    class="float-left w-[4.25in] h-[3.75in] px-4 mr-4 mt-2 rounded-xl bg-green-200">
    <div class='text-center text-md text-black font-serif font-semibold'>
        <div class="mt-2">Bevins Origins in England</div>
    </div>  
    <img src={Eng} alt='England' width="400"/>
    <div class='text-left text-sm text-black font-serif'>
        The Bevins line originates from Newbold Verdon, Leicestershire,
        and Brixham, Devon, about 180 miles apart.
    </div>  
</div>
<P>
Twenty-four of the 27 known ancestors of <Da node={waBevins}/> are from
the small farming village of <Bold>Newbold Verdon, Leicestershire</Bold>.
The 3 exceptions are his grandmother <Da node={sarahAnnLongford}/>
and her parents who were originally from Somerset.
</P>
<P>
His wife <Da node={maryAnnWhite}/> claims the 25 remaining known ancestors.
All 21 of her father's known ancesters were from <Bold>Brixham, Devon</Bold>,
while all 4 of her mother's known ancestors were from <Bold>Mevagissey, Cornwall</Bold>.
Both are seaside fishing villages on England's southwest coast.
</P> 
