<script>
    import { gxmlGrid, gxmlLineageBlocks } from '$lib/gxml-graphpaper'
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlSvg } from '$lib/gxml/gxmlTemplates.js'

    // grid properties
    export let cellWd = 0.25
    export let cellHt = 0.25

    // lineage block properties
    export let blockCols = 4
    export let xpad = 0.25
    export let ypad = 0.125

    const p = $$props // Ignore passed props: man, item, id

    const newbold = 'sienna'
    const brixham = 'chocolate'
    const mevagissey = 'tan'
    const illinois ='wheat'
    const somerset = 'goldenrod'
    export let text = [   // array of {col, row, [strings]}
        [0, 0, ['William Alfred Bevins', 'Annawan, Henry, IL', 'IMMIGRANT'], illinois],
        [0, 1, ['Mary Ann White', 'Torquey, Devon', 'IMMIGRANT'], brixham],
        [1, 0, ['William Longford Bevins', 'Newbold Verdon, Leic', 'IMMIGRANT'], newbold],
        [1, 1, ['Mary Bolt', 'Barwell, Leic', 'IMMIGRANT'], newbold],
        [1, 2, ['Thomas White', 'Chealston, Devon'], brixham],
        [1, 3, ['Jane Oliver', 'Torr, Devon'], brixham],
        [2, 0, ['John Bevins', 'Shepshed, Leic'], newbold],
        [2, 1, ['Sarah Ann Longford', 'Middlesex, London'], somerset],
        [2, 2, ['Simon Bott', 'Bardon, Leic'], newbold],
        [2, 3, ['Mary Wykes', 'Thornton, Leic'], newbold],
        [2, 4, ['Thomas White', 'Brixham, Devon'], brixham],
        [2, 5, ['Agnes Decent', 'Brixham, Devon'], brixham],
        [2, 6, ['John Oliver', 'Mevagissey, Cornwall'], mevagissey],
        [2, 7, ['Mary Toll', 'Mevagissey, Cornwall'], mevagissey],
        [3, 0, ['Joseph Bevins', 'Newbold Verdon, Leic'], newbold],
        [3, 1, ['Mary Ann Isom', 'Earl Shilton, Leic'], newbold],
        [3, 2, ['Robert Langford', 'North Petherton, Somerset'], somerset],
        [3, 3, ['Sarah Slocombe', 'Nether Stowey, Somerset'], somerset],
        [3, 4, ['John Bott', 'Nailstone, Leic'], newbold],
        [3, 5, ['Ann Thirlby', 'Ibstock, Leic'], newbold],
        [3, 8, ['George White', 'Devon'], brixham],
        [3, 9, ['Jenny Terry', 'Brixham, Devon'], brixham],
        [3, 10, ['John Caldwell Decent', 'Brixham, Devon'], brixham],
        [3, 11, ['Agnes Wheaton', 'Brixham, Devon'], brixham],
        [3, 12, ['John Oliver', 'Mevagissey, Cornwall'], mevagissey],
        [3, 13, ['Susannah Hocking', 'Mevagissey, Cornwall'], mevagissey],
    ]

    // Page properties
    export let pageWd = 8.5
    export let pageHt = 11.0
    export let left = 0.25
    export let right = 0.25
    export let top = 0.25
    export let bottom = 0.25

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
        return {...gxmlSvg, height: '11in', width: '8.5in',
        transform: 'scale(0.85) translate(-90, -90)',
        els: [els]}
    }
</script>
{@html gxmlStr(svg(blocks()))}
