<script>
    import { Em, Name, P } from '$lib/markup'
    import FrameworkKnitters from '../images/FrameworkKnitters.jpg'
    import NVGoogleEarth from '../images/NewboldVerdonGoogleEarth.jpg'
    const p = $$props // Ignore passed props: man, item, id
</script>
<P>By the start of the <Em>British Industrial Revolution</Em> (1760-1840),
agriculture became much more efficient, peasant farmland was being removed by enclosures,
<div id='figure-framework-knitters'
    class="float-left w-[3in] h-[2.6in] px-4 mr-4 mt-2 text-left rounded-xl bg-green-200">
    <div class='text-center'>Framework Knitters</div>
        <img src={FrameworkKnitters} alt='Framework Knitters' width="300"/>
</div>
fewer people were required to work the fields, and large farm families were
increasing the rural population.  Young men and women had fewer opportunities
to work as farmers, and more were working in woolen or cotton mills,
often moving to urban centers to do so.
</P><P>
In Newbold Verdon, framework knitters were operating in 1812, and by 1845 over
60 frames were in existence.  Also at this time, coal was being mined in over
a dozen locations in neighboring villages.
</P><P>
Those not wishing to work the factories, mills, and mines to keep on farming
in a rural environment had fewer and fewer options, and began looking to America
where land was still plentiful and cheap.
This is the situation <Name>William Alfred Bevins</Name> and his new wife
<Name>Mary Bolt</Name> found themselves in 1845, when they chose to emigrate to America, 			.
</P>
<div id='map-modern-day-newbold-verdon'
    class="float-left w-[7in] h-[5in] px-4 mr-4 my-4 rounded-xl bg-green-200">
    <div class='text-center'>Modern Day Newbold Verdon</div>
    <img src={NVGoogleEarth} alt='Modern Day Newbold Verdon' width="640"/>
        <div class='text-xs text-left text-black font-serif'>
            Google Earth image of modern-day Newbold Verdon.
            Notice the visual simularity between this photo and the notional plan
            of a mediaeval manor house shown previously.
            The displayed area is approximately 6 x 4 miles.
        </div>
    </div>