import { toc as bevinsToc } from './bevins-lineage/toc.js'
import Websites from '$lib/content/Websites.svelte'

export const bookToc = {
    type: 'book',
    title: 'Our Ancestors through Time and Place',
    comp: null,
    items: [
        bevinsToc,
        {
            type: 'chapter', comp: null, breaks: 0, page: 0,   // start on anew page
            title: 'The Collins Lineage',
            items: []
        },{
            type: 'chapter', comp: null, breaks: 0,  page: 0,   // start on a new page
            title: 'The Heddens Lineage',
            items: []
        },{
            type: 'chapter', comp: Websites, breaks: 0,  page: 0,   // start on a new page
            title: 'Useful Web Sites',
            items: []
        }
    ]
}
