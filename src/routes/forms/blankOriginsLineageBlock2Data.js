// Long form data set for gxmlLineageBlocks
import { gxmlLine, gxmlPath, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

const tElli = {el: 'ellipse', rx: 100, ry: 100, stroke: 'black', 'stroke-width': 1, fill: 'grey'}
// const tPath = {...gxmlLine, stroke: 'black', 'stroke-width': 2}
const tPath = {...gxmlPath, stroke: 'black', 'stroke-width': 2}
const tRect = {...gxmlRect, rx: 6, ry: 6}
const tText = {...gxmlText, 'font-size': 14, 'text-anchor': 'middle','dominant-baseline': 'middle'}
const tName = {...tText, 'font-size': 16}
const tBorn = {...tText, 'font-size': 14}
const tImmi = {...tText}

// 'Northumbria' consist of 'Northumberland' and 'Durham' counties
const NLzh = 'orangered'
const ENdu = 'darkgreen'       // England, Durham
const ENnu = 'forestgreen'       // England, Northumerland
// States
const USia = 'deepskyblue'
const USin = 'lightskyblue'
const USmd = 'steelblue'
const USoh = 'skyblue'
const USpn = 'royalblue'
const USva = 'dodgerblue'

const unused = 'lightgray'

// all units are hundreths of an inch
const page = {h: 1100, w: 850, l: 25, r: 25, t: 25, b: 25, lineHt: 100/7}
const chart = {
    h: page.h - page.t - page.b,
    w: page.w - page.l - page.r
}
const t = 12.5
const b = 12.5
const tCol = {w: chart.w/4, l: 12.5, r: 12.5}
const tRow0 = {h: chart.h/2, t, b}
const tRow1 = {h: chart.h/4, t, b}
const tRow2 = {h: chart.h/8, t, b}
const tRow3 = {h: chart.h/16, t, b}

export const data = {
    page: {...page},
    draw: {links: true, blocks: true, text: true},
    cols: [
        // // column 0 (1 of 4) has 2 rows
        {...tCol, rows: [
            // col 0, row 0
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
            ]},
            // col 0, row 1
            {...tRow0, h: 0.2*chart.h, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
                {col: 0, row: 2, line: {...tPath}},
            ]},
            // col 0, row 2
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
            ]}
        ]},
        // column 1 (2 of 4) has 4 rows
        {...tCol, rows: [
            // col 1, row 0
            {...tRow1, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 1
            {...tRow1, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''}
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 2
                {...tRow1, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
            // col 1, row 3
            {...tRow1, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
        ]},
        // column 2 (3 of 4) has 8 rows
        {...tCol, rows: [
            // col 2, row 0
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // 2, 1
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // col 2, col 2
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tText}, content: ''},
                {text: {...tText}, content: ''},
                {text: {...tText}, content: ''}
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // col 2, row 3
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // col 2, row 4
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // col 2, row 5
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // col 2, row 6
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
            // col, row 7
            {...tRow2, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
        ]}, // end of row, col
        // column 3 (4 of 4) has 16 rows
        {...tCol, rows: [
            // col 3, row 0
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
            // {...tRow3, shape: {...tElli, rx: '0.3in', ry: '0.3in', fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 1
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 2
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 3
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 4
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 5
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 6
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 7
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 8
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 9
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tImmi}, content: ''},
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 10
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3 row 11
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3, row 12
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 6, line: {...tPath}},
            ]},
            // col 3, row 13
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 6, line: {...tPath}},
            ]},
            // col 3, row 14
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 7, line: {...tPath}},
            ]},
            // col 3, row 15
            {...tRow3, shape: {...tRect, fill: unused}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 7, line: {...tPath}},
            ]},
        ]}, // end of row, col
    ] // cols
} // data
