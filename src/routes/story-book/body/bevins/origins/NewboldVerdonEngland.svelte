<script>
    import { Lf, P } from '$lib/markup'
	import A from './A.svelte';
    import Eng from './England.jpg'
    import NBV from './NewboldVerdonMapHiRes.jpg'
</script>

<div class="float-left w-[3.25in] h-[4.5in] px-4 mr-4 text-left rounded-xl bg-green-200">
Newbold Verdon in English Midlands
<img src={Eng} alt='England' width="300"/>
</div>
<p>Paragraph</p>
<div class="float-left w-[5.25in] h-[3.5in] px-4 mr-4 text-left rounded-xl bg-green-200">
Newbold Verdon and Environs
    <img src={NBV} alt='Newbold Verdon and Environs' width="500"/>
</div>
