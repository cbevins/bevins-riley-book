import Intro from './Intro.svelte'
import ImmigrantsTable from './ImmigrantsTable.svelte'
import NewboldVerdon from './NewboldVerdon.svelte'

import { toc as bevinsboltToc } from './bevins-bolt/toc.js'

export const toc = {
    type: 'chapter', comp: Intro, page: 0,  // start on a new page
    title: 'The Bevins Lineage',
    items: [
    {
        type: 'section', comp: ImmigrantsTable, breaks: 0,  page: 0,   // start on a new page
        title: 'Bevins Immigrants to the Unites States',
        items: [{
            type: 'table', comp: null, breaks: 0, page: 0,   // start on a new page
            title: 'Bevins Immigrants to the United States',
            items: []
        }],
    },{
        type: 'section', comp: NewboldVerdon, breaks: 0,  page: 0,   // start on a new page
        title: 'Newbold Verdon, Leicestershire',
        items: [{
            type: 'figure', comp: null, breaks: 0,  page: 0,   // start on a new page
            title: 'Newbold Verdon Environs',
            items: []
        }]
    },{
        type: 'newpage', comp: NewboldVerdon, breaks: 0,  page: 0,   // start on a new page
        title: null,
        items: []
    },
    bevinsboltToc
    ]
}