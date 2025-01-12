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
                {col: 0, row: 0, line: {...tPath}},
                {col: 0, row: 2, line: {...tPath}},
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
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 1
            {...tRow1, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1886'},
                {text: {...tName}, content: 'Caroline Carrie Robson'},
                {text: {...tBorn}, content: 'Heyworth, Durham'}
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 2
                {...tRow1, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Peter De Reus'},
                {text: {...tBorn}, content: 'Pella, Marion, IA'},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
            // col 1, row 3
            {...tRow1, shape: {...tRect, fill: USia}, lines: [
                {text: {...tName}, content: 'Helen Sophia'},
                {text: {...tName}, content: '"Ella" Poulson'},
                {text: {...tBorn}, content: 'Colfax, Jasper, IA'},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
        ]},
        // column 2 (3 of 4) has 8 rows
        {...tCol, rows: [
            // [2, 0, ['Henry Thomas Riley', '', 'Ohio'], ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Henry Thomas Riley'},
                {text: {...tBorn}, content: 'Ohio'},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // [2, 1, ['Matilda Jane Juniper', '', 'Trimble Twp, Athens, OH'], ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Matilda Jane Juniper'},
                {text: {...tBorn}, content: 'Trimble Twp, Athens, OH'},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // [2, 2, ['IMMIGRANT 1886', '', 'Joseph John Robson', '', 'Monk Wearmouth, Durham'], durham],
            {...tRow2, shape: {...tRect, fill: ENdu}, lines: [
                {text: {...tText}, content: 'Joseph John Robson'},
                {text: {...tText}, content: 'Monk Wearmouth,'},
                {text: {...tText}, content: 'Durham'}
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // [2, 3, ['IMMIGRANT 1850', '', 'Elizabeth Gilbert', '', 'Walker, Northumberland'], northumberland],
            {...tRow2, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Elizabeth Gilbert'},
                {text: {...tBorn}, content: 'Walker, Northumberland'},
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // [2, 4, ['IMMIGRANT 1850', '', 'Arie de Reus', '', 'Oud-Beijerland,', 'Zuid-Holland'],  zuidholland],
            {...tRow2, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Arie de Reus'},
                {text: {...tBorn}, content: 'Oud-Beijerland,'},
                {text: {...tBorn}, content: 'Zuid-Holland'},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // [2, 5, ['IMMIGRANT 1856', '', 'Grietje Margaret', 'Dykhaeza Bruggeman', '', 'Westmaas, Zuid-Holland'],  zuidholland],
            {...tRow2, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1856'},
                {text: {...tName}, content: 'Grietje Margaret'},
                {text: {...tName}, content: 'Dykhaeza Bruggeman'},
                {text: {...tBorn}, content: 'Westmaas, Zuid-Holland'},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // [2, 6, ['Jehu C Poulson', '', 'Harrison, OH'],  ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Jehu C Poulson'},
                {text: {...tBorn}, content: 'Harrison, OH'},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
            // [2, 7, ['Mahala Spray', '', 'Harrison, OH'],  ohio],
            {...tRow2, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Mahala Spray'},
                {text: {...tBorn}, content: 'Harrison, OH'},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
        ]}, // end of row, col
        // column 3 (4 of 4) has 16 rows
        {...tCol, rows: [
            // col 3, row 0
            // [3, 0, ['Harrison Riley', 'Warrentown, Fauquir, VA'], virginia ],
            {...tRow3, shape: {...tElli, rx: '0.3in', ry: '0.3in', fill: USva}, lines: [
                {text: {...tName}, content: 'Harrison Riley'},
                {text: {...tBorn}, content: 'Warrentown, Fauquir, VA'},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 1
            // [3, 1, ['Sarah Ann Settle', 'Fredericksburg,', 'Spotsylvania, VA'], virginia],
            {...tRow3, shape: {...tRect, fill: USva}, lines: [
                {text: {...tName}, content: 'Sarah Ann Settle'},
                {text: {...tBorn}, content: 'Fredericksburg,'},
                {text: {...tBorn}, content: 'Spotsylvania, VA'},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 2
            // [3, 2, ['George H Juniper', 'Maryland'], maryland ],
            {...tRow3, shape: {...tRect, fill: USmd}, lines: [
                {text: {...tName}, content: 'George H Juniper'},
                {text: {...tBorn}, content: 'Maryland'},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 3
            // [3, 3, ['Elizabeth Echart', 'Pennsylvania'], pennsylvania],
            {...tRow3, shape: {...tRect, fill: USpn}, lines: [
                {text: {...tName}, content: 'Elizabeth Echart'},
                {text: {...tBorn}, content: 'Pennsylvania'},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 4
            // [3, 4, ['John Robert Robson', 'Jarrow, Durham'], durham],
            {...tRow3, shape: {...tRect, fill: ENdu}, lines: [
                {text: {...tName}, content: 'John Robert Robson'},
                {text: {...tBorn}, content: 'Jarrow, Durham, EN'},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 5
            // [3, 5, ['Mary Ann Lowther', 'Murton, Northumberland'], northumberland],
            {...tRow3, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tName}, content: 'Mary Ann Lowther'},
                {text: {...tBorn}, content: 'Murton, Northumberland, EN'},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 6
            // [3, 6, ['Robert Gilbert', 'Northumberland'], northumberland],
            {...tRow3, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tName}, content: 'Robert Gilbert'},
                {text: {...tBorn}, content: 'Northumberland, ENG'},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 7
            // [3, 7, ['Mary Gilbert', 'Northumberland'], northumberland],
            {...tRow3, shape: {...tRect, fill: ENnu}, lines: [
                {text: {...tName}, content: 'Mary Gilbert'},
                {text: {...tBorn}, content: 'Northumberland, ENG'},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 8
            // [3, 8, ['IMMIGRANT 1850', 'Arij Pietersz de Reus', 'Oud-Beijerland, ZH'], zuidholland],
            {...tRow3, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Arij Pietersz de Reus'},
                {text: {...tBorn}, content: 'Oud-Beijerland, ZH'},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 9
            // [3, 9, ['IMMIGRANT 1850', 'Magcheltje Vander Kreek', 'Mijnsheerenland, ZH'], zuidholland],
            {...tRow3, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT 1850'},
                {text: {...tName}, content: 'Magcheltje Vander Kreek'},
                {text: {...tBorn}, content: 'Mijnsheerenland, ZH'},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 10
            // [3, 10, ['Arij Bruggeman', 'Mijnsheerenland, ZH'], zuidholland],
            {...tRow3, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tName}, content: 'Arij Bruggeman'},
                {text: {...tBorn}, content: 'Mijnsheerenland, ZH'},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3 row 11
            // [3, 11, ['Adriaantje W Kamp', 'Westmass, Zuid-Holland'], zuidholland],
            {...tRow3, shape: {...tRect, fill: NLzh}, lines: [
                {text: {...tName}, content: 'Adriaantje W Kamp'},
                {text: {...tBorn}, content: 'Westmass, Zuid-Holland'},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3, row 12
            // [3, 12, ['James Poulson', 'Frederick, Frederick, MD'], maryland],
            {...tRow3, shape: {...tRect, fill: USmd}, lines: [
                {text: {...tName}, content: 'James Poulson'},
                {text: {...tBorn}, content: 'Frederick, Frederick, MD'},
            ], links: [
                {col: 2, row: 6, line: {...tPath}},
            ]},
            // col 3, row 13
            // [3, 13, ['Elizabeth Arnold', 'Jefferson, Ashtabula, OH'], ohio],
            {...tRow3, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Elizabeth Arnold'},
                {text: {...tBorn}, content: 'Jefferson, Ashtabula, OH'},
            ], links: [
                {col: 2, row: 6, line: {...tPath}},
            ]},
            // col 3, row 14
            // [3, 14, ['John H Spray', 'Maryland'], maryland],
            {...tRow3, shape: {...tRect, fill: USmd}, lines: [
                {text: {...tName}, content: 'John H Spray'},
                {text: {...tBorn}, content: 'Maryland'},
            ], links: [
                {col: 2, row: 7, line: {...tPath}},
            ]},
            // col 3, row 15
            // [3, 15, ['Elizabeth Fowler', 'Harrison, OH'], ohio],
            {...tRow3, shape: {...tRect, fill: USoh}, lines: [
                {text: {...tName}, content: 'Elizabeth Fowler'},
                {text: {...tBorn}, content: 'Harrison, OH'},
            ], links: [
                {col: 2, row: 7, line: {...tPath}},
            ]},
        ]}, // end of row, col
    ] // cols
} // data
