import { getManifest } from '$lib/book'
// import { getManifest } from '../../../lib/book/getManifest.js'

export const manifest =
{type: 'section', newpage: true, title: 'Chapter 2: Direct Ancestors of Samuel Bevins',
    items: [
    {type: 'content', comp: 'BevinsIntroduction'},
    {type: 'table', comp: 'BevinsImmigrantsTable',
        title: 'Immigrants of the Samuel Bevins Line'},
    {type: 'table', comp: 'BevinsOriginsTable',
        title: 'Origins of the Samuel Bevins Line'},
    
    {type: 'section', newpage: true,
        title: 'Generations in Newbold Verdon, Leicestershire, England', items: [
        {type: 'content', comp: 'BevinsOrigins'},
        {type: 'figure', comp: 'NewboldVerdonMap',
            title: 'Newbold Verdon and Environs'},
    ]},

    {type: 'section', newpage: true, title: 'The Bevins Surname', items: [
        {type: 'section', title: 'Is the "Bevins" Surname French or Welsh?', items: [
            {type: 'content', comp: 'BevinsSurnameOrigin' }
        ]},
        {type: 'section', newpage: true, title: '"Bevins" Surname Prevelance', items: [
            {type: 'content', comp: 'BevinsSurnamePrevalence' }
        ]},
    ]},

    {type: 'section', newpage: true,
        title: 'The Immigrants William Longford Bevins and Mary Bolt', items: [
            {type: 'section', title: 'Hard Times in Newbold Verdon', items: [
                {type: 'content', comp: 'BevinsBoltHardtimes' }
            ]},
            {type: 'section', title: 'Crossing the Atlantic', items: [
                {type: 'content', comp: 'BevinsBoltCrossingAtlantic' }
            ]},
            {type: 'section', title: 'The Bevins-Bolt Household Goes West', items: [
                {type: 'content', comp: 'BevinsBoltGoWest' }
            ]},
        ]},

    {type: 'section', newpage: true,
        title: 'The Immigrants Mary Ann (and Allace) White', items: [
            {type: 'section', title: 'Life in England', items: [
                {type: 'content', comp: 'MaryWhiteInEngland'}
            ]}
        ]},

    {type: 'section', newpage: true,
        title: 'Native American Family Connections', items: [
            {type: 'content', comp: 'BevinsNativeAmericanBranch'}
        ]},
    ]}

// Returns an array of objects with the following properties:
// <depth>, <'section'|'figure'|'table'>, <newpage>, <component>, <title>
export function bevinsManifest(startDepth=0) {
    const items = [
    [0, 'section', true, 'BevinsIntroduction', 'Direct Ancestors of Samuel Bevins'],
        [1, 'table', false, 'BevinsImmigrantsTable','Immigrants of the Bevins Line'],
        [1, 'table', false, 'BevinsOriginsTable', 'Origins of the Bevins Line'],
        [1, 'section', true, 'BevinsOrigins', 'Generations in Newbold Verdon, Leicestershire, England'],
            [2, 'figure', false, 'NewboldVerdonMap', 'Newbold Verdon and Environs'],
        [1, 'section', true, '', 'The Bevins Surname'],
            [2, 'section', false, 'BevinsSurnameOrigin', 'Is the "Bevins" Surname French or Welsh?'],
            [2, 'section', true, 'BevinsSurnamePrevalence', '"Bevins" Surname Prevelance'],
        [1, 'section', true, '', 'The Immigrants William Longford Bevins and Mary Bolt'],
            [2, 'section', false, 'BevinsBoltHardTimes', 'Hard Times in Newbold Verdon'],
            [2, 'section', false, 'BevinsBoltCrossingAtlantic', 'Crossing the Atlantic'],
            [2, 'section', false, 'BevinsBoltGoWest', 'The Bevins-Bolt Household Goes West'],
        [1, 'section', true, '', 'The Immigrants Mary Ann (and Allace) White'],
            [2, 'section', false, 'MaryWhiteInEngland', 'Life in England'],
        [1, 'section', true, 'BevinsNativeAmericanBranch', 'Native American Family Connections'],
    ]
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
    }
    return items
}
