export function gxmlLineageBlocks2(data) {
    // Calculate coordinates for all elements
    function setCoordinates() {
        let clx = data.page.l                   // cell left x-coord
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            const blx = clx + col.l             // block left x-coord
            const crx = clx + col.w             // cell right x-coord
            const brx = crx - col.r             // block right x-coord
            const bw  = brx - blx               // block width
            const bcx = (blx + brx)/2           // block center x-coord
            let cty = data.page.t               // cell top y-coord
            // console.log('col', c, col)
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                const bty = cty + row.t         // block top y-coord
                const cby = cty + row.h         // cell bottom y-coord
                const bby = cby - row.b         // block bottom y-coord
                const bh  = bby - bty           // block height
                const bcy = (bty + bby)/2       // block center y-coord
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
                const {blx: x, bty: y, bw: width, bh: height} = row.block
                if (row.shape.el === 'rect') {
                    els.push({...row.shape, x, y, width, height})
                } else if (row.shape.el === 'ellipse') {
                    const {bcx: cx, bcy: cy} = row.block
                    els.push({...row.shape, cx: cx, cy: cy})
                }
            }
        }
    }

    function drawLinks() {
        for(let c=0; c<data.cols.length; c++) {
            const col = data.cols[c]            // *this* col object
            for (let r=0; r<col.rows.length; r++) {
                const row = col.rows[r]         // *this* row object
                for( let l=0; l<row.links.length; l++) {
                    const link = row.links[l]
                    const dest = data.cols[link.col].rows[link.row]
                    if (link.col !== c) {
                        const {brx: x1, bcy: y1} = row.block
                        const {brx: x2, bcy: y2} = dest.block
                        const xm = ((dest.block.brx + row.block.blx) / 2)
                        els.push({...link.line,
                            d: `M ${x1} ${y1} H ${xm} V ${y2} H ${x2}`})
                    } else {    // both cells are in the same column
                        const {blx, brx: x1, bcy: y1} = row.block
                        const x2 = blx - col.l
                        const y2 = dest.block.bcy
                        els.push({...link.line,
                            d: `M ${x1} ${y1} H ${x2} V ${y2} H ${x1}`})
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
                let ly = row.block.bcy - lineHt * ((row.lines.length-1)/2) // first line y
                for (let l=0; l<row.lines.length; l++) {
                    const text = {...row.lines[l].text}
                    els.push({...text, x: row.block.bcx, y: ly,
                        els: [{el: 'inner', content: row.lines[l].content}]})
                    ly += lineHt
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
