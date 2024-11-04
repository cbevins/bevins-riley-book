import Intro from './Intro.svelte'
import ImmigrantsTable from './ImmigrantsTable.svelte'
import NewboldVerdon from './NewboldVerdon.svelte'

import { toc as bevinsboltToc } from './bevins-bolt/toc.js'

export const toc = {
    type: 'chapter', comp: Intro, page: 0,  // start on a new page
    title: 'The Bevins Lineage',
    items: [
    {
        type: 'section', comp: ImmigrantsTable,  page: 0,   // start on a new page
        title: 'Bevins Immigrants to the Unites States',
        items: [{
            type: 'table', comp: null, page: 0,   // start on a new page
            title: 'Bevins Immigrants to the United States',
            items: []
        }],
    },{
        type: 'section', comp: NewboldVerdon,  page: 0,   // start on a new page
        title: 'Newbold Verdon, Leicestershire',
        items: [{
            type: 'figure', comp: null,  page: 0,   // start on a new page
            title: 'Newbold Verdon Environs',
            items: []
        }]
    },
    bevinsboltToc
    ]
}