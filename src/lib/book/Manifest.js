/**
 * Manifest contains a listing of book {item}s in their order of appearance,
 * as well as lists of callouts, figures, and tables.
 * Manifest is used to construct a book of Svelte components
 * with a table of contents.
 * 
 * The Manifest.pages array has an entry for each page.  The entry includes
 * an array of every {item} on that page.
 * 
 * There are 6 types of {item}s:
 *  - 'pageheader' appends a page margin and header using a standard SVelte component
 *  - 'chapter' appends a chapter title onto the book using a standard Svelte component
 *  - 'section' appends a section title onto the book using a standard Svelte component
 *  - 'content' appends the keyed Svelte component onto the book
 *  - 'figure' appends the keyed Svelte component onto the book and adds it to the figures list
 *  - 'table' appends the keyed Svelte component onto the book and adds it to the tables list
 * 
 * The Manifest is assembled using the following methods:
 *
 * - addChapterTitle(compKey='')
 *      Appends the first (bottom-level) section title to the book's current page
 *      and to the Manifest.sections array and ToC.  Uses a standard component or 'compKey'.
 * 
 * - addSectionTitle(title)
 *      Appends the most recent (top-level) section title to the book's current page
 *      and to the Manifest.sections array and ToC.  Uses a standard component or 'compKey'.
 * 
 * - addContent(comp, title)
 *      Appends the 'compKey' Svelte component to the current page.
 * 
 * - addFigure(comp, title)
 *      Appends the 'compKey' Svelte component to the current page
 *      and to the Manifest.figures array.
 * 
 * - addPageHeader(compKey='') {
 *      Appends a page margin header to the book's current page
 *      with the current chapter-section and page number.
 * 
 * - addTable(comp, title)
 *      Appends the 'compKey' Svelte component to the current page
 *      and to the Manifest.tables array.
 * 
 * - beginSection(num, title)
 *      Pushes a new section onto the stack.
 * 
 * - endSection(num)
 *      Pops a section from the stack. 'num' is informative only, and is unused.
 * 
 * - newPage() Increments the page counter
 *
 * {item}
 *  - type: 'chapter', 'content', 'figure', 'newpage', 'section', 'table'
 *  - comp: component Map() key for 'content', 'figure', and 'table' types
 *  - depth: item stack level (used, e.g.,  to control section title sizes)
 *  - id: 'chapter', 'section', 'figure', 'table', or 'newpage' number
 *          or 'content' component key
 *  - page: page number on which this item first appears
 *  - title: 'chapter', 'section', 'figure', 'newpage', or 'table' title,
 *          or 'content' placeholder text
*/
export class Manifest {
    constructor() {
        this.pages = []     // array of {items: []}
        this.figures = []
        this.sections = []
        this.tables = []
        this.stack = []    // current section stack, not a collection!
    }
        
    // Appends an item onto the current page
    _addPageItem(item) {
        this.pages[this.pages.length-1].items.push(item)
        return this
    }

    // Appends the first (bottom-level) section title to the book's current page
    // and to the Manifest.sections array
    addChapterTitle(compKey='') {
        const {id, title} = this.stack[0]
        const item = {
            type: 'chapter',
            page: this.pages.length,
            depth: 0,
            id: id,
            title: title,
            comp: compKey}
        this.sections.push(item)
        return this._addPageItem(item)
    }

    // Appends the 'compKey' Svelte component to the book's current page
    addContent(compKey, title) {
        const item = {
            type: 'content',
            page: this.pages.length,
            depth: this.stack.length,
            id: compKey,
            comp: compKey,
            title: title
        }
        return this._addPageItem(item)
    }

    // Appends the 'compKey' Svelte component to the book's current page
    // and appends it to the Manifest.figures array
    addFigure(compKey, title) {
        const item = {
            type: 'figure',
            page: this.pages.length,
            depth: this.stack.length,
            id: this.figures.length + 1,
            title: title,
            comp: compKey}
        this.figures.push(item)
        return this._addPageItem(item)
    }

    // Appends a page header to the book's current page
    // with the current chapter-section and page number
    addPageHeader(compKey='') {
        const title = this.stack[0].title + ': ' + this.stack[1].title
        const item = {
            type: 'pageheader',
            page: this.pages.length,
            depth: this.stack.length,
            id: 'Page ' + this.pages.length,
            title,
            comp: compKey}
        return this._addPageItem(item)
    }

    // Appends the most recent (bottom-level) section title to the book's current page
    // and to the Manifest.sections array
    addSectionTitle(compKey='') {
        const {id, title} = this.stack[this.stack.length-1]
        const item = {
            type: 'section',
            page: this.pages.length,
            depth: this.stack.length,
            id,
            title,
            comp: compKey}
        this.sections.push(item)
        return this._addPageItem(item)
    }

    // Adds a table and enters it into the Toc and the current page's items list
    addTable(comp, title) {
        const page = this.pages.length
        const item = {type: 'table', page, title, id: this.tables.length+1, comp}
        this.tables.push(item)
        return this._addPageItem(item)
    }

    // Begins a new section
    beginSection(id, title) {
        this.stack.push({id, title})
        return this
    }

    // Ends the current section
    endSection() {
        this.stack.pop()
        return this
    }

    // Starts a new page with its own items list
    newPage() {
        this.pages.push({items: []})
        return this
    }
}
