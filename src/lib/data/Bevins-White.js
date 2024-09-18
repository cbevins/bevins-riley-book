import { usfc1880form } from '$lib/census/usfc1880form.js'

const name = 'William Alfred Bevins - Mary White'

const line1880 = usfc1880form.line
const f1880 = {...line1880, sex: 'f'}
const m1880 = {...f1880, sex: 'm'}

export const usfc1880 = {
    sheet: {
        place: 'Annawan Township',
        county: 'Henry',
        state: 'Illinois',
        date: '7, 8 Jul 1870',
        number: '15',
        notes: ['Daughter Allace is recorded as born in England; is she a step daughter?'],
    },
    family: {
        name: name,
        dwelling: '68',   // col 1
        family: '68',     // col 2
    },
    lines: [
        {...m1880, name: 'Bevins William', age: 36, rel: 'head', married: true, occ: 'Farmer',
            sick: true, personBornin: 'England', fatherBornin: 'England', motherBornin: 'England'},
        {...m1880, name: 'Mary', age: 33, rel: 'wife', married: true, occ: 'Keeping House',
            personBornin: 'England', fatherBornin: 'England', motherBornin: 'England'},
        {...m1880, name: 'Allace', age: 10, rel: 'wife', married: true, occ: 'Keeping House',
            cannotRead: true, cannotWrite: true,
            personBornin: 'England', fatherBornin: 'England', motherBornin: 'England'},
        {...m1880, name: 'Simon', age: 8, rel: 'son', single: true,
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
        {...f1880, name: 'Elisabeth', age: 4, rel: 'daughter', single: true,
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
        {...f1880, name: 'Nellie', age: 2, rel: 'daughter', single: true,
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
        {...f1880, name: 'Feebe', age: '1/12', rel: 'daughter', birthMonth: 'May', single: true,
            personBornin: 'Illinois', fatherBornin: 'England', motherBornin: 'England'},
    ]
}
