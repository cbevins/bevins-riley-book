/**
 * Manifest is used to construct a Book of Svelte components with a table of contents.
 * It contains a listing of Book {page}s and {item}s in their order of appearance,
 * as well as lists of all sections, figures, and tables.
 * 
 * Manifest.pages is an array of objects with the following properties:
 *  - pageno: the base 1 page number
 *  - header1: title of the most recent 'section' at depth 0
 *  - header2: title of the most recent 'section' at depth 1
 *  - items: an array of every {item} on the page
 * 
 * An {item} object has the following properties:
 *  - type: one of the following 4 types:
 *      - 'section' appends a section title onto the book using a standard Svelte component
 *      - 'content' appends the keyed Svelte component onto the book
 *      - 'figure' appends the keyed Svelte component onto the book and adds it to the figures list
 *      - 'table' appends the keyed Svelte component onto the book and adds it to the tables list
 *  - comp: component Map() key
 *  - depth: item sectional depth (used to control, e.g., section title sizes or indentation)
 *  - page: reference to the {page} containing this {item}
 *  - title: 'section', 'figure', or 'table' title or 'content' placeholder text
*/
export class Manifest {
    constructor(itemsArray) {
        this.contents = []  // array of all content {item}s in order of appearance
        this.figures = []   // array of all figure {item}s in order of appearance
        this.items = itemsArray
        this.pages = []     // array of page {items: [<item>,<item>...]} on that page
        this.sections = []  // array of all section {item}s in order of appearance
        this.tables = []    // array of all table {item}s in order of appearance
        this.header1 = ''   // current page header text
        this.header2 = ''   // current page header text
        for(let i=0; i<itemsArray.length; i++) {
            this._process(itemsArray[i])
        }
    }
        
    _process(item, depth=0) {
        item.depth = depth
        // if the item doesn't have an items array, add an empty one
        if (! item.items) item.items = []
        // if the item doesn't have a comp, add a standard one
        if (! item.comp) item.comp = item.type
        // if the item doesn't have a title, assign a blank title
        if (! item.title) item.title = ''
        // if the item doesn't have an id, assign a blank id
        if (! item.id) item.id = ''

        // If this item is a section, possibly update the page headers
        if (item.type === 'section') {
            if (depth === 0) {
                this.header1 = item.title
                this.header2 = ''
            } else if (depth === 1) {
                this.header2 = item.title
            }
        }

        // If item starts a new page, append a new pages entry
        if (item.newpage) {
            this.pages.push({
                pageno: this.pages.length + 1,
                header1: this.header1,
                header2: this.header2,
                items: []})
        }

        // Assign this {page} to the {item}
        item.page = this.pages[this.pages.length-1]

        // Add item to its relevant arrays
        if (item.type === 'figure') this.figures.push(item)
        else if (item.type === 'table') {
            this.tables.push(item)
            item.id = this.tables.length
        }
        else if (item.type === 'section') this.sections.push(item)
        else if (item.type === 'content') this.contents.push(item)
        else throw new Error(`Unknown Manifest item type '${item.type}' titled '${item.title}'`)

        // Add this item to the current page
        this.pages[this.pages.length-1].items.push(item)

        // ADd sub items
        if (item.items) {
            for(let i=0; i<item.items.length; i++) {
                this._process(item.items[i], depth+1)
            }
        }
    }
}