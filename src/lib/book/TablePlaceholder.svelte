<script>
    import {P, SimpleTable} from '$lib/book'
    export let item

    const tdata = {
        cols: ['Row', 'A', 'B', 'C', 'D'],
        rows: [
            ['1', 'A1', 'B1', 'C1', 'D1'],
            ['2', 'A2', 'B2', 'C2', 'D2'],
            ['3', 'A3', 'B3', 'C3', 'D3'],
            ['4', '4A', 'B4', 'C4', 'D4'],
        ]
    }
</script>

<P>The Svelte component [{item.comp}] is currently under construction.</P>
<SimpleTable {tdata}/>
