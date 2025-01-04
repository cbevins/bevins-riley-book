<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlPath, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

    // Adapt the standard Gxml templates
    const tPath = {...gxmlPath}
    const tRect = {...gxmlRect, rx: 6, ry: 6}
    const tSvg = {...gxmlSvg}
    const tText = {...gxmlText,
        'text-anchor': 'middle', 
        'dominant-baseline': 'middle'
    }

    const colWd = 168
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

    function textBox(col, row, content='', fill='none') {
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
    const g0 = textBox(0, 0, 'Wm C Bevins', 'dodgerblue')
    const g1 = textBox(1, 0, 'Samuel Bevins', 'dodgerblue')
    const g2 = textBox(2, 0, 'Wm A Bevins', 'dodgerblue')
    const g3 = textBox(3, 0, 'Wm L Bevins', 'dodgerblue')
    const s0 = textBox(0, 1, 'Meartia M Heddens', 'magenta')
    const s1 = textBox(1, 1, 'Hattie J Collins', 'magenta')
    const s2 = textBox(2, 1, 'Mary Ann White', 'magenta')
    const s3 = textBox(3, 1, 'Mary Bolt', 'magenta')

    // Lines
    els.push({...tPath, d: hline(0,0)})
    els.push({...tPath, d: hline(1,0)})
    els.push({...tPath, d: hline(2,0)})
    els.push({...tPath, d: vline(0,0)})
    els.push({...tPath, d: vline(1,0)})
    els.push({...tPath, d: vline(2,0)})
    els.push({...tPath, d: vline(3,0)})
    // SVG
    const svg = {...tSvg, height: svgHt, width: svgWd, els: [els]}
</script>

{@html gxmlStr(svg)}
