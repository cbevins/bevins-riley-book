<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlPath, gxmlRect, gxmlSvg, gxmlText } from './gxmlTemplates.js'

    // This will become a passed prop
    // Array of [<ancestor>,  <m|f>, <spouse>, <m|f>, <title>]
    const gens = [
        ['Wm C Bevins', 'm', 'Meartia M Heddens', 'f', 'Parents'],
        ['Samuel Bevins', 'm',  'Hattie J Collins', 'f', 'Grand Parents'],
        ['Wm A Bevins', 'm', 'Mary A White', 'f', '1st GGP'],
        ['Wm L Bevins', 'm', 'Mary Bolt', 'f', '2nd GGP'],
    ]
    const items = [
        // [col, cols, row, rows,]
        [6, 1, 'Wm L Bevins', 'm'],
        [9, 1, 'Mary Bolt', 'f'],
        [1, 3, 'Mary A White', 'f'],
        [4, 3, 'Wm A Bevins', 'm'],
        [9, 3, 'George H Bevins', 'm'],
        [12, 3, 'Charlotte House', 'f'],
        [15, 3, 'Lillian B Johnson', 'f'],
        [1, 5, 'Hattie J Collins', 'f'],
        [4, 5, 'Samuel Bevins', 'm'],
        [9, 5, 'Aaron T Bevins', 'm'],
        [12, 5, 'Mary C Big Bear', 'f'],
        [15, 5, 'Marciana Oshkinowe', 'f'],
        [1, 7, '9 children', ''],
        [12, 7, '6 children', ''],
        [15, 7, '11 children', ''],
        [1, 9, '19 grand children', ''],
        [12, 9, '?? grand children', ''],
        [15, 9, '75 grand children', ''],
    ]
    const svg = svgChart(gens)
    
    function svgChart(gens) { 
        // Adapt the standard Gxml templates
        const tPath = {...gxmlPath}
        const tRect = {...gxmlRect, rx: 6, ry: 6}
        const tSvg = {...gxmlSvg}
        const tText = {...gxmlText,
            'text-anchor': 'middle', 
            'dominant-baseline': 'middle',
            'font-size': 11,
        }

        const svgWd = 668
        const cols = 18
        const rows = 12
        const colWd = svgWd / cols
        const rowHt = 30
        const svgHt = rows * rowHt
        const ml = 0
        const mr = 0
        const mt = 0
        const mb = 0
        const boxHt = rowHt - mt - mb
        const boxWd = 2.5*colWd - ml - mr
        const els = []

        function textBox(col, row, content='', gender='m') {
            let fill = 'gray'
            if (gender === 'f') fill = 'magenta'
            if (gender === 'm') fill = 'dodgerblue'
            const [x, y] = xy(col, row)
            const rect = {...tRect, x, y, height: boxHt, width: boxWd, fill}
            const [tx, ty] = xy(col, row, 0.5, 0.5)
            const text = {...tText, x: tx, y: ty, els: [{el: 'inner', content}]}
            els.push(rect, text)  //Push each el onto the array
            return rect
        }

        function textStr(col, row, content='') {
            const [tx, ty] = xy(col, row, 0.5, 0.5)
            const text = {...tText, x: tx, y: ty, 'dominant-baseline': 'auto',
                els: [{el: 'inner', content}]}
            els.push(text)  //Push each el onto the array
        }

        function legendStr(col, row, content='') {
            const [tx, ty] = xy(col, row, 0.5, 0.5)
            const text = {...tText, x: tx, y: ty, 'text-anchor': 'start',
                els: [{el: 'inner', content}]}
            els.push(text)  //Push each el onto the array
        }

        // Returns [x,y] of col, row with added offset ratio
        function xy(col, row, xratio=0, yratio=0) {
            const x = ml + col * colWd + xratio * boxWd
            const y = mt + row * rowHt + yratio * boxHt
            return [x,y]
        }

        // horizontal connector
        function hline(col1, col2, row, dash='') {
            const [x1, y1] = xy(col1, row, 0.5, 0.5)
            const [x2, y2] = xy(col2, row, 0.5, 0.5)
            const d =`M ${x1}, ${y1} L ${x2} ${y2}`
            els.push({...tPath, d, 'stroke-dasharray': dash})
        }

        function vline(col, row1, row2) {
            let [x1, y1] = xy(col, row1, 0.5, 0.5)
            let [x2, y2] = xy(col, row2, 0.5, 0.5)
            const d =`M ${x1}, ${y1} L ${x2} ${y2}`
            els.push({...tPath, d})
        }

        //---------------------------------------------------------------

        // SVG background
        els.push({...tRect, height: svgHt, width: svgWd, fill: 'lightblue'})

        // Newbold Verdon Bevins
        els.push({...tRect, x: 5.8*colWd, y: 0.7*rowHt,
            height: 1.5*rowHt, width: 6.2*colWd, fill: 'plum'})

        // Annawan, Illinois Bevins
        els.push({...tRect, x: 0.5*colWd, y: 2.7*rowHt,
            height: 1.5*rowHt, width: 17.2*colWd, fill: 'peru'})

        // Deer River
        els.push({...tRect, x: 0.5*colWd, y: 4.7*rowHt,
            height: 5.5*rowHt, width: 6.2*colWd, fill: 'palegreen'})

        // White Earth
        els.push({...tRect, x: 8.8*colWd, y: 4.7*rowHt,
            height: 5.5*rowHt, width: 9*colWd, fill: 'peachpuff'})

        // Legend
        els.push({...tRect, x: 0.5*colWd, y: 10.5*rowHt,
            height: rowHt, width: colWd, fill: 'palegreen'})
        legendStr(0.4, 10.5, 'Deer River Family' )
        els.push({...tRect, x: 4.5*colWd, y: 10.5*rowHt,
            height: rowHt, width: colWd, fill: 'peru'})
        legendStr(4.4, 10.5, 'Annawan, IL Family' )
        els.push({...tRect, x: 8.5*colWd, y: 10.5*rowHt,
            height: rowHt, width: colWd, fill: 'plum'})
        legendStr(8.4, 10.5, 'Newbold Verdon Family' )
        els.push({...tRect, x: 13.5*colWd, y: 10.5*rowHt,
            height: rowHt, width: colWd, fill: 'peachpuff'})
        legendStr(13.5, 10.5, 'White Earth Family' )


        // Vrtical Lines
        vline(4, 2, 5)  // Wm A Bevins <--> Samuel Bevins
        vline(9, 2, 5)  // George H Bevins <-> Aaron T Bevins
        vline(1, 5, 9)  // Hattie J Collines <-> 19 grand children
        vline(12, 5, 9) // Mary C Big Bear <-> ?? grand children
        vline(15, 5, 9) // Marciana Oshkinowe <-> 75 grand children
        vline(7.5, 1, 2)
        // Horizontal Lines
        hline(2, 4, 3)  // Mary A White <-> Wm A Bevins
        hline(2, 4, 5)  // Hattie J Collins <-> Samuel Bevins
        hline(9, 15, 3) // George H Bevins <-> Lillian B Johnson
        hline(9, 15, 5) // Aaron T Bevins <-> Marciana Oshkinowe
        hline(6, 8, 1)  // Wm L Bevins <-> Mary Bolt
        hline(4, 9, 2)  // Wm A Bevins <-> George H Bevins
        // Dashed lines
        hline(5, 9, 3, 4)   // siblings
        hline(5, 9, 5, 4)   // 1st cousins
        hline(1, 15, 7, 4)  // 2nd cousins
        hline(1, 15, 9, 4)  // 3rd cousins
        // Text boxes
        for(let item=0; item<items.length; item++) {
            const [col, cols, row, rows, name, gender] = items[item]
            textBox(col, cols, row, rows, name, gender)
        }
        textStr(6.5, 3, 'Siblings')
        textStr(6.5, 5, '1st Cousins')
        textStr(6.5, 7, '2nd Cousins')
        textStr(6.5, 9, '3rd Cousins')

        // SVG
        const svg = {...tSvg, height: svgHt, width: svgWd, els: [els]}
        return svg
    }
</script>

{@html gxmlStr(svg)}
