// Bevins-Bolt USFC Data
import { usfc1850form } from '$lib/census/usfc1850form.js'
import { usfc1860form } from '$lib/census/usfc1860form.js'
import { usfc1870form } from '$lib/census/usfc1870form.js'
import { usfc1880form } from '$lib/census/usfc1880form.js'

const name = 'William Longford Bevins - Mary Bolt'

const line1850 = usfc1850form.line
const f1850 = {...line1850, sex: 'f'}
const m1850 = {...line1850, sex: 'm'}

const line1860 = usfc1860form.line
const f1860 = {...line1860, sex: 'f'}
const m1860 = {...line1860, sex: 'm'}

const line1870 = usfc1870form.line
const f1870 = {...line1870, sex: 'f',
    foreignFather: true, foreignMother: true,
    cannotRead: true, cannotWrite: true}
const m1870 = {...f1870, sex: 'm'}

const line1880 = usfc1880form.line
const f1880 = {...line1880, sex: 'f'}
const m1880 = {...f1880, sex: 'm'}

export const usfc1850 = {
    sheet: {
        place: 'Townsend Township',
        county: 'Huron',
        state: 'Ohio',
        date: '21 Aug 1850',
        number: '394',
        notes: [],
    },
    family: {
        name: name,
        dwelling: '877',
        family: '896',
        value: '460',
    },
    lines: [
        {...m1850, name: 'William Bevans', age: 36, occ: 'Farmer', bornin: 'England', illit: true},
        {...f1850, name: 'Mary "', age: 30, bornin: 'England', illit: true},
        {...m1850, name: 'John "', age: 13, bornin: 'England', school: true},
        {...m1850, name: 'Joseph "', age: 11, bornin: 'England', school: true},
        {...m1850, name: 'William A "', age: 7, bornin: 'England', school: true},
        {...f1850, name: 'Sarah "', age: 5, bornin: 'N.J.', illit: true},
        {...f1850, name: 'Mary "', age: 1, bornin: 'Ohio', illit: true},
    ]
}

export const usfc1860 = {
    sheet: {
        place: 'Town of Annawan',
        county: 'Henry',
        state: 'Illinois',
        date: '20 Jul 1860',
        number: '787',
        notes: ['Marshall did not appear to ever mark anyone as illiterate.']
    },
    family: {
        name: name,
        dwelling: '1910',   // col 1
        family: '1826',     // col 2
        realEstate: '1600', // col 8
        personal: '500',    // col 9
    },
    lines: [
        {...m1860, name: 'Wm Bevins', age: 44, occ: 'Farmer', bornin: 'England'},
        {...f1860, name: 'Mary Bevins', age: 33, occ: 'Wife', bornin: 'England'},
        {...m1860, name: 'Jn Bevins', age: 21, occ: 'Farmer', bornin: 'England'},
        {...m1860, name: 'Joseph Bevins', age: 19, occ: 'Farmer', bornin: 'England'},
        {...m1860, name: 'Wm Bevins', age: 18, occ: 'Farmer', bornin: 'England'},
        {...f1860, name: 'Sarah Bevins', age: 15, bornin: 'N.J.', school: true},
        {...m1860, name: 'George Bevins', age: 7, bornin: 'Ohio', school: true},
        {...m1860, name: 'Saml Bevins', age: 5, bornin: 'Ohio', school: true},
        {...f1860, name: 'Julia Bevins', age: 3, bornin: 'Ills'},
        {...f1860, name: 'Rosette', age: '6/12', bornin: 'Ills'},
    ]
}

export const usfc1870 = {
    sheet: {
        place: 'Town of Annawan',
        county: 'Henry',
        state: 'Illinois',
        date: '22 Jul 1870',
        number: '5',
        notes: [],
    },
    family: {
        name: name,
        dwelling: '29',   // col 1
        family: '29',     // col 2
        realEstate: '5000', // col 8
        personal: '600',    // col 9
    },
    lines: [
        {...m1870, name: 'Bevins Wm', age: 55, occ: 'Farmer', bornin: 'England', male21: true},
        {...f1870, name: '-- Mary', age: 48, occ: 'Keeping House', bornin: 'England'},
        {...m1870, name: '-- Joseph', age: 28, occ: 'Domestic Sert', bornin: 'England', male21: true},
        {...m1870, name: '-- Wm A', age: 26, occ: 'Domestic Sert', bornin: 'England', male21: true},
        {...m1870, name: '-- George', age: 17, occ: 'Domestic Sert', bornin: 'Ohio' },
        {...m1870, name: '-- Saml', age: 15, occ: 'At Home', bornin: 'Ohio', school: true},
        {...f1870, name: '-- Julia', age: 12, occ: 'At Home', bornin: 'Ills', school: true},
        {...f1870, name: '-- Rosetta', age: 10, occ: 'At Home', bornin: 'Ills', school: true},
        {...f1870, name: '-- Phebe', age: 8, occ: 'At Home', bornin: 'Ills', school: true},
        {...f1870, name: '-- James', age: 5, occ: 'At Home', bornin: 'Ills'},
    ]
}

export const usfc1880 = {
    sheet: {
        place: 'Annawan Township',
        county: 'Henry',
        state: 'Illinois',
        date: '7, 8 Jul 1870',
        number: '15',
        notes: [],
    },
    family: {
        name: name,
        dwelling: '67',   // col 1
        family: '67',     // col 2
    },
    lines: [
        {...m1880, name: 'Bevins William', age: 65, rel: 'head', widowed: true, occ: 'Farmer',
            sick: true, personBornin: 'England', fatherBornin: 'England', motherBornin: 'England'},
        {...m1880, name: 'Samuel', age: 24, rel: 'son', single: true, occ: 'Farmer',
            sick: true, personBornin: 'Ohio', fatherBornin: 'England', motherBornin: 'England'},
        {...f1880, name: 'Julia', age: 22, rel: 'daughter', single: true, occ: '',
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
        {...m1880, name: 'James', age: 15, rel: 'son', single: true, occ: '', school: true,
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
    ]
}
