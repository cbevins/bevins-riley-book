<script>
    import { gxmlGrid, gxmlLineageBlocks } from '$lib/gxml-graphpaper'
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

    // grid properties
    export let cellWd = 0.25
    export let cellHt = 0.25

    // lineage block properties
    export let blockCols = 4
    export let xpad = 0.25
    export let ypad = 0.125
    const p = $$props // Ignore passed props: man, item, id

    // 'Northumbria' consist of 'Northumberland' and 'Durham' counties
    const zuidholland = 'tan'
    const durham = 'sienna'
    const northumberland = 'sienna'
    // States
    const maryland = 'chocolate'
    const virginia = 'chocolate'
    const iowa ='wheat'
    const ohio = 'goldenrod'
    const pennsylvania = 'goldenrod'
    export let text = [   // array of {col, row, [strings]}
        [0, 0, ['Sheldon James Riley', '', 'What Cheer, Keokuk, IA'],  iowa],
        [0, 1, ['Gladys Mae De Reus', '', 'Valeria, Jasper, IA'],  iowa],
        [1, 0, ['Jeremiah Riley', '', 'Nelsonville, Athens, OH'], ohio],
        [1, 1, ['IMMIGRANT 1886', '', 'Caroline Carrie Robson', '', 'Heyworth, Durham'], northumberland],
        [1, 2, ['Peter De Reus', '', 'Pella, Marion, IA'],  iowa],
        [1, 3, ['Helen Sophia', '"Ella" Poulson', '', 'Colfax, Jasper, IA'], iowa],
        [2, 0, ['Henry Thomas Riley', '', 'Ohio'], ohio],
        [2, 1, ['Matilda Jane Juniper', '', 'Trimble Twp, Athens, OH'], ohio],
        [2, 2, ['IMMIGRANT 1886', '', 'Joseph John Robson', '', 'Monk Wearmouth, Durham'], durham],
        [2, 3, ['IMMIGRANT 1886', '', 'Elizabeth Gilbert', '', 'Walker, Northumberland'], northumberland],
        [2, 4, ['IMMIGRANT 1850', '', 'Arie de Reus', '', 'Oud-Beijerland,', 'Zuid-Holland'],  zuidholland],
        [2, 5, ['IMMIGRANT 1856', '', 'Grietje Margaret', 'Dykhaeza Bruggeman', '', 'Westmaas, Zuid-Holland'],  zuidholland],
        [2, 6, ['Jehu C Poulson', '', 'Harrison, OH'],  ohio],
        [2, 7, ['Mahala Spray', '', 'Harrison, OH'],  ohio],
        [3, 0, ['Harrison Riley', 'Warrentown, Fauquir, VA'], virginia ],
        [3, 1, ['Sarah Ann Settle', 'Fredericksburg,', 'Spotsylvania, VA'], virginia],
        [3, 2, ['George H Juniper', 'Maryland'], maryland ],
        [3, 3, ['Elizabeth Echart', 'Pennsylvania'], pennsylvania],
        [3, 4, ['John Robert Robson', 'Jarrow, Durham'], durham],
        [3, 5, ['Mary Ann Lowther', 'Murton, Northumberland'], northumberland],
        [3, 6, ['Robert Gilbert', 'Northumberland'], northumberland],
        [3, 7, ['Mary Gilbert', 'Northumberland'], northumberland],
        [3, 8, ['IMMIGRANT 1850', 'Arij Pietersz de Reus', 'Oud-Beijerland, ZH'], zuidholland],
        [3, 9, ['IMMIGRANT 1850', 'Magcheltje Vander Kreek', 'Mijnsheerenland, ZH'], zuidholland],
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

    function svg(els) {
        const g = {el: 'g', transform: 'scale(0.90) translate(-48, 20)', els: [els]}
        const head = {...gxmlText, x: '3.25in', y: '0.25in', 'font-size': 24,
            'text-anchor': 'middle', 'dominant-baseline': 'middle',
            els: [{el: 'inner', content: 'DeReus Family Origins'}]}
        const svg = {...gxmlSvg, height: '11in', width: '8.5in', els: [g, head]}
        return svg
    }
</script>
{@html gxmlStr(svg(blocks()))}
