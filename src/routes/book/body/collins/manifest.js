// A manifest[] is an array defining the parts of a book.
// Each manifest element is itself an array of:
// [<depth>, <newpage>, <component>, <title>, <embeds>]
// and <embeds> is an array of items embedded in the section
// [<'callout'|'figure'|'map'|'table'>, <title>]
const surname = 'Collins'
const manifest = [
    [1, true, 'Introduction', `The ${surname} Family Lineage`, [
        ['table', `Immigrants of the ${surname} Family`],
        ['table', `Origins of the ${surname} Family`]]],
    [2, true, 'Origins', `Origins of the ${surname} Family Line`, [
        ['figure', `Map of ${surname} Origins`]]],
    [2, true, `${surname}Surname`, `The ${surname} Surname`],
    [3, false, `${surname}SurnameEtymology`, `"${surname}" Surname Etymology`],
    [3, true, `${surname}SurnamePrevalence`, `"${surname}" Surname Prevalance`],
]
    
export function collinsManifest() {
    return manifest
}
