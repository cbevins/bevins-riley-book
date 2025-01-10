// Long form data set for gxmlLineageBlocks
import { gxmlLine, gxmlRect, gxmlSvg, gxmlText } from '$lib/gxml/gxmlTemplates.js'
const tLine = {...gxmlLine, stroke: 'black', 'stroke-width': 2}
const tRect = {...gxmlRect, rx: 6, ry: 6}
const tText = {...gxmlText, 'text-anchor': 'middle','dominant-baseline': 'middle'}

// all units are inches
const page = {h: 11, w: 8.5, l: 0.25, r: 0.25, t: 0.25, b: 0.25, lineHt: 1/6}
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

export const sampleData = {
    page: {...page},
    draw: {links: true, blocks: true, text: true},
    cols: [
        // // column 0 (1 of 4) has 2 rows
        {...tCol, rows: [
            // col 0, row 0
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 0, Row 0, Line 1'},
                {text: {...tText}, content: 'Col 0, Row 0, Line 2'},
                {text: {...tText}, content: 'Col 0, Row 0, Line 3'},
            ], links: [
            ]},
            // col 0, row 1
            {...tRow0, h: 0.2*chart.h, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 0, Row 1, Line 1'},
                {text: {...tText}, content: 'Col 0, Row 1, Line 2'},
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
                {col: 0, row: 2, line: {...tLine}},
            ]},
            // col 0, row 2
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 0, Row 2, Line 1'},
                {text: {...tText}, content: 'Col 0, Row 2, Line 2'},
            ], links: [
            ]}
        ]},
        // column 1 (2 of 4) has 4 rows
        {...tCol, rows: [
            // col 1, row 0
            {...tRow1, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 1, Row 0, Line 1'},
                {text: {...tText}, content: 'Col 1, Row 0, Line 2'},
                {text: {...tText}, content: 'Col 1, Row 0, Line 3'},
                {text: {...tText}, content: 'Col 1, Row 0, Line 4'},
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
            ]},
            // col 1, row2
            {...tRow1, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 1, Row 1, Line 1'}
            ], links: [
                {col: 0, row: 0, line: {...tLine}},
            ]},
            {...tRow1, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 1, Row 2, Line 1'}
            ], links: [
                {col: 0, row: 2, line: {...tLine}},
            ]},
            {...tRow1, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 1, Row 3, Line 1'}
            ], links: [
                {col: 0, row: 2, line: {...tLine}},
            ]},
        ]},
        // column 2 (3 of 4) has 8 rows
        {...tCol, rows: [
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 0, Line 1'}
            ], links: [
                {col: 1, row: 0, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 1, Line 1'}
            ], links: [
                {col: 1, row: 0, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 2, Line 1'}
            ], links: [
                {col: 1, row: 1, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 3, Line 1'}
            ], links: [
                {col: 1, row: 1, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 4, Line 1'}
            ], links: [
                {col: 1, row: 2, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 5, Line 1'}
            ], links: [
                {col: 1, row: 2, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 6, Line 1'}
            ], links: [
                {col: 1, row: 3, line: {...tLine}},
            ]},
            {...tRow2, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 2, Row 7, Line 1'}
            ], links: [
                {col: 1, row: 3, line: {...tLine}},
            ]},
        ]},
        // column 3 (4 of 4) has 16 rows
        {...tCol, rows: [
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 0, Line 1'}
            ], links: [
                {col: 2, row: 0, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 1, Line 1'}
            ], links: [
                {col: 2, row: 0, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 2, Line 1'}
            ], links: [
                {col: 2, row: 1, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 3, Line 1'}
            ], links: [
                {col: 2, row: 1, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 4, Line 1'}
            ], links: [
                {col: 2, row: 2, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 5, Line 1'}
            ], links: [
                {col: 2, row: 2, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 6, Line 1'}
            ], links: [
                {col: 2, row: 3, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 7, Line 1'}
            ], links: [
                {col: 2, row: 3, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 8, Line 1'}
            ], links: [
                {col: 2, row: 4, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 9, Line 1'}
            ], links: [
                {col: 2, row: 4, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 10, Line 1'}
            ], links: [
                {col: 2, row: 5, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 11, Line 1'}
            ], links: [
                {col: 2, row: 5, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 12, Line 1'}
            ], links: [
                {col: 2, row: 6, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 13, Line 1'}
            ], links: [
                {col: 2, row: 6, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 14, Line 1'}
            ], links: [
                {col: 2, row: 7, line: {...tLine}},
            ]},
            {...tRow3, shape: {...tRect, fill: 'grey'}, lines: [
                {text: {...tText}, content: 'Col 3, Row 15, Line 1'}
            ], links: [
                {col: 2, row: 7, line: {...tLine}},
            ]},
        ]},
    ]
}
