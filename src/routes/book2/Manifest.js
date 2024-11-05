/*
    item.type: 'chapter', 'content', 'figure', 'newpage', 'section', 'table'
    item.comp: component Map() key for 'content', 'figure', and 'table' types
    item.id: chapter, section, figure, table, or newpage number; or content key
    item.title: chapter, section, figure, newpage, or table title; or content filler
    item.page: page on which this item first appears
*/
export class Manifest {
    constructor() {
        this._init()
    }
    _init() {
        this.pages = []
        this.figures = []
        this.sections = []
        this.tables = []
        this.stack = []    // current section stack, not a collection!
        this.pages.push({items: []})
    }
        
    // Adds an item to the current page
    addPageItem(item) {
        this.pages[this.pages.length-1].items.push(item)
    }

    // Adds some content and assigns it a page number
    addContent(comp, title) {
        const page = this.pages.length
        const item = {type: 'content', page, title, id: comp, comp}
        this.addPageItem(item)
    }

    // Adds chapter title and enters it into ToC and the current page's items list
    addChapterTitle() {
        const page = this.pages.length
        const {id, title} = this.stack[0]
        const item = {type: 'chapter', page, title, id, comp: ''}
        this.sections.push(item)
        this.addPageItem(item)
    }

    // Adds a figure and enters it in the Toc and the current page's items list
    addFigure(comp, title) {
        const page = this.pages.length
        const item = {type: 'figure', page, title, id: this.figures.length+1, comp}
        this.figures.push(item)
        this.addPageItem(item)
    }

    // Adds a page header with the current chapter, section, and page
    addPageHeader() {
        const page = this.pages.length
        const title = this.stack[0].title + ': ' + this.stack[1].title
        const item = {type: 'newpage', page, title, id: page}
        this.addPageItem(item)
    }

    // Adds section title and enters it into Toc and the current page's items list
    addSectionTitle() {
        const page = this.pages.length
        const {id, title} = this.stack[this.stack.length-1]
        const item = {type: 'section', page, title, id, comp: null}
        this.sections.push(item)
        this.addPageItem(item)
    }

    // Adds a table and enters it into the Toc and the current page's items list
    addTable(comp, title) {
        const page = this.pages.length
        const item = {type: 'table', page, title, id: this.tables.length+1, comp}
        this.tables.push(item)
        this.addPageItem(item)
    }

    // Starts a new page with its own items list
    newPage() { this.pages.push({items: []}) }

    // Begins a new section
    beginSection(id, title) { this.stack.push({id, title}) }

    // Ends the current section
    endSection() { return this.stack.pop() }
}
