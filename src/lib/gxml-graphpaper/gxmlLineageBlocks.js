import { gxmlLine, gxmlRect, gxmlText } from '$lib/gxml/gxmlTemplates.js'
/**
 * Returns an array of Gxml els[] for a lineage block page
 * @param {number} cols number of columns (default=4)
 * @param {number} xpad inches between columns
 * @param {number} ypad inches between rows
 * @param {number} left page left margin (inches)
 * @param {number} right page right margin (inches)
 * @param {number} top page top margin (inches)
 * @param {number} bottom page bottom margin (inches)
 * @param {number} pageWd page width (inches)
 * @param {number} pageHt page height (inches)
 * @returns Array of Gxml els[] to add to parent els
 * or sumbitted to gxmlStr()
 */
export function gxmlLineageBlocks(cols=4, text=[], xpad=0.25, ypad=0.125,
    left=0.25, right=0.25, top=0.25, bottom=0.25, pageWd=8.5, pageHt=11)
{
    const els = []
    const tLine = {...gxmlLine, stroke: 'black', 'stroke-width': 1}
    const tRect = {...gxmlRect, rx: 6, ry: 6}
    const tText = {...gxmlText, 'font-size': 14,
        'text-anchor': 'middle', 
        'dominant-baseline': 'middle',
    }

    const blockWd = (pageWd - left - right) / cols
    const width = (blockWd - xpad) + 'in'

    // Returns the block rectangle's {x, y, width, height}
    function rect(col, row) {
        const blocks = Math.pow(2, col+1)   // vertical blocks
        const blockHt = (pageHt-top-bottom) / blocks
        const height = (blockHt - ypad) + 'in' 
        const x = (left + xpad + col * blockWd) + 'in'
        const y = (top + ypad + row*blockHt) + 'in'
        return {x, y, width, height}
    }

    function midpt(col, row) {
        const blocks = Math.pow(2, col+1)   // vertical blocks
        const blockHt = (pageHt-top-bottom) / blocks
        const x = left + (xpad/2) + (col+0.5) * blockWd
        const y = top + ypad + (row+0.5)*blockHt
        return {x, y}
    }

    // Returns the block link's {x1, y1, x2, y2}
    function link(col, row) {
        const blocks = Math.pow(2, col+1)   // vertical blocks
        const blockHt = (pageHt-top-bottom) / blocks
        const x1 = (left + xpad + col * blockWd) + 'in'
        const x2 = (left + col * blockWd) + 'in' // right edge of left block
        const ym = (top + ypad/2 + (row+0.5)*blockHt) + 'in'
        return {x1, x2, y1: ym, y2: ym }
    }

    // for (let col=0; col<cols; col++) {
    //     const blocks = Math.pow(2, col+1)
    //     for(let row=0; row<blocks; row++) {
    //         els.push({...tLine, ...link(col, row, blocks)})
    //         els.push({...tRect, ...rect(col, row), fill: 'lightgrey'})
    //     }
    // }

    const lineHt = 0.15
    for(let i=0; i<text.length; i++) {
        // Each text element is an array of [col, row, [stringArray]]
        let [col, row, lines, fill] = text[i]
        console.log(col, row, lines, fill)
        if (!fill) fill = 'lightgrey'
        const blocks = Math.pow(2, col+1)
        if (col) els.push({...tLine, ...link(col, row, blocks)})
        els.push({...tRect, ...rect(col, row), fill})

        lines = Array.isArray(lines) ? lines : [lines]
        // Determine y line
        const {x, y} = midpt(col, row)  // without 'in' suffix
        const y0 = y - lineHt * (lines.length / 2)
        for(let j=0; j<lines.length; j++) {
            const yz = y0 + j * lineHt
            els.push({...tText, x: x+'in', y: yz+'in',
                els: [{el: 'inner', content: lines[j]}]})
            }
    }
    return els
}
