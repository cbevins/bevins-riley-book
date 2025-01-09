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

    const northumbria = 'sienna'
    const maryland = 'chocolate'
    const zuidholland = 'tan'
    const iowa ='wheat'
    const ohio = 'goldenrod'
    export let text = [   // array of {col, row, [strings]}
        [0, 0, ['Sheldon James Riley', '', 'What Cheer, Keokuk, IA'],  iowa],
        [0, 1, ['Gladys Mae De Reus', '', 'Valeria, Jasper, IA'],  iowa],
        [1, 0, ['Jeremiah Riley', '', 'Nelsonville, Athens, OH'], ohio],
        [1, 1, ['IMMIGRANT', '', 'Caroline Carrie Robson', '', 'Heyworth, Durham'], northumbria],
        [1, 2, ['Peter De Reus', '', 'Pella, Marion, IA'],  iowa],
        [1, 3, ['Helen Sophia', '"Ella" Poulson', '', 'Colfax, Jasper, IA'], iowa],
        [2, 0, ['Henry T Riley'], ohio],
        [2, 1, ['Matilda J Juniper'],  ohio],
        [2, 2, ['Joseph J Robson', ''], northumbria],
        [2, 3, ['Elizabeth Gilbert', ''], northumbria],
        [2, 4, ['IMMIGRANT', '', 'Arie de Reus', '', 'Oud-Beijerland,', 'Zuid-Holland'],  zuidholland],
        [2, 5, ['IMMIGRANT', '', 'Grietje Margaret', 'Dykhaeza Bruggeman', '', 'Westmaas, Zuid-Holland'],  zuidholland],
        [2, 6, ['Jehu C Poulson', '', 'Harrison, OH'],  ohio],
        [2, 7, ['Mahala Spray', '', 'Harrison, Ohio'],  ohio],
        [3, 0, ['', ''], zuidholland],
        [3, 1, ['', ''], zuidholland],
        [3, 2, ['', ''], zuidholland],
        [3, 3, ['', ''], zuidholland],
        [3, 4, ['', ''], zuidholland],
        [3, 5, ['', ''], zuidholland],
        [3, 6, ['', ''], zuidholland],
        [3, 7, ['', ''], zuidholland],
        [3, 8, ['IMMIGRANT', 'Arij Pietersz de Reus', 'Oud-Beijerland, ZH'], zuidholland],
        [3, 9, ['IMMIGRANT', 'Magcheltje Vander Kreek', 'Mijnsheerenland, ZH'], zuidholland],
        [3, 10, ['Arij Bruggeman', 'Mijnsheerenland, ZH'], zuidholland],
        [3, 11, ['Adriaantje W Kamp', 'Westmass, Zuid-Holland'], zuidholland],
        [3, 12, ['James Poulson', 'Frederick, Frederick, MD'], maryland],
        [3, 13, ['Elizabeth Arnold', 'Jefferson, Ashtabula, OH'], ohio],
        [3, 14, ['John H Spray', 'Maryland'], maryland],
        [3, 15, ['Elizabeth Fowler', 'Harrison, OH'], ohio],
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
