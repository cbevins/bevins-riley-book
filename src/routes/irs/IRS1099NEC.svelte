<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlPath, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

    // Adapt the standard Gxml templates
    const tPath = {...gxmlPath}
    const tRect = {...gxmlRect, rx: 6, ry: 6}
    const tSvg = {...gxmlSvg}
    const tText = {...gxmlText, 'font-size': 16,
        // 'text-anchor': 'middle', 
        // 'dominant-baseline': 'middle',
    }

    function Irs1099Nec(year='24', gross='24,000.00', fedWh='0.00', stateWh='0.00') {
        function text(x, y, content, baseline='start') {
            els.push({...tText, x: `${x}in`, y: `${y}in`, 'dominant-baseline': baseline,
                els: [{el: 'inner', content}]})
        }

        const els = []
        const ml = '0.75'

        text(5.75, 1.5, year)
        text(ml, 1.0, 'Systems for Environmental Management')
        text(ml, 1.2, '808 Woodford Street')
        text(ml, 1.4, 'Missoula, MT 59801')
        text(ml, 1.8, '81-0370970')
        text(2.3, 1.8, '476-60-4159')
        text(4.1, 1.8, '24,000.00')
        text(ml, 2.2, 'Collin D. Bevins')
        text(ml, 2.7, '808 Woodford Street')
        text(ml, 3.0, 'Missoula, MT 59801')
        text(4.1, 2.8, '0.00')
        text(4.1, 3.2, '0.00')
        text(5.0, 3.2, 'MT/810370970')
        text(6.8, 3.2, '24,000.00')
        // SVG for 1 form of a 3-form page
        const height = '4.5in'
        const width = '8.0in'
        // els.push({...tRect, height, width})
        const svg = {...tSvg, x: 0, y: 100, height, width, els: [els]}
        return svg
    }

    function Irs1096(amount='24,000.00', forms='1', fedWh='0.00') {
        function text(x, y, content, baseline='start') {
            els.push({...tText, x: `${x}in`, y: `${y}in`, 'dominant-baseline': baseline,
                els: [{el: 'inner', content}]})
        }
        const els = []
        const ml = '0.7'
        text(ml, 1.5, 'Systems for Environmental Management')
        text(ml, 2.1, '808 Woodford Street')
        text(ml, 2.5, 'Missoula, MT 59801')
        text(ml, 2.8, 'Collin D Bevins')
        text(3.8, 2.8, '406 360-5673')
        text(ml, 3.1, 'cbevins@montana.com')
        text(ml, 3.5, '81-0370970')
        text(3.5, 3.5, forms)
        text(4.6, 3.5, fedWh)
        text(6.1, 3.5, amount)
        text(1.9, 4.8, 'X')
        const height = '5.5in'
        const width = '8.0in'
        // els.push({...tRect, height, width})
        const svg = {...tSvg, height, width, els: [els]}
        return svg
    }
</script>

{@html gxmlStr(Irs1099Nec())}

<!-- Force the page break -->
<div style="page-break-before: always"/>

{@html gxmlStr(Irs1096())}
