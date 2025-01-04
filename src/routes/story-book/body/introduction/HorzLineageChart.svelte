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

    const svg = horzLineageChart(gens)
    
    function horzLineageChart(gens) { 
        // Adapt the standard Gxml templates
        const tPath = {...gxmlPath}
        const tRect = {...gxmlRect, rx: 6, ry: 6}
        const tSvg = {...gxmlSvg}
        const tText = {...gxmlText,
            'text-anchor': 'middle', 
            'dominant-baseline': 'middle'
        }

        const colWd = 167
        const rowHt = 50
        const cols = 4
        const rows = 2
        const ml = 10
        const mr = 10
        const mt = 10
        const mb = 10
        const svgHt = rows * rowHt
        const svgWd = cols * colWd
        const boxHt = rowHt - mt - mb
        const boxWd = colWd - ml - mr
        const els = []

        function textBox(col, row, content='', gender='m') {
            const fill = (gender === 'f') ? 'magenta' : 'dodgerblue'
            const [x, y] = xy(col, row)
            const rect = {...tRect, x, y, height: boxHt, width: boxWd, fill}
            const [tx, ty] = xy(col, row, 0.5, 0.5)
            const text = {...tText, x: tx, y: ty, els: [{el: 'inner', content}]}
            els.push(rect, text)  //Push each el onto the array
            return rect
        }

        // Returns [x,y] of col, row with added offset ratio
        function xy(col, row, xratio=0, yratio=0) {
            const x = ml + col * colWd + xratio * boxWd
            const y = mt + row * rowHt + yratio * boxHt
            return [x,y]
        }

        // horizontal connector from left box
        function hline(col, row) {
            const [x1, y1] = xy(col, row, 1, 0.5)
            const [x2, y2] = xy(col+1, row, 0, 0.5)
            const d =`M ${x1}, ${y1} L ${x2} ${y2}`
            return d
        }

        // vertical connector from upper box to lower
        function vline(col, row) {
            const [x1, y1] = xy(col, row, 0.5, 1)
            const [x2, y2] = xy(col, row+1, 0.5, 0)
            const d =`M ${x1}, ${y1} L ${x2} ${y2}`
            return d
        }

        // SVG background
        els.push({...tRect, height: svgHt, width: svgWd, fill: 'lightblue'})
        
        // Text boxes and vertical ines
        for(let gen=0; gen<gens.length; gen++) {
            const [ancestor, agender, spouse, sgender, title] = gens[gen]
            textBox(gen, 0, ancestor, agender)
            textBox(gen, 1, spouse, sgender)
            els.push({...tPath, d: vline(gen, 0)})
        }
        
        // Horizontal lines
        for(let gen=0; gen<gens.length-1; gen++) {
            els.push({...tPath, d: hline(gen,0)})
        }
        
        // SVG
        const svg = {...tSvg, height: svgHt, width: svgWd, els: [els]}
        return svg
    }
</script>

{@html gxmlStr(svg)}
