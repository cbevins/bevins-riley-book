export function gxmlLineageBlocks2(data) {
    // Calculate coordinates for all elements
    function setCoordinates() {
        let clx = data.page.l                   // cell left x-coord
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            const blx = clx + col.l             // block left x-coord
            const crx = clx + col.w             // cell right x-coord
            const brx = crx - col.r             // block right x-coord
            const bw = brx - blx                // block width
            const bcx = (blx + brx)/2           // block center x-coord
            let cty = data.page.t               // cell top y-coord
            // console.log('col', c, col)
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                const bty = cty + row.t         // block top y-coord
                const cby = cty + row.h         // cell bottom y-coord
                const bby = cby - row.b         // block bottom y-coord
                const bh = bby - bty            // block height
                const bcy = (bty + bby)/2       // block center y-coord
                // console.log(c, r, bcx, bcy)
                // store all props for later use by linkages
                data.cols[c].rows[r].cell = {clx, crx, cty, cby}
                data.cols[c].rows[r].block = {blx, brx, bty, bby, bw, bh, bcx, bcy}
                cty = cby
            }
            clx = crx
        }
    }

    function drawBlocks() {
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                // paint blocks over the link lines
                if (data.draw.blocks) {
                    const x = row.block.blx + 'in'
                    const y = row.block.bty + 'in'
                    const width = row.block.bw + 'in'
                    const height = row.block.bh + 'in'
                    if (row.shape.el === 'rect') {
                        els.push({...row.shape, x, y, width, height})
                    } else if (row.shape.el === 'ellipse') {
                        const cx = row.block.bcx + 'in'
                        const cy = row.block.bcy + 'in'
                        els.push({...row.shape, cx: cx, cy: cy})
                    }
                }
            }
        }
    }

    function drawLinks() {
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                // first paint the link lines
                if (data.draw.links) {
                    for( let l=0; l<row.links.length; l++) {
                        const link = row.links[l]
                        const dest = data.cols[link.col].rows[link.row]
                        // console.log(`[${c},${r}] --- [${link.col},${link.row}]`)
                        if (link.col !== c) {
                            const x1 = row.block.brx + 'in'
                            const y1 = row.block.bcy + 'in'
                            const x2 = dest.block.brx + 'in'
                            const y2 = dest.block.bcy + 'in'
                            const xm = ((dest.block.brx + row.block.blx) / 2) + 'in'
                            els.push({...link.line, x1: x1, y1: y1, x2: xm, y2: y1})
                            els.push({...link.line, x1: xm, y1: y1, x2: xm, y2: y2})
                            els.push({...link.line, x1: xm, y1: y2, x2: x2, y2: y2})
                        } else {
                            const x1 = row.block.brx + 'in' // block right edge
                            const x2 = row.cell.clx + 'in'  // cell left edge
                            const y1 = row.block.bcy + 'in' // block mid y
                            const y2 = dest.block.bcy + 'in'
                            els.push({...link.line, x1: x1, y1: y1, x2: x2, y2: y1})
                            els.push({...link.line, x1: x2, y1: y1, x2: x2, y2: y2})
                            els.push({...link.line, x1: x2, y1: y2, x2: x1, y2: y2})
                        }
                    }
                }
            }
        }
    }

    function drawText() {
        const lineHt = data.page.lineHt
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                // paint text over the blocks and link lines
                if (data.draw.text) {
                    let ly = row.block.bcy - lineHt * ((row.lines.length-1)/2) // first line y
                    for (let l=0; l<row.lines.length; l++) {
                        const text = {...row.lines[l].text}
                        els.push({...text, x: row.block.bcx + 'in', y: ly+'in',
                            els: [{el: 'inner', content: row.lines[l].content}]})
                        ly += lineHt
                    }
                }
            }
        }
    }

    const els = []
    setCoordinates()
    if (data.draw.links) drawLinks()
    if (data.draw.blocks) drawBlocks()
    if (data.draw.text) drawText()
    return els
}
