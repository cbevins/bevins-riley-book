<script>
    import { usfc1850 } from './usfc.js'
    import { P, Usfc1850Table } from '$lib/book'
    export let item
</script>

<P><Usfc1850Table census={usfc1850} /></P>
