export const usfc1880form = {
    sheet: {
        place: '',
        county: '',
        state: '',
        date: '',
        number: '',
        notes: []
    },
    // All booleans are initialized to false!
    line: {
        dwelling: '', // col 1
        family: '', // col 2
        name: '', // col 3
        color: 'W', // col 4
        sex: '', // col 5
        age: 0, // col 6
        birthMonth: '', // col 7
        rel: '',    // relationship to head, col 8
        single: false,  // 9
        married: false, // 10
        widowed: false, // 11
        marriedDuringYear: false,  // 12
        occ: '', // col 13
        umemployed: 0, // number of months, col 14
        sick: false,    // 15
        blind: false,   // 16
        deaf: false,    // 17
        idiotic: false, // 18
        insane: false,  // 19
        disabled: false,    // 20
        school: false,  // 21
        cannotRead: false,  // 22
        cannotWrite: false, // 23
        personBornin: '',   // 24
        fatherBornin: '',   // 25
        motherBornin: ''    // 26
    },
    columns: [
        'Dwelling houses, numbered in the order of visitation.',   // col 1
        'Families, numbered in the order of visitation.', // col2
        'The name of every person whose place of abode on the first day of June, 1880, was in this family.',
        'Color. -- White, W; Black, B; Mulatto, M; Chicano, C; Indian, I.',    // col 4
        'Sex. -- Males, M; Female, F.', // col 5
        'Age at last birthday prior to June 1, 1880. If under one year, give months in fractions, thus 3/12', // col 6
        'If born within the census year, give the month.',    // col 7
        'Relationship of each person to the had of this family - whether wife, son, daughter, servant, border, or other.', // col 8
        'Single',   //  Col 9
        'Married',// Col 10
        'Widowed \, Divorced D.',   // col 11
        'Married during Census year.', // col 12
        'Profession, Occupation, or Trade of each person, male or female.', // col 13
        'Number of months this person has been unemployed during the Census year', // col 14
        'Is the person [on the day of the Enumeration] sick or temrarily disabled, '
            + 'so as to be unable to attend to ordinary business or duties? '
            + 'If so, what is the sickness or disability?', // col 15
        'Blind',    // col 16
        'Deaf and Dumb',    // col 17
        'Idiotic',  // col 18
        'Insane',   // col 19
        'Maimed, Crippled, Bedridden, or Otherwise Disabled',   // col 20
        'Attended school within the Census year.', // col 21
        "Cannot read.", // col 22
        "Cannot write.", // col 23
        'Place of birth of this person, naming State or Territory of U.S.; or the Country, if of foreign birth', // col 24
        'Place of birth of the FATHER of this person, naming State or Territory of U.S.; or the Country, if of foreign birth', // col 25
        'Place of birth of the MOTHER of this person, naming State or Territory of U.S.; or the Country, if of foreign birth', // col 26
    ]
}
