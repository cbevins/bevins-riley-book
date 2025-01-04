import { FlowchartShapeFactory } from "./FlowchartShapeFactory.js"
import { FlowchartTextboxFactory } from "./FlowchartTextboxFactory.js"

const tbf = new FlowchartTextboxFactory(50, 75, 250, 100)
const tb1 = tbf.gxml()
console.log(tb1)

// const fc = new Flowchart()
// fc.setGrid(2, 4, 250, 100)
// fc.setMargins(0.1, 0.1, 0.1, 0.1)
// fc.setPadding(0.1, 0.1, 0.1, 0.1)

// fc.addCell(0, 0, 'Collin D Bevins')
// .addCell(0, 1, 'Barbara J Riley')

// fc.addCells([
// [1, 0, 'William C Bevins'],
// [1, 1, 'Meartia M Heddens'],
// [2, 0, 'Samuel Bevins'],
// [2,  1, 'Hattie J Collins'],
// [3, 0 , 'William A Bevins'],
// [3, 1, 'Mary A White']])

// fc.addLine(0, 0, 'b', 0, 1, 't')
// .addLine(0, 0, 'r', 1, 0, 'l')

// fc.addLines([
//     [1, 0, 'b', 1, 1, 't'],
//     [1, 0, 'r', 2, 0, 'l'],
//     [2, 0, 'b', 2, 1, 't'],
//     [2, 0, 'r', 3, 0, 'l'],
//     [3, 0, 'b', 3, 1, 't'],
// ])

// // console.log(fc.gxml())
// console.log(box1)
