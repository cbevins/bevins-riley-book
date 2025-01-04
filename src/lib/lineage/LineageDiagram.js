// TO DO - add line bending when end cell row AND col differ
// i.e., eah line should have at least 4 points
import { gxmlStr } from "../gxml/gxmlStr.js"
export class LineageDiagram {
    constructor()
    {
        this.setGrid()
        this.setMargins()
        this.setPadding()
        this.setCell()
        this.setLine()
        this.setText()
        this._cells = []
        this._lines = []
    }

    addCell(col, row, textLines=[]) {
        if (! Array.isArray(textLines)) textLines = [textLines]
        this._cells.push({col, row, textLines})
        return this
    }

    addCells(cells) {
        for(let i=0; i<cells.length; i++) {
            const [col, row, textLines] = cells[i]
            this.addCell(col, row, textLines)
        }
        return this
    }

    // side is left, right, top, bottom
    addLine(col1, row1, side1, col2, row2, side2) {
        this._lines.push({col1, row1, side1, col2, row2, side2})
        return this
    }

    addLines(lines) {
        for(let i=0; i<lines.length; i++) {
            const [col1, row1, side1, col2, row2, side2] = lines[i]
            this.addLine(col1, row1, side1, col2, row2, side2)
        }
        return this
    }

    gxml() {
        const cells = this.gxmlCells()
        const lines = this.gxmlLines()
        return cells.concat(lines)
    }

    // Returns a single rect el with embedded text
    gxmlCell(cell) {
        const {row, col, textLines} = cell
        const els = []
        for(let i=0; i<textLines.length; i++) {
            const el = this.gxmlText(row, col, i, textLines.length, textLines[i])
            els.push(el)
        }
        const rect = {el: 'rect',
            x: this.rectx1(col),
            y: this.recty1(row),
            width: this.rectw(),
            height: this.recth(),
            fill: this._cell.fill,
            stroke: this._cell.strokeColor,
            'stroke-width': 1,
            rx: this._cell.radius,
            els: els
        }
        return rect
    }

    // Returns an array of rect els
    gxmlCells() {
        const els = []
        for (let i=0; i<this._cells.length; i++) {
            els.push(this.gxmlCell(this._cells[i]))
        }
        return els
    }

    sidexy(col, row, side) {
        if (side === 'l') {
            return [this.rectx1(col), this.rectym(row)]
        } else if (side === 'r') {
            return [this.rectx2(col), this.rectym(row)]
        } else if (side === 't') {
            return [this.rectxm(col), this.recty1(row)]
        } 
        // side === 'b'
        return [this.rectxm(col), this.recty2(row)]
    }

    gxmlLine(line) {
        const {col1, row1, side1, col2, row2, side2} = line
        const [x1, y1] = this.sidexy(col1, row1, side1)
        const [x2, y2] = this.sidexy(col2, row2, side2)
        const el = {el: 'line', x1, y1, x2, y2,
            stroke: this._line.strokeColor,
            'stroke-width': this._line.strokeWidth,
            els: []
        }
        return el
    }

    gxmlLines() {
        const els = []
        for (let i=0; i<this._lines.length; i++) {
            els.push(this.gxmlLine(this._lines[i]))
        }
        return els
    }

    gxmlText(row, col, line, lines, str) {
        const el = {el: 'text',
            x: this.textx(col),
            y: this.texty(row, line, lines),
            'text-anchor': this._text.anchor,
            'font-family': this._text.family,
            'font-weight': this._text.weight,
            'font-size': this._text.size, 
            els: [{el: 'inner', content: str}]
        }
        return el
    }

    // grid cell coordinates
    colx0(col) { return col * this._grid.cellWd }
    colx1(col) { return (col+1) * this._grid.cellWd }
    rowy0(row) { return row * this._grid.cellHt }
    rowy1(row) { return (row+1) * this._grid.cellHt }

    // cell rect coordinates
    recth() { return this._grid.cellHt - this._margin.t - this._margin.b }
    rectw() { return this._grid.cellWd - this._margin.l - this._margin.r }
    rectx1(col) { return this.colx0(col) + this._margin.l * this._grid.cellWd }
    rectx2(col) { return this.rectx1(col) + this.rectw() }
    rectxm(col) { return this.rectx1(col) + this.rectw()/2 }
    recty1(row) { return this.rowy0(row) + this._margin.t * this._grid.cellHt }
    recty2(row) { return this.recty1(row) + this.recth() }
    rectym(row) { return this.recty1(row) + this.recth()/2 }

    setCell(strokeWidth=1, strokeColor='black', radius=1, fill='none') {
        this._cell = {fill, radius, strokeWidth, strokeColor}
        return this
    }

    setGrid(cols=4, rows=2, cellWd=200, cellHt=50) {
        this._grid = {
            cellHt,
            cellWd,
            cols,
            rows,
            w: cols * cellWd,
            h: rows * cellHt
        }
        return this
    }

    setLine(strokeWidth=1, strokeColor='black') {
        this._line = {strokeWidth, strokeColor}
        return this
    }

    setMargins(l=0.1, r=0.1, t=0.1, b=0.1) {
        this._margin = {l, r, t, b}
        return this
    }

    setPadding(l=0.1, r=0.1, t=0.1, b=0.1) {
        this._padding = {l, r, t, b}
        return this
    }

    setText(size=11, anchor='middle', weight='normal', family='sans-serif') {
        this._text = {anchor, family, size, weight}
        return this
    }

    textx(col) {
        if (this._text.anchor === 'middle') return this.rectxm(col)
        return this.rectx1(col) + this._padding.l
    }

    texty(row, line, lines) {
        const recth = this.recth()
        const texth = recth - this._padding.t - this._padding.b
        const lineh = texth / lines
        return this.recty1(row) + this._padding.t + line * lineh
    }
}