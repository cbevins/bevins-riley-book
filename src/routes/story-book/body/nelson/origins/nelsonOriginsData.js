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

const unused = 'lightgrey'
const NLzh = 'orangered'        // Netherlands, Zuid-Holland
// 'Northumbria' consist of 'Northumberland' and 'Durham' counties
const ENdu = 'darkgreen'        // England, Durham
const ENnu = 'forestgreen'      // England, Northumerland
const SWkr = 'gold'
const CAab = 'red'              // Alberta
const CAbc = 'red'              // British Columbia
const CAmb = 'red'              // Manitoba
const CAnb = 'red'              // New Brunswick
const CAnl = 'red'              // Newfoundland and Labrador
const CAns = 'red'              // Nova Scotia
const CAon = 'red'              // Ontario
const CApe = 'red'              // Prince Edward Island
const CAqc = 'red'              // Quebec
const CAsk = 'red'              // Saskatchewan

const Acadia = 'pink'           // 'Acadia'
// States
const USia = 'deepskyblue'
const USin = 'lightskyblue'
const USmd = 'steelblue'
const USme = 'lightblue'
const USmn = 'cornflowerblue'
const USoh = 'skyblue'
const USpn = 'royalblue'
const USny = 'deepskyblue'
const USri = 'powderblue'
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
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: USmn}, lines: [
                {text: {...tName}, content: 'Harold Trimbley'},
                {text: {...tBorn}, content: 'Minneapolis, Hennepin, MN'},
            ], links: [
            ]},
            // col 0, row 1
            {...tRow0, h: 0.2*chart.h, shape: {...tRect, fill: USmn}, lines: [
                {text: {...tName}, content: 'Dorothy May Trombley'},
                {text: {...tBorn}, content: 'Minneapolis, Hennepin, MN'},
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
                {col: 0, row: 2, line: {...tPath}},
            ]},
            // col 0, row 2
            {...tRow0, h: 0.4*chart.h, shape: {...tRect, fill: USmn}, lines: [
                {text: {...tName}, content: 'Myrtle Estelle Nelson'},
                {text: {...tBorn}, content: 'Minneapolis, Hennepin, MN'},
            ], links: [
            ]}
        ]},
        //---------------------------------------------------------------------
        // column 1 (2 of 4) has 4 rows
        {...tCol, rows: [
            // col 1, row 0
            {...tRow1, shape: {...tRect, fill: USri}, lines: [
                {text: {...tName}, content: 'George Thomas'},
                {text: {...tName}, content: 'Trombley'},
                {text: {...tBorn}, content: 'Bristol, RI'},
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 1
            {...tRow1, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Florence Cyr'},
                {text: {...tBorn}, content: 'Acadia, Nova Scotia'},
                {text: {...tBorn}, content: 'and New Brunswick, CAN'},
            ], links: [
                {col: 0, row: 0, line: {...tPath}},
            ]},
            // col 1, row 2
            {...tRow1, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Carl Johan Gottfred'},
                {text: {...tName}, content: 'Nelson'},
                {text: {...tBorn}, content: 'Strånganäs Västergård,'},
                {text: {...tBorn}, content: 'Älmeboda, Kronoberg, SWE'},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
            // col 1, row 3
            {...tRow1, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Hulda Sophia Peterson'},
                {text: {...tBorn}, content: 'Älmeboda, Kronoberg, SWE'},
            ], links: [
                {col: 0, row: 2, line: {...tPath}},
            ]},
        ]},
        //----------------------------------------------------------------------
        // column 2 (3 of 4) has 8 rows
        {...tCol, rows: [
            // col 2, row 0
            {...tRow2, shape: {...tRect, fill: USny}, lines: [
                {text: {...tName}, content: 'Eli Helier F Trombley'},
                {text: {...tBorn}, content: 'Clinton, Clinton, NY'},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // 2, 1
            {...tRow2, shape: {...tRect, fill: CAqc}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Marie Louise Dupuis'},
                {text: {...tBorn}, content: 'Quebec, CAN'},
            ], links: [
                {col: 1, row: 0, line: {...tPath}},
            ]},
            // col 2, col 2
            {...tRow2, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tName}, content: 'Joseph Eugene'},
                {text: {...tName}, content: 'Thomas Cyr'},
                {text: {...tBorn}, content: 'St Brunos Par., Van Buren,'},
                {text: {...tBorn}, content: 'Aroostook, ME'},
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // col 2, row 3
            {...tRow2, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tName}, content: 'Marguite Desjardins'},
                {text: {...tBorn}, content: 'Van Buren, Aroostook, ME'},
            ], links: [
                {col: 1, row: 1, line: {...tPath}},
            ]},
            // col 2, row 4
            {...tRow2, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Nils Peter Nicolausson'},
                {text: {...tBorn}, content: 'Bänkeboda,'},
                {text: {...tBorn}, content: 'Älmeboda, Kronoberg, SWE'},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // col 2, row 5
            {...tRow2, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Emma Carolina'},
                {text: {...tName}, content: 'Johannesdotter'},
                {text: {...tBorn}, content: 'Strånganäs Älmeboda,'},
                {text: {...tBorn}, content: 'Kronoberg, SWE'},
            ], links: [
                {col: 1, row: 2, line: {...tPath}},
            ]},
            // col 2, row 6
            {...tRow2, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Unknown'},
                {text: {...tBorn}, content: 'Presumed, SWE'},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
            // col, row 7
            {...tRow2, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Unknown'},
                {text: {...tBorn}, content: 'Presumed, SWE'},
            ], links: [
                {col: 1, row: 3, line: {...tPath}},
            ]},
        ]}, // end of row, col
        // column 3 (4 of 4) has 16 rows
        {...tCol, rows: [
            // col 3, row 0
            {...tRow3, shape: {...tRect, fill: CAqc}, lines: [
            // {...tRow3, shape: {...tElli, rx: '0.3in', ry: '0.3in', fill: unused}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Hilarie Elie'},
                {text: {...tName}, content: 'Theodore Trombley'},
                {text: {...tBorn}, content: 'Malbaie, Saguenay, Quebec'},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 1
            {...tRow3, shape: {...tRect, fill: CAqc}, lines: [
                {text: {...tImmi}, content: 'IMMIGRANT'},
                {text: {...tName}, content: 'Sophie Marie Berthiaume'},
                {text: {...tBorn}, content: 'St Martine, Chateaugay, QC'},
            ], links: [
                {col: 2, row: 0, line: {...tPath}},
            ]},
            // col 3, row 2
            {...tRow3, shape: {...tRect, fill: CAqc}, lines: [
                {text: {...tName}, content: 'Eustache (Elie) Dupuis'},
                {text: {...tBorn}, content: ' St Jacques l`Achigan, QC'},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 3
            {...tRow3, shape: {...tRect, fill: CAqc}, lines: [
                {text: {...tName}, content: 'Célina Délima Arno/Arnaud'},
                {text: {...tBorn}, content: 'St Ambroise-de-Kildare,'},
                {text: {...tBorn}, content: 'Joliette, QC'},
            ], links: [
                {col: 2, row: 1, line: {...tPath}},
            ]},
            // col 3, row 4
            {...tRow3, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tName}, content: 'Joseph Crock Cyr'},
                {text: {...tBorn}, content: 'Saint-Basile, Madawaska, NB'},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 5
            {...tRow3, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tName}, content: 'Angelique (Angele) Cote'},
                {text: {...tBorn}, content: 'St Brunos Par, Van Buren,'},
                {text: {...tBorn}, content: 'Aroostook, ME'},
            ], links: [
                {col: 2, row: 2, line: {...tPath}},
            ]},
            // col 3, row 6
            {...tRow3, shape: {...tRect, fill: CAqc}, lines: [
                {text: {...tName}, content: 'Joseph Amable Desjardins II'},
                {text: {...tBorn}, content: 'L`Isle-Verte, QC'},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 7
            {...tRow3, shape: {...tRect, fill: Acadia}, lines: [
                {text: {...tName}, content: 'Suzanne Violette'},
                {text: {...tBorn}, content: 'St Basile, Madawaska, NB'},
            ], links: [
                {col: 2, row: 3, line: {...tPath}},
            ]},
            // col 3, row 8
            {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Nicolaus Månsson Magnusson'},
                {text: {...tBorn}, content: 'Vieboda Södergård, Linneryd,'},
                {text: {...tBorn}, content: 'Kronoberg, SWE'},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 9
            {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Lisa Johannesdotter'},
                {text: {...tBorn}, content: 'Bänkeboda, Älmeboda,'},
                {text: {...tBorn}, content: 'Kronoberg, SWE'},
            ], links: [
                {col: 2, row: 4, line: {...tPath}},
            ]},
            // col 3, row 10
            {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Johannes Nilsson'},
                {text: {...tBorn}, content: 'Orebro, Kronoberg, SWE'},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3 row 11
            {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
                {text: {...tName}, content: 'Evalena Petersdotter'},
                {text: {...tBorn}, content: 'Orebro, Kronoberg, SWE'},
            ], links: [
                {col: 2, row: 5, line: {...tPath}},
            ]},
            // col 3, row 12
            // {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
            //     {text: {...tName}, content: 'Unknown'},
            //     {text: {...tBorn}, content: 'Presumed, SWE'},
            // ], links: [
            //     {col: 2, row: 6, line: {...tPath}},
            // ]},
            // col 3, row 13
            // {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
            //     {text: {...tName}, content: 'Unknown'},
            //     {text: {...tBorn}, content: 'Presumed, SWE'},
            // ], links: [
            //     {col: 2, row: 6, line: {...tPath}},
            // ]},
            // col 3, row 14
            // {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
            //     {text: {...tName}, content: 'Unknown'},
            //     {text: {...tBorn}, content: 'Presumed, SWE'},
            // ], links: [
            //     {col: 2, row: 7, line: {...tPath}},
            // ]},
            // col 3, row 15
            // {...tRow3, shape: {...tRect, fill: SWkr}, lines: [
            //     {text: {...tName}, content: 'Unknown'},
            //     {text: {...tBorn}, content: 'Presumed, SWE'},
            // ], links: [
            //     {col: 2, row: 7, line: {...tPath}},
            // ]},
        ]}, // end of row, col
    ] // cols
} // data
