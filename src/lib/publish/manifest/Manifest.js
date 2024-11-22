/**
 * Manifest of items to be rendered by Publish
 * 
 * These are the Manifest item types and their properties
 *  page    type idx pidx page depth section path title recto verso
 *  content type idx pidx page depth section path title comp props features
 *  section type idx pidx page depth section path title
 */
export class Manifest {
    // Creates an Manifest initialized with just a root section
    constructor(folder, doubleSided=true) {
        this.folder = folder// root folder for this Manifest
        this.doubleSided = doubleSided  // enables Page recto/verso
        this.sectSep = '-'  // separator between section segments
        this.pathSep = '/'  // separator between path segments
        
        // Running state variables
        this.page = 0       // running page number
        this.chapter = 0    // running chapter (depth=1) section idx

        // items and features
        this.items = []     // array of 'page', 'section', and 'content' items
        this.contents = []  // array of references to all 'content' items
        this.figures = []   // array of references to all 'Figure' items
        this.maps = []      // array of references to all 'Map' items
        this.sidebars = []  // array of references to all 'Sidebar' items
        this.tables = []    // array of references to all 'Table' items

        // add a root section
        this._addItem({
            depth: 0,       // section depth (base 0)
            path: folder,   // full path name, like 'body'
            pidx: -1,       // parent section's idx into this.items[]
            section: '0',
            title: '',
            type: 'section',
        })
    }

    // Called by addContent(), addFigure(), addMap(), or addTable()
    // Note that content depth must be the same as its section depth
    _addComponent(type, depth, folder, toc, comp, props={}) {
        const pidx = this._contentSection(depth)
        const parent = this.items[pidx]
        const path = parent.path + this.pathSep + folder
        const section = parent ? parent.section : '0'
        const title = parent ? parent.title : ''
        return this._addItem({
            comp,       // reference to Svelte component to display this content
            depth,      // depth must be same as the parent section
            id: '',     // HTML element id assigned by calling function
            path,       // full path of this item (including 'folder')
            pidx,       // parent section's index into this.items[] array
            props,      // optional Svelte component props
            section,    // parent section's number (e.g., '1.2.3.4')
            seq: 0,     // assigned by the calling function
            title,      // parent section's title
            toc,        // table of contents entry text
            type        // 'content', 'Figure', 'Map', or 'Table'
        })
    }

    // Called by addContent(), addPage(), and addSection()
    // Updates the item's 'idx' and 'page' properties, and pushes it onto this.items[]
    _addItem(item) {
        item.idx = this.items.length
        item.page = this.page
        this.items.push(item)
        // console.log(`Added <${item.type}> '${item.section}' to page ${item.page}`)
        return item
    }

    // Fashions an HTML element id for content
    _contentId(item) {
        const parts = item.section.split(this.sectSep)
        return [this.folder, 'section']
            .concat(parts, [item.type, item.seq]).join(this.sectSep)
    }

    // Returns idx of the most recent 'section' at same depth
    // Used to find Content item parent, so depth of content
    // must be the same as its parent 'section' depth
    _contentSection(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.type === 'section') {
                if (item.depth === depth)
                    return pidx
            }
        }
        throw new Error(`_contentSection(${depth}) not found.`)
    }

    // Returns idx of the most recent 'section' at depth-1
    _sectionParentId(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            // console.log(pidx, item, item.isSection())
            if(item.type === 'section' && item.depth === depth-1)  {
                return pidx
            }
        }
        return -1
    }

    // Returns 1 plus the number of previous 'section's at this depth
    _sectionSeq(depth) {
        let seq = 1
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.type === 'section') {
                if (item.depth === depth) seq++
                else if (item.depth === depth-1) return seq
            }
        }
        throw new Error(`_sectionSeq(${depth}) not found.`)
    }

    // Called by Manifest <Content> Svelte component script
    // Has no ToC entry
    // Note that content depth must be the same as its section depth
    addContent(depth, folder, comp, props={}) {
        const item = this._addComponent('content', depth, folder, null, comp, props)
        item.seq = this.contents.length + 1
        item.id = this._contentId(item)
        this.contents.push(item)
        return item
    }

    // Called by Manifest <Figure> Svelte component script
    // Same as <Content> but with a ToC entry
    // Note that content depth must be the same as its section depth
    addFigure(depth, folder, toc, comp, props={}) {
        const item = this._addComponent('Figure', depth, folder, toc, comp, props)
        item.seq = this.figures.length + 1
        item.id = this._contentId(item)
        this.figures.push(item)
        return item
    }

    // Called by Manifest <Map> Svelte component script
    // Same as <Content> but with a ToC entry
    // Note that content depth must be the same as its section depth
    addMap(depth, folder, toc, comp, props={}) {
        const item = this._addComponent('Map', depth, folder, toc, comp, props)
        item.seq = this.maps.length + 1
        item.id = this._contentId(item)
        this.maps.push(item)
        return item
    }

    // Called by Manifest <Page> Svelte component script
    addPage(recto=false, verso=false) {
        this.page++
        const parent = this.items[this.chapter]
        const path = [this.folder, 'page', this.page].join(this.pathSep)
        const id = [this.folder, 'page', this.page].join(this.sectSep)
        // the page 'pidx', 'section', and 'title' props will be updated
        // if the very next Manifest item is a 'section'
        const pidx = this.chapter
        const section = parent ? parent.section : '0'
        const title = parent ? parent.title : ''
        const item = {
            comp: null, // Publish will assign the requested Svelte component
            depth: 0,   // all pages have depth of zero
            id,         // HTML element id
            path,       // full path of this item (e.g., 'body/page/1')
            pidx,       // parent section's index into this.items[] array
            props: {},  // unused
            recto,      // TRUE if page must appear on recto
            section,    // parent section's number (e.g., '1.2.3.4') - MAY BE UPDATED
            title,      // parent section's title - MAY BE UPDATED
            type: 'page',
            verso       // TRUE if page must appear on verso
        }
        this._addItem(item)
        
        // if neccesary, add a page to start on the requested 'recto' or 'verso'
        const side = this.page%2 ? 'recto' : 'verso'
        if ((recto && side === 'verso') || verso && side === 'recto') {
            this.page++
            const next = {...item}
            next.id = [this.folder, 'page', this.page].join(this.sectSep)
            next.path = [this.folder, 'page', this.page].join(this.pathSep)
            this._addItem(next)
            return next
        }
        return item
    }

    // Called by Manifest <Section> Svelte component script
    addSection(depth, folder, title) {
        const pidx = this._sectionParentId(depth)
        const parent = this.items[pidx]
        const path = parent.path + this.pathSep + folder
        const seq = this._sectionSeq(depth)  // sibling number (base 1)
        const section = (pidx===0) ? `${seq}`
            : `${parent.section}${this.sectSep}${seq}`

        // fashion an HTML element id
        const parts = section.split(this.sectSep)
        const id = [this.folder, 'section'].concat(parts).join(this.sectSep)
        const toc = parts.join('.') + ' ' + title

        // If depth is 1, update the running chapter index
        if (depth === 1) this.chapter = this.items.length

        // If the previous item is a Page, make this section its parent
        const prev = this.items[this.items.length-1]
        if (prev.type === 'page' && depth === 1) {
            prev.pidx = this.items.length
            prev.section = section
            prev.title = title
        }

        return this._addItem({
            comp: null, // Publish will assign the requested Svelte component
            depth,      // this section depth (base 0)
            id,         // HTML element id
            path,       // full path of this item (including 'folder')
            pidx,       // parent section's index into this.items[] array
            props: {},  // optional Svelte component props
            section,    // this section number (e.g., '1.2.3.4')
            title,      // this section title
            toc,        // ToC entry text (default suggestion)
            type: 'section',
        })
    }

    // Called by Manifest <Sidebar> Svelte component script
    // Same as <Content> but with a ToC entry
    // Note that content depth must be the same as its section depth
    addSidebar(depth, folder, toc, comp, props={}) {
        const item = this._addComponent('Sidebar', depth, folder, toc, comp, props)
        item.seq = this.sidebars.length + 1
        item.id = this._contentId(item)
        this.sidebars.push(item)
        return item
    }

    // Called by Manifest <Table> Svelte component script
    // Same as <Content> but with a ToC entry
    // Note that content depth must be the same as its section depth
    addTable(depth, folder, toc, comp, props={}) {
        const item = this._addComponent('Table', depth, folder, toc, comp, props)
        item.seq = this.tables.length + 1
        item.id = this._contentId(item)
        this.tables.push(item)
        return item
    }

    parent(item) { 
        if (item.pidx < 0) return null
        return this.items[item.pidx]
    }

    // Returns an HTML id given the pageno
    pageId(pageno) { return [this.folder, 'page', pageno].join(this.sectSep) }

    // Returns a unique 'href' 'id' like 'body-section-1-2-3-4'
    sectionId(item) {
        const parts = item.section.split(this.sectSep)
        return [this.folder, 'section'].concat(parts).join(this.sectSep)
    }

    // Returns a section number like '1.2.3.4'
    sectionNumber(item, sep='.') {
        const parts = item.section.split(this.sectSep)
        return parts.join(sep)
    }
}