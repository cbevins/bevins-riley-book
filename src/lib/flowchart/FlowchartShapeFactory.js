const defaultLine = {el: 'line', 
    x1: 0, y1: 0, x2: 0, y2: 0,
    stroke: 'black',
    'stroke-width': 1
}

const defaultRect = {el: 'rect', 
    x: 0, y: 0,
    width: 100, height: 100,
    rx: 0, ry: 0,   // or 'auto'
    fill: 'none',
    stroke: 'black',
    'stroke-width': 1,
    els: []
}

const defaultSvg = {el: 'svg', x: 0, y: 0, width: 0, height: 0, els: []}

const defaultText = {el: 'text',
    x: 0, y: 0, dx: 0, dy: 0,
    'dominant-baseline': 'auto',    // middle, hanging
    fill: 'black',
    // rotate: 0,
    stroke: 'black',
    'text-anchor': 'start',    // start, middle, end, inherit
    // 'text-length: '',

    // Font characteristics
    'font-family': 'sans-serif',    // sans-serif, serif, monospace, cursive, fantasy, math, emoji, system-ui, ui-serif, ui-sans-serif, ui-rounded, ui-monospace
    'font-size': 'medium',      // [1.2rem xx-small, x-small, small, medium, large, x-large, xx-large, xxx-large
    // 'font-size-adjust': '',
    // 'font-stretch': '',
    'font-style': 'normal',     // normal, italic, oblique, oblique <23deg>,
    'font-variant': 'normal',   // 'small-caps'
    'font-weight': 'normal',    // normal, bold, bolder, lighter, [1-1000] 
    'font-size': 16,
    // 'letter-spacing': '',    // number with optional units
    // 'word-spacing', '',      // number with optional units
    // 'text-decoration': 'none',   // 'dashed wavy line-through underline overline <color> <thickness>
    els: [{el: 'inner', content: ''}]
}

/**
 * A factory for creating SVG shapes that are nested inside a Flowchart
 */
export class FlowchartShapeFactory {
    constructor() {
        this.svg = {...defaultSvg, x, y, height, width}
        this.line = {...defaultLine}
        this.rect = {...defaultRect}
        this.text = {...defaultText}
    }

    // Set current line context attributes (ignores x1, x2, y1, y2)
    setLine(props) {
        this.line = {...this.line, ...props}
        return this
    }

    // Set current rect context attributes (ignores x, y, width, height)   
    setRect(props) {
        this.rect = {...this.rect, ...props}
        return this
    }
    
    // Set current text context attributes (ignores text string)
    setText(props) {
        this.text = {...this.text, ...props}
        return this
    }
}