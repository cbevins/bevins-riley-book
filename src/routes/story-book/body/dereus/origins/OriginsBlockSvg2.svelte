<script>
    import { gxmlGrid, gxmlLineageBlocks2 } from '$lib/gxml-graphpaper'
    import { gxmlStr } from '$lib/gxml/gxmlStr'
    import { gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'
    import { data } from './dereusOriginsData.js'
    const p = $$props // Ignore passed props: man, item, id

    function blocks() {
        const els =  gxmlLineageBlocks2(data)
        return els
    }

    function svg(els) {
        const g = {el: 'g', transform: 'scale(0.88) translate(-20, 10)', els: [els]}
        const head = {...gxmlText, x: '3.25in', y: '0.25in', 'font-size': 24,
            'text-anchor': 'middle', 'dominant-baseline': 'middle',
            els: [{el: 'inner', content: 'DeReus Family Origins V2'}]}
        const svg = {...gxmlSvg, height: '11in', width: '8.5in', els: [g, head]}
        return svg
    }
</script>
{@html gxmlStr(svg(blocks()))}

