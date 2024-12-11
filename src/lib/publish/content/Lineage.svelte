<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr.js'

    export let fontSize = 11
    export let fontFamily = 'sans-serif'
    export let names = []   // array of {<direct ancestor>, <spouse>}
    export let titles = []

    const gens = names.length
    const u = 10
    const pad = u
    const gap = 2 * u
    const boxWd = 12 * u
    const boxHt = 2 * u
    const svgWd = gens * (boxWd + gap) + pad
    const svgHt = 3 * boxHt + 3 * pad

    const els = [
        // if we want a border...
        // {el: 'rect', x: 0, y: 0, width: svgWd, height: svgHt,
        //     fill: 'none', stroke: 'none', 'stroke-width': 1},
    ]
    const y1 = 2*pad + boxHt  // top of vertical line
    const y2 = y1 + pad     // bottom of vertical line
    const ym = y1 - boxHt/2 // mid y of top boxes
    for (let i=0; i<gens; i++) {
        let xl = pad + i*(boxWd+gap)
        let xr = xl + boxWd
        let xm = (xl + xr)/2
        // Title
        els.push({el: 'text', x: xm, y: pad,
            'text-anchor': "middle",
            'font-family': fontFamily,
            'font-weight': "lighter",
            'font-size': fontSize, 
            els: [{el: 'inner', content: titles[i]}]
        })
        // vertical connector between spouses IFF there is a spouse
        if (names[i][1]) {
            els.push({el: 'line', x1: xm, y1: y1, x2: xm, y2: y2,
                stroke: 'black','stroke-width': 1})
        }
        for(let j=0; j<2; j++) {
            if (names[i][j]) {
                let y = 2*pad + j * (boxHt+pad)
                let ybase = y + boxHt/2 + fontSize/3
                els.push({el: 'rect', x: xl, y: y, width: boxWd, height: boxHt,
                    fill: 'none', stroke: 'black', 'stroke-width': 1, rx: 4})
                els.push({el: 'text', x: xm, y: ybase,
                    'text-anchor': "middle",
                    'font-family': fontFamily,
                    'font-weight': "lighter",
                    'font-size': fontSize, 
                    els: [{el: 'inner', content: names[i][j]}]
                })
            }
        }
        // horizontal connector between generations
        if (i<gens-1) {
            els.push({el: 'line', x1: xr, y1: ym, x2: xr+gap, y2: ym,
                stroke: 'black','stroke-width': 1})
        }
    }
    const svg = [ {el: 'svg', width: svgWd, height: svgHt, els: [els]}]
</script>
<div class="grid grid-cols-1 place-items-center">
    {@html gxmlStr(svg)}
</div>
