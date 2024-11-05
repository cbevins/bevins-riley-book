export class Manifest {
    constructor() {
        this._init()
    }
    _init() {
        this.pages = []
        this.figures = []
        this.sections = []
        this.tables = []
        this.lines = []
        this.stack = []    // current section stack, not a collection!
        this.pages.push({items: []})
    }
        
    // Adds an item to the current page
    addPageItem(item) {
        this.pages[this.pages.length-1].items.push(item)
    }

    // Adds some content and assigns it a page number
    addContent(comp, title) {
        // Process
        const page = this.pages.length
        const item = {type: 'component', page, title, id: comp }
        this.addPageItem(item)
        // Render
        for(let i=0; i<6; i++)
            this.lines.push(`${title} line ${i+1}`)
    }

    // Adds chapter title and enters it into ToC and the current page's items list
    addChapterTitle() {
        // Process
        const page = this.pages.length
        const {id, title} = this.stack[0]
        const item = {type: 'chapter', page, title, id}
        this.sections.push(item)
        this.addPageItem(item)
        // Render
        this.lines.push(`Chapter ${id}: ${title}`)
        this.lines.push('<br>')
    }

    // Adds a figure and enters it in the Toc and the current page's items list
    addFigure(title) {
        // Process
        const page = this.pages.length
        const item = {type: 'figure', page, title, id: this.figures.length+1}
        this.figures.push(item)
        this.addPageItem(item)
        // Render
        this.lines.push('<br>')
        this.lines.push(`Figure ${item.id}: ${item.title}`)
        for(let i=0; i<6; i++)
            this.lines.push('|' + ' '.padEnd(60, ';') + '|')
        this.lines.push('-'.padEnd(40, '-'))
    }

    // Adds a page header with the current chapter, section, and page
    addPageHeader() {
        // Process
        const page = this.pages.length
        const title = this.stack[0].title + ': ' + this.stack[1].title
        const item = {type: 'newpage', page, title, id: page}
        this.addPageItem(item)
        // Render
        this.lines.push('<br>')
        const dashes = '-'.padEnd(60, '-')
        this.lines.push(dashes)
        const line = title.padEnd(52, '.') + 'Page ' + page
        this.lines.push(line)
        this.lines.push(dashes)
    }

    // Adds section title and enters it into Toc and the current page's items list
    addSectionTitle() {
        // Process
        const page = this.pages.length
        const {id, title} = this.stack[this.stack.length-1]
        const item = {type: 'section', page, title, id}
        this.sections.push(item)
        this.addPageItem(item)
        // Render
        this.lines.push(`${id}: ${title}`)
        this.lines.push('<br>')
    }

    // Adds a table and enters it in the Toc and the current page's items list
    addTable(title) {
        // Process
        const page = this.pages.length
        const item = {type: 'table', page, title, id: this.tables.length+1}
        this.tables.push(item)
        this.addPageItem(item)
        // Render
        this.lines.push('<br>')
        this.lines.push(`Table ${this.tables.length}: ${title}`)
        this.lines.push('-'.padEnd(30, '-'))
        for(let i=0; i<6; i++)
            this.lines.push(`| Row ${i+1} |  Col1  | Col 2  | Col 3|`)
        this.lines.push('-'.padEnd(30, '-'))
    }

    // Starts a new page with its own items list
    newPage() {
        this.pages.push({items: []})
    }

    // Begins a new section
    beginSection(id, title) {
        this.stack.push({id, title})
    }

    // Ends the current section
    endSection() {
        return this.stack.pop()
    }
}
