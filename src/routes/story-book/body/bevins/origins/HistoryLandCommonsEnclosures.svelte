<script>
    import { Bold, Em, Enquote, P } from '$lib/markup'
    import Manor from '../images/FeudalManorPlan.jpg'
    export let id
    const p = $$props // Ignore passed props: man, item, id
</script> 
<P>
William kept 20% of his newly won realm for his personal use,
including <Em>royal forests</Em> in which trespassing and hunting by non-nobles
was prohibited.
He awarded another 25% to the bishops, abbots, and abbesses of the Norman Church
(<Em>glebe</Em> lands).
</P><P>
The rest of the land was distributed to 180 <Em>barons</Em> and further subdivided
into <Em>manors</Em>, each occupied and overseen by a tenant landlord selected
from William’s family, invasion cohorts, vassals, and other members of the French aristocracy.
<div id={id} class="float-left w-[4in] h-[6in] px-4 mr-4 mt-2 rounded-xl bg-green-200">
    <div class="mt-2"></div>
    <img src={Manor} alt='Fuedal manor plan' width="400"/>
    <div class='text-xs text-left text-black font-serif'>
        Feudal manor plan
    </div>
</div>
</P><P>The manor lords, in turn, held some of their lands (<Em>demesnes</Em>),
for their own use, awarded some to their tenant knights, and the remainder was
rented to tenant serfs. The serfs worked the land to support both themselves
and the manor lord and his household.
</P><P>
An <Em>open-field</Em> system of agriculture was adopted where the serfs had rights
to communal manor grazing meadows (<Em>commons</Em>), were allocated furloughs
of land on which to alternate their crops, and were allowed to live in and inherit
their own homes in the village.
But they also had to work the lord’s demesne and/or pay rent, and could not leave
the manor for other locations or occupations.
</P><P>
The attraction of large profits to be made from the increasing demand for wool led
manor lords to begin <Em>enclosing</Em> their open fields, including the shared commons.
This took land away from the farmer serfs, and in many cases they were evicted from
their ancestral homes, causing much social upheaval.  Rents also increased.
In Queensborough, Leicestershire, rents rose from 90-130% in 1793 alone.
</P><P>
The enclosure movement probably peaked from 1760 to 1832,
by which time it had essentially completed the destruction of the medieval
peasant community.
</P>