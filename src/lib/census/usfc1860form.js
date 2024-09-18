export const usfc1860form = {
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
        dwelling: '',
        family: '',
        name: '',
        age: 0,
        sex: '',
        color: '',
        occ: '',
        realEstate: '',
        personal: '',
        bornin: '',
        married: false,
        school: false,
        illit: false,
        deaf: ''
    },
    columns: [
        'Dwelling houses -- number in the order of visitation.',   // col 1
        'Families numbered in the order of visitation.', // col2
        'The name of every person whose usual place of abode on the first day of June, 1860, was in this family.',
        'Age.', // col 4
        'Sex.', // col 5
        'Color. {White, black, or mulatto.}',    // col 6
        'Profession, Occupation, or Trade of each person, male or female, over 15 years of age.',
        'Value of Real Estate.',  // col 8
        'Value of Personal Estate.',  // col 9
        'Place of birth. Naming the State, Territory, or Country', // col 10
        'Married within the year.', // col 11
        'Attended school within the year.', // col 12
        "Person over 20 y'rs of age who cannot read and write.", // col 13
        "Whether deaf and dumb, blind, insane, idiotic, pauper, or convict." // col 14
    ]
}
