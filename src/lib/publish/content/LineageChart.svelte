<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlPath, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

    export let vertical = false
    export let gens = []
    // Ignore passed props: man, item, id
    const p = $$props
    // console.log('LineageChart.svelte props', p)
    
    const pairs = [...gens]

    // Adapt the standard Gxml templates as needed
    const tPath = {...gxmlPath}
    const tRect = {...gxmlRect, rx: 10, ry: 10}
    const tSvg = {...gxmlSvg}
    const fontSizes= [12, 12, 12, 12, 12, 12, 10, 9, 9, 9, 9, 9]
    const female = 'magenta'
    const male = 'dodgerblue'

    const cols = vertical ? 2 : gens.length
    const rows = vertical ? gens.length : 2
    const maxWd = vertical ? 320 : 670
    const colWd = maxWd / cols
    const fontSize = fontSizes[cols]
    const tText = {...gxmlText,
        'font-size': fontSize,
        'text-anchor': 'middle', 
        'dominant-baseline': 'middle'
    }
    
    const rowHt = 50
    const ml = 10
    const mr = 10
    const mt = 10
    const mb = 10
    const svgHt = rows * rowHt
    const svgWd = cols * colWd
    const boxHt = rowHt - mt - mb
    const boxWd = colWd - ml - mr
    const els = []

    // Creates a rectangle with text lines and adds it to global 'els'
    function textBox(col, row, content='', gender='m') {
        let fill = 'gray'
        if (gender === 'f') fill = female
        else if (gender === 'm') fill = male
        const [x, y] = xy(col, row)
        els.push({...tRect, x, y, height: boxHt, width: boxWd, fill})
        textStr(col, row, content, 'middle')
    }

    function textStr(col, row, lines='', baseline='middle') {
        if (! Array.isArray(lines)) lines = [lines]
        let dy = 1 / (lines.length + 1)
        for(let i=0; i<lines.length; i++) {
            const fsize = i ? fontSize-1 : fontSize
            const content = lines[i]
            const [tx, ty] = xy(col, row, 0.5, (i+1)*dy)
            els.push({...tText, x: tx, y: ty,
                'font-size': fsize,
                'dominant-baseline': baseline,
                els: [{el: 'inner', content}]})
        }
    }

    // Returns [x,y] of col, row with added offset ratio
    function xy(col, row, xratio=0, yratio=0) {
        const x = ml + col * colWd + xratio * boxWd
        const y = mt + row * rowHt + yratio * boxHt
        return [x,y]
    }

    // SVG background
    els.push({...tRect, height: svgHt, width: svgWd, fill: 'lightblue'})

    if (vertical) pairs.reverse()
    // One connector between each pair
    const n = vertical ? rows : cols
    for(let i=0; i<n; i++) {
            let col = vertical ? 0 : i
            let row = vertical ? i : 0
            const [x1, y1] = xy(col, row, 0.5, 0.5)
            col = vertical ? cols -1 : i
            row = vertical ? i : rows - 1
            const [x2, y2] = xy(col, row, 0.5, 0.5)
            const d =`M ${x1}, ${y1} L ${x2} ${y2}`
            els.push({...tPath, d})
        }
    // One connector across the person lineage
    let col = vertical ? 0 : cols - 1
    let row = vertical ? rows - 1 : 0
    const [x1, y1] = xy(0, 0, 0.5, 0.5)
    const [x2, y2] = xy(col, row, 0.5, 0.5)
    els.push({...tPath,d: `M ${x1}, ${y1} L ${x2} ${y2}`})

    for(let i=0; i<pairs.length; i++) {
        const [person, pgender, spouse, sgender, gen] = pairs[i]
        let col = vertical ? 0 : i
        let row = vertical ? i : 0
        textBox(col, row, [person, gen], pgender)
        col = vertical ? 1 : i
        row = vertical ? i : 1
        textBox(col, row, [spouse, gen], sgender)
    }
    const svg = {...tSvg, height: svgHt, width: svgWd, els: [els]}
</script>

{@html gxmlStr(svg)}
