import BevinsBolt from './BevinsBolt.svelte'
import Usfc1850 from './Usfc1850.svelte'
import Usfc1860 from './Usfc1860.svelte'
import Usfc1870 from './Usfc1870.svelte'
import Usfc1880 from './Usfc1880.svelte'

export const toc = {
    type: 'section', comp: BevinsBolt,  page: 0,   // start with a new page
    title: 'The Immigrants William Longford Bevins and Mary Bolt',
    items: [{
        type: 'section', comp: Usfc1850, page: 1,    // starts on page 1 of parent
        title: '1850 US Federal Census',
        items: [{
            type: 'table', comp: null,  page: 1,    // starts on page 1 of parent
            title: 'Bevins-Bolt 1850 US Federal Census',
            items: [],
        }]
    }, {
        type: 'section', comp: Usfc1860,  page: 0,   // start with a new page
        title: '1860 US Federal Census',
        items: [{
            type: 'table', comp: null, page: 1,    // starts on page 1 of parent
            title: 'Bevins-Bolt 1860 US Federal Census',
            items: [],
        }]
    }, {
        type: 'section', comp: Usfc1870, page: 0,   // start with a new page
        title: '1870 US Federal Census',
        items: [{
            type: 'table', comp: null,  page: 1,    // starts on page 1 of parent
            title: 'Bevins-Bolt 1870 US Federal Census',
            items: [],
        }]
    }, {
        type: 'section', comp: Usfc1880, page: 0,   // start with a new page
        title: '1880 US Federal Census',
        items: [{
            type: 'table', comp: null,  page: 1,    // starts on page 1 of parent
            title: 'Bevins-Bolt 1880 US Federal Census',
            items: [],
        },{
            type: 'table', comp: null, page: 2,    // starts on page 2 of parent
            title: 'Bevins-White 1880 US Federal Census',
            items: [],
        }]
    }]
}