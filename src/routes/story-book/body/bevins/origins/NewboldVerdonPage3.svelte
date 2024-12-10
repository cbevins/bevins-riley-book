<script>
    import { Name, P } from '$lib/markup'
    import NVEnvirons from '../images/NewboldVerdonEnvironsMap.jpg'
    export let id
    const p = $$props // Ignore passed props: man, item, id
</script>
<P>
Those not wishing to work the factories, mills, and mines to keep on farming
in a rural environment had fewer and fewer options, and began looking to America
where land was still plentiful and cheap.
This is the situation <Name>William Alfred Bevins</Name> and his new wife
<Name>Mary Bolt</Name> found themselves in 1845, when they chose to emigrate to America, 			.
</P>
<div id={id} class="float-left w-[7in] h-[6.25in] px-4 mr-4 my-4 rounded-xl bg-green-200">
    <div class='text-center'>Modern Day Newbold Verdon and Environs</div>
    <img src={NVEnvirons} alt='Modern Day Newbold Verdon and Environs' width="640"/>
        <div class='text-xs text-left text-black font-serif'>
            Google Earth image of modern-day Newbold Verdon.
            Notice the visual simularity between this photo and the notional image
            of a medieval manor house shown previously.
            The displayed area is approximately 10 x 10 miles.
        </div>
    </div>