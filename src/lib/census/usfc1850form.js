export const usfc1850form = {
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
        value: '',
        bornin: '',
        married: false,
        school: false,
        illit: false,
        deaf: '',
    },
    columns: [
        'Dwelling house numbered in the order of visitation',   // col 1
        'Families numbered in the order of visitation', // col2
        'The name of every person whose usual place of abode on the first day of June, 1850, was in this family.',
        'Age.', // col 4
        'Sex.', // col 5
        'Color. {White. black, or mulatto}',    // col 6
        'Profession, Occupation, or Trade of each Male Person over 15 years of age.', // col 7
        'Value of Real Estate owned.',  // col 8
        'Place of birth. Naming the State, Territory, or Country', // col 9
        'Married within the year.', // col 10
        'Attended school within the year.', // col 11
        "Person over 20 y'rs of age who cannot read and write.", // col 12
        "Whether deaf and dumb, blind, insane, idiotic, pauper, or convict." // col 13
    ]
}
