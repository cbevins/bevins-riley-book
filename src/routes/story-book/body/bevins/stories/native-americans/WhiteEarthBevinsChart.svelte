<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlPath, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'
    import Mayflower from '$lib/images/Mayflower.jpg'

    const items = [
        // [col, row, name, gender]
        [6, 3, 'Wm L Bevins', 'm'],
        [9, 3, 'Mary Bolt', 'f'],
        [1, 5, 'Mary A White', 'f'],
        [4, 5, 'Wm A Bevins', 'm'],
        [9, 5, 'George H Bevins', 'm'],
        [12, 5, 'Charlotte House', 'f'],
        [15, 5, 'Lillian B Johnson', 'f'],
        [1, 7, 'Hattie J Collins', 'f'],
        [4, 7, 'Samuel Bevins', 'm'],
        [9, 7, 'Aaron T Bevins', 'm'],
        [12, 7, 'Mary C Big Bear', 'f'],
        [15, 7, ['Marciana', 'Oshkinowe'], 'f'],
        [1, 9, '9 children', ''],
        [12, 9, '6 children', ''],
        [15, 9, '11 children', ''],
        [1, 11, '19 grand children', ''],
        [12, 11, '?? grand children', ''],
        [15, 11, '75 grand children', ''],
    ]
    
    function svgChart() { 
        // Adapt the standard Gxml templates
        const tPath = {...gxmlPath}
        const tRect = {...gxmlRect, rx: 6, ry: 6}
        const tSvg = {...gxmlSvg}
        const tText = {...gxmlText,
            'text-anchor': 'middle', 
            'dominant-baseline': 'middle',
            'font-size': 11,
        }

        // Chart dimensions
        const svgWd = 668
        const cols = 18
        const rows = 14
        const colWd = svgWd / cols
        const rowHt = 30
        const svgHt = rows * rowHt
        const ml = 0
        const mr = 0
        const mt = 0
        const mb = 0
        const boxHt = rowHt - mt - mb
        const boxWd = 2.5*colWd - ml - mr

        // Creates a rectangle with text lines and adds it to global 'els'
        function textBox(col, row, content='', gender='m') {
            let fill = 'gray'
            if (gender === 'f') fill = 'magenta'
            if (gender === 'm') fill = 'dodgerblue'
            const [x, y] = xy(col, row)
            els.push({...tRect, x, y, height: boxHt, width: boxWd, fill})
            textStr(col, row, content, 'middle')
        }

        // Creates a text lines and adds them to global 'els'
        function textStr(col, row, lines='', baseline='auto') {
            if (! Array.isArray(lines)) lines = [lines]
            let dy = 1 / (lines.length + 1)
            for(let i=0; i<lines.length; i++) {
                const content = lines[i]
                const [tx, ty] = xy(col, row, 0.5, (i+1)*dy)
                const text = {...tText, x: tx, y: ty, 'dominant-baseline': baseline,
                    els: [{el: 'inner', content}]}
                els.push(text)  //Push each el onto the array
            }
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
        // Compose the chart
        //---------------------------------------------------------------
        const els = []

        // SVG background
        els.push({...tRect, height: svgHt, width: svgWd, fill: 'lightblue'})

        // Family locations background and legend
        const locations = [ // [col, row, rows, cols, legx, str, fill]
            [0.5, 6.7, 5.5,  6.2,  0.5, 'Deer River, MN', 'palegreen'],
            [0.5, 4.7, 1.5, 17.2,  4.5, 'Annawan, IL', 'peru'],
            [5.8, 2.7, 1.5,  6.2,  8.5, 'Newbold Verdon, Eng,', 'plum'],
            [8.8, 6.7, 5.5,  9.0, 13.5, 'White Earth, MN', 'peachpuff']
        ]
        for(let i=0; i<locations.length; i++) {
            const [col, row, rows, cols, legx, str, fill] = locations[i]
            els.push({...tRect, x: col*colWd, y: row*rowHt,
                height: rows*rowHt, width: cols*colWd, fill})
            els.push({...tRect, x: legx*colWd, y: 12.5 * rowHt,
                height: rowHt, width: colWd, fill})
            legendStr(legx-0.1, 12.5, str )
        }

        // Vertical Lines vline(col, row1, row2)
        vline(4, 4, 7)  // Wm A Bevins <--> Samuel Bevins
        vline(9, 4, 7)  // George H Bevins <-> Aaron T Bevins
        vline(1, 7, 11)  // Hattie J Collines <-> 19 grand children
        vline(12, 7, 11) // Mary C Big Bear <-> ?? grand children
        vline(15, 7, 11) // Marciana Oshkinowe <-> 75 grand children
        vline(7.5, 3, 4)
        // Horizontal Lines hline(col1, col2, row, dash='')
        hline(2, 4, 5)  // Mary A White <-> Wm A Bevins
        hline(2, 4, 7)  // Hattie J Collins <-> Samuel Bevins
        hline(9, 15, 5) // George H Bevins <-> Lillian B Johnson
        hline(9, 15, 7) // Aaron T Bevins <-> Marciana Oshkinowe
        hline(6, 8, 3)  // Wm L Bevins <-> Mary Bolt
        hline(4, 9, 4)  // Wm A Bevins <-> George H Bevins
        // Dashed lines
        hline(5, 9, 5, 4)   // siblings
        hline(5, 9, 7, 4)   // 1st cousins
        hline(1, 15, 9, 4)  // 2nd cousins
        hline(1, 15, 11, 4)  // 3rd cousins
        // Text boxes
        for(let item=0; item<items.length; item++) {
            const [col, cols, row, rows, name, gender] = items[item]
            textBox(col, cols, row, rows, name, gender)
        }
        textStr(6.5, 5, 'Siblings')
        textStr(6.5, 7, '1st Cousins')
        textStr(6.5, 9, '2nd Cousins')
        textStr(6.5, 11, '3rd Cousins')

        // Title
        const content = 'The Bevins Family in Deer River and White Earth, MN'
        els.push({...tText, x: svgWd/2, y: 50, 'font-size': 20,
            els: [{el: 'inner', content}]})
        // Immigrant image
        let x = 1.8 * boxWd
        let y = 2.8 * rowHt
        let width = 40
        els.push({el: 'clipPath', id: "clipCircle", els: [
            {el: 'circle', r: width/2, cx: x+width/2, cy: y+width/2}]})
        els.push({el: 'image', x, y, width,
            href: Mayflower, 'clip-path': 'url(#clipCircle)'
        })
        const svg = {...tSvg, x: 0, y: 100, height: svgHt, width: svgWd, els: [els]}
        return svg
    }
</script>

{@html gxmlStr(svgChart())}
