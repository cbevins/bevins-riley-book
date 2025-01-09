<script>
    import { gxmlGrid, gxmlLineageBlocks } from '$lib/gxml-graphpaper'
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlSvg } from '$lib/gxml/gxmlTemplates.js'
    import { Pf } from '$lib/markup'

    // grid properties
    export let cellWd = 0.25
    export let cellHt = 0.25

    // lineage block properties
    export let blockCols = 4
    export let xpad = 0.25
    export let ypad = 0.125

    // Page properties
    export let pageWd = 8.5
    export let pageHt = 11.0
    export let left = 0.25
    export let right = 0.25
    export let top = 0.25
    export let bottom = 0.25

    export let fill = 'lightgrey'
    export let text = [   // array of {col, row, [strings]}
        [0,0,[],fill], [0,1,[],fill],
        [1,0,[],fill], [1,1,[],fill], [1,2,[],fill], [1,3,[],fill],
        [2,0,[],fill], [2,1,[],fill], [2,2,[],fill], [2,3,[],fill],
        [2,4,[],fill], [2,5,[],fill], [2,6,[],fill], [2,7,[],fill],
        [3,0,[],fill], [3,1,[],fill], [3,2,[],fill], [3,3,[],fill],
        [3,4,[],fill], [3,5,[],fill], [3,6,[],fill], [3,7,[],fill],
        [3,8,[],fill], [3,9,[],fill], [3,10,[],fill],[3,11,[],fill],
        [3,12,[],fill], [3,13,[],fill], [3,14,[],fill], [3,15,[],fill],
    ]

    function blocks() {
        return gxmlLineageBlocks(blockCols, text, xpad, ypad,
            left, right, top, bottom, pageWd, pageHt)
    }
    
    function both() {
        const els = []
        return els.concat(blocks(), grid())
    }

    function grid() {
        return gxmlGrid(cellWd, cellHt,
            left, right, top, bottom, pageWd, pageHt)
    }

    function svg(els) {
        return {...gxmlSvg, height: '11in', width: '8.5in', els: [els]}
    }
</script>
{@html gxmlStr(svg(grid()))}
<Pf/>
{@html gxmlStr(svg(blocks()))}
<Pf/>
{@html gxmlStr(svg(both()))}

