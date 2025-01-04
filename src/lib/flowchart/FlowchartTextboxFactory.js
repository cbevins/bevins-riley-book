import { gxmlStr } from "../gxml/gxmlStr.js"
import { FlowchartShapeFactory } from './FlowchartShapeFactory.js'
/**
 * A factory for creating simple SVG text boxes to be nested inside a Flowcahrt
 */
export class FlowchartTextboxFactory extends FlowchartShapeFactory {
    constructor() {
        super()
        // set the line, rect, and text SVG context here...
        this.setText({'text-anchor': 'middle'})
    }

    // Returns a TextBox Gxml object
    gxml(x, y, width, height, text='') {
        const textEl = {el: 'text',
            x: width/2,
            y: height/2,
            els: [{el: 'inner', content: text}],
            ...this.text
        }

        const rectEl = {el: 'rect', x, y, width, height, els: [textEl],
            ...this.rect}
        const svgEl = {el: 'svg', x, y, width, height, els: [rectEl]}
        return svgEl
    }
}