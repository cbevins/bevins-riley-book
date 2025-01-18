<script>
    import { gxmlLineageBlocks2 } from '$lib/gxml-graphpaper'
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'
    import { data } from './nelsonOriginsData.js'
    const p = $$props // Ignore passed props: man, item, id

    // Legend
    const x1 = 0.2
    const x2 = 1.8
    const x3 = 3.5
    const x4 = 5.20
    const y1 = 9.25
    const y2 = 9.45
    const y3 = 9.65
    const legends = [
        {content: 'Minnesota, USA',         x: x1, y: y1, color: 'cornflowerblue'},
        {content: 'New York, USA',          x: x1, y: y2, color: 'deepskyblue'},
        {content: 'Rhode Island, USA',      x: x1, y: y3, color: 'powderblue'},
        // {content: 'Pennsylvania, USA', x: x1, y: y2, color: 'royalblue'},
        // {content: 'Ohio, USA',         x: x2, y: y2, color: 'skyblue'},
        // {content: 'Virginia, USA',     x: x3, y: y2, color: 'dodgerblue'},

        {content: 'Acadia, CAN & USA',  x: x2, y: y1, color: 'pink'},
        {content: 'St Larwence Seaway, QC',  x: x2, y: y2, color: 'red'},
        {content: 'Kronoberg, SWE',      x: x2, y: y3, color: 'gold'},
    ]

    function blocks() {
        const els =  gxmlLineageBlocks2(data)
        return els
    }

    function colTitles() {
        const fs = 16
        const y = 0.4 + 'in'
        return [textStr('0.85in', y, 'Grand Parents', fs),
            textStr('2.5in', y, '1st Great GP', fs),
            textStr('4.2in', y, '2nd Great GP', fs),
            textStr('6.0in', y, '3rd Great GP', fs)
        ]
    }

    function legend() {
        const els = []
        for (let i=0; i<legends.length; i++) {
            const {content, x, y, color: fill} = legends[i]
            els.push({...gxmlRect, x: x+'in', y: y+'in', width: '1.5in', height: '0.2in', fill})
            els.push(textStr((x+0.75)+'in', (y+0.1)+'in', content, 12, 'middle'))
        }
        return els
    }

    function textStr(x, y, content, fontSize=24, anchor='middle') {
        return {...gxmlText, x, y, 'font-size': fontSize,
            'text-anchor': anchor, 'dominant-baseline': 'middle',
            els: [{el: 'inner', content}]}
    }

    function svg(gEls) {
        const els = [
            {el: 'g', transform: 'scale(0.8) translate(-20, 30)', els: [gEls]},
            textStr('3.25in', '0.2in', 'Nelson Family Origins'),
            ...colTitles(),
            ...legend()]
        const svg = {...gxmlSvg, height: '11in', width: '8.5in', els}
            // els: [g, head, col0, col1, col2, col3]}
        return svg
    }
</script>
{@html gxmlStr(svg(blocks()))}

