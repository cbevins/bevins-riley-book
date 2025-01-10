// Long form data set for gxmlLineageBlocks
import { gxmlLine, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'

const tElli = {el: 'ellipse', rx: 100, ry: 100, stroke: 'black', 'stroke-width': 1, fill: 'grey'}
const tLine = {...gxmlLine, stroke: 'black', 'stroke-width': 2}
const tRect = {...gxmlRect, rx: 6, ry: 6}
const tText = {...gxmlText, 'font-size': 14, 'text-anchor': 'middle','dominant-baseline': 'middle'}
const tName = {...tText, 'font-size': 16}
const tBorn = {...tText, 'font-size': 14}
const tImmi = {...tText}

// 'Northumbria' consist of 'Northumberland' and 'Durham' counties
const NLzh = 'tan'
const ENdu = 'sienna'       // England, Durham
const ENnu = 'sienna'       // England, Northumerland
// States
const USia ='wheat'
const USmd = 'chocolate'
const USoh = 'goldenrod'
const USpn = 'goldenrod'
const USva = 'chocolate'

// all units are inches
const page = {h: 11, w: 8.5, l: 0.25, r: 0.25, t: 0.25, b: 0.25, lineHt: 1/7}
const chart = {
    h: page.h - page.t - page.b,
    w: page.w - page.l - page.r
}
const t = 0.125
const b = 0.125
const tCol = {w: chart.w/4, l: 0.125, r: 0.125}
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
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Sheldon James Riley'},
                {text: {...tBorn}, content: 'What Cheer, Keokuk, IA'},
            ], links: [
            ]},
            // col 0, row 1
            {...tRow0, h: 0.2*chart.h, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Sheldon Junior Riley'},
                {text: {...tBorn}, content: 'Newton, Jasper, IA'},
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
                {col: 0, row: 2, line: {...tLine}},
            ]},
            // col 0, row 2
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: ENdu}, lines: [
                {text: {...tName}, content: 'Gladys Mae De Reus'},
                {text: {...tBorn}, content: 'Valeria, Jasper, IA'},
            ], links: [
            ]}
        ]},
        // column 1 (2 of 4) has 4 rows
        {...tCol, rows: [
            // col 1, row 0
            {...tRow1, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Jeremiah Riley'},
                {text: {...tBorn}, content: 'Nelsonville, Athens, OH'},
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
            ]},
            // col 1, row 1
            {...tRow1, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1886'},
                {text: {...tName}, content: 'Caroline Carrie Robson'},
                {text: {...tBorn}, content: 'Heyworth, Durham'}
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
            ]},
            // col 1, row 2
                {...tRow1, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Peter De Reus'},
                {text: {...tBorn}, content: 'Pella, Marion, IA'},
            ], links: [
                {col: 0, row: 2, line: {...tLine}},
            ]},
            // col 1, row 3
            {...tRow1, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Helen Sophia'},
                {text: {...tName}, content: '"Ella" Poulson'},
                {text: {...tBorn}, content: 'Colfax, Jasper, IA'},
            ], links: [
                {col: 0, row: 2, line: {...tLine}},
            ]},
        ]},
        // column 2 (3 of 4) has 8 rows
        {...tCol, rows: [
            // [2, 0, ['Henry Thomas Riley', '', 'Ohio'], ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Henry Thomas Riley'},
                {text: {...tBorn}, content: 'Ohio'},
            ], links: [
                {col: 1, row: 0, line: {...tLine}},
            ]},
            // [2, 1, ['Matilda Jane Juniper', '', 'Trimble Twp, Athens, OH'], ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Matilda Jane Juniper'},
                {text: {...tBorn}, content: 'Trimble Twp, Athens, OH'},
            ], links: [
                {col: 1, row: 0, line: {...tLine}},
            ]},
            // [2, 2, ['IMMIGRANT 1886', '', 'Joseph John Robson', '', 'Monk Wearmouth, Durham'], durham],
            {...tRow2, shape: {...tRect, fill: ENdu}, lines: [
                {text: {...tText}, content: 'Joseph John Robson'},
                {text: {...tText}, content: 'Monk Wearmouth,'},
                {text: {...tText}, content: 'Durham'}
            ], links: [
                {col: 1, row: 1, line: {...tLine}},
            ]},
            // [2, 3, ['IMMIGRANT 1850', '', 'Elizabeth Gilbert', '', 'Walker, Northumberland'], northumberland],
            {...tRow2, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Elizabeth Gilbert'},
                {text: {...tBorn}, content: 'Walker, Northumberland'},
            ], links: [
                {col: 1, row: 1, line: {...tLine}},
            ]},
            // [2, 4, ['IMMIGRANT 1850', '', 'Arie de Reus', '', 'Oud-Beijerland,', 'Zuid-Holland'],  zuidholland],
            {...tRow2, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Arie de Reus'},
                {text: {...tBorn}, content: 'Oud-Beijerland,'},
                {text: {...tBorn}, content: 'Zuid-Holland'},
            ], links: [
                {col: 1, row: 2, line: {...tLine}},
            ]},
            // [2, 5, ['IMMIGRANT 1856', '', 'Grietje Margaret', 'Dykhaeza Bruggeman', '', 'Westmaas, Zuid-Holland'],  zuidholland],
            {...tRow2, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1856'},
                {text: {...tName}, content: 'Grietje Margaret'},
                {text: {...tName}, content: 'Dykhaeza Bruggeman'},
                {text: {...tBorn}, content: 'Westmaas, Zuid-Holland'},
            ], links: [
                {col: 1, row: 2, line: {...tLine}},
            ]},
            // [2, 6, ['Jehu C Poulson', '', 'Harrison, OH'],  ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Jehu C Poulson'},
                {text: {...tBorn}, content: 'Harrison, OH'},
            ], links: [
                {col: 1, row: 3, line: {...tLine}},
            ]},
            // [2, 7, ['Mahala Spray', '', 'Harrison, OH'],  ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Mahala Spray'},
                {text: {...tBorn}, content: 'Harrison, OH'},
            ], links: [
                {col: 1, row: 3, line: {...tLine}},
            ]},
        ]},
        // column 3 (4 of 4) has 16 rows
        {...tCol, rows: [
            // col 3, row 0
            {...tRow3, shape: {...tElli, rx: '0.3in', ry: '0.3in', fill: 'green'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 0, line: {...tLine}},
            ]},
            // col 3, row 1
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 0, line: {...tLine}},
            ]},
            // col 3, row 2
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 1, line: {...tLine}},
            ]},
            // col 3, row 3
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 1, line: {...tLine}},
            ]},
            // col 3, row 4
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 2, line: {...tLine}},
            ]},
            // col 3, row 5
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 2, line: {...tLine}},
            ]},
            // col 3, row 6
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 3, line: {...tLine}},
            ]},
            // col 3, row 7
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 3, line: {...tLine}},
            ]},
            // col 3, row 8
            {...tRow3, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Arij Pietersz de Reus'},
                {text: {...tBorn}, content: 'Oud-Beijerland, ZH'},
            ], links: [
                {col: 2, row: 4, line: {...tLine}},
            ]},
            // col 3, row 9
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 4, line: {...tLine}},
            ]},
            // col 3, row 10
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 5, line: {...tLine}},
            ]},
            // col 3 row 11
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 5, line: {...tLine}},
            ]},
            // col 3, row 12
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 6, line: {...tLine}},
            ]},
            // col 3, row 13
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 6, line: {...tLine}},
            ]},
            // col 3, row 14
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 7, line: {...tLine}},
            ]},
            // col 3, row 15
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tName}, content: ''},
                {text: {...tBorn}, content: ''},
            ], links: [
                {col: 2, row: 7, line: {...tLine}},
            ]},
        ]},
    ]
}
