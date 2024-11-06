<script>
    import { usfc1880 } from '$bevins/bevins-bolt/usfc.js'
    import { usfc1880 as usfc1880bw } from '$bevins/bevins-white/usfc.js'
    import { P, NewPage, Usfc1880Table } from '$lib/book'
</script>

<P>
    By the 1880 USFC (8 Jun, 1880), the household consist of:
</P><P>
    <Usfc1880Table census={usfc1880} />
</P><P>
    An interesting question on the 1880 USFC was
    ‘Is the person sick or temporarily disabled, so as to be unable to attend to
    ordinary business or duties? On 8 Jun, 1880, William Longford, Samuel, and
    William Alfred are listed as sick.  There are 50 individuals listed on this
    particular census sheet, 17 of which are listed as sick.
</P><P>
    In the neighboring residence lived son William Alfred and his wife Mary Ann White
    (our 1st GGP):
</P><P>
    <Usfc1880Table census={usfc1880bw} />
</P>
