// A manifest[] is an array defining the parts of a book.
// Each manifest element is itself an array of:
// [<depth>, <newpage>, <component>, <title>, <embeds>]
// and <embeds> is an array of items embedded in the section
// [<'callout'|'figure'|'map'|'table'>, <title>]
const surname = 'Bevins'
const manifest = [
    [1, true, 'Introduction', `The ${surname} Lineage`, [
        ['table', `Immigrants of the ${surname} Line`],
        ['table', `Origins of the ${surname} Line`]]],
    [2, true, 'Origins', 'Generations in Newbold Verdon, Leicestershire, England', [
        ['figure', 'Newbold Verdon and Environs']]],
    [2, true, `${surname}Surname`, `The ${surname} Surname`],
        [3, false, `${surname}SurnameEtymology`, `Is the "${surname}" Surname French or Welsh?`],
        [3, true, `${surname}SurnamePrevalence`, `"${surname}" Surname Prevalance`],
    [2, true, 'BevinsBolt', 'The Immigrants William Longford Bevins and Mary Bolt'],
        [3, false, 'BevinsBoltHardTimes', 'Hard Times in Newbold Verdon'],
        [3, false, 'BevinsBoltCrossingAtlantic', 'Crossing the Atlantic'],
        [3, false, 'BevinsBoltGoWest', 'The Bevins-Bolt Household Heads West'],
    [2, true, 'BevinsWhite', 'The Immigrants Mary Ann (and Allace) White'],
        [3, false, 'MaryWhiteInEngland', 'Life in England'],
        [3, true, 'BevinsNativeAmericanBranch', 'Native American Family Connections'],
    ]

export function bevinsManifest() {
    return manifest
}
