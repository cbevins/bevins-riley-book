export const usfc1870form = {
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
        foreignFather: false,
        foreignMother: false,
        birthMonth: '',
        marriageMonth: '',
        school: false,
        cannotRead: false,
        cannotWrite: false,
        deaf: '',
        male21: false,
        deniedVote: false
    },
    columns: [
        'Dwelling houses, numbered in the order of visitation.',   // col 1
        'Families, numbered in the order of visitation.', // col2
        'The name of every person whose place of abode on the first day of June, 1870, was in this family.',
        'Age at last birth-day. If under one year, give months in fractions, thus 3/12', // col 4
        'Sex. -- Males (M), Females (F)', // col 5
        'Color. -- White (W), Black (B.), Mulatto (M), Chic. (C.), Indian (I)',    // col 6
        'Profession, Occupation, or Trade of each person, male or female.',
        'Value of Real Estate.',  // col 8
        'Value of Personal Estate.',  // col 9
        'Place of birth, naming State or Territory of U.S.; or the Country, if of foreign birth', // col 10
        'Parentage. Father of foreign birth', // col 11
        'Parentage. Mother of foreign birth', // col 12
        'If born within the year, state month (Jan., Feb., etc)',    // col 13
        'If married within the year, state month (Jan., Feb., etc)',    // col 14
        'Attended school within the year.', // col 15
        "Cannot read.", // col 16
        "Cannot write.", // col 17
        "Whether deaf and dumb, blind, insane, or idiotic.", // col 18
        "Male Citizen of the U.S. of 21 years of age and upwards.", // col 19
        "Male Citizen of the U.S. of 21 years of age and upwards.\,"
        + "whose right to vote is denied or abridged on other grounds than"
        + "rebellion or other crime.", // col 20
    ]
}
