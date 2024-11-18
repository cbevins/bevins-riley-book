/**
 * Manifest of items to be rendered by Publish
 * 
 * These are the Manifest item types and their properties
 *  page    type idx pidx page depth section path title recto verso
 *  content type idx pidx page depth section path title comp props
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
        this.callout = 0    // running callout number
        this.figure = 0     // running figure number
        this.chapter = 0    // running chapter (depth=1) section idx
        this.table = 0      // running table number

        // add a root section
        this.items = []
        this._addItem({
            depth: 0,  // section depth (base 0)
            path: folder,
            pidx: -1,   // parent section's idx into this.items[]
            section: '0',
            title: '',
            type: 'section',
        })
    }

    _addItem(item) {
        item.idx = this.items.length
        item.page = this.page
        this.items.push(item)
        // console.log(`Added <${item.type}> '${item.section}' to page ${item.page}`)
        return item
    }

    // Called by <Content> Svelte component script
    // Note that content depth must be the same as its section depth
    addContent(depth, folder, comp, props={}) {
        const pidx = this.contentSection(depth)
        const parent = this.items[pidx]
        return this._addItem({
            comp,
            depth,
            path: parent.path + this.pathSep + folder,
            pidx,       // parent index into this.items[] array
            props,
            section: parent ? parent.section : '0',
            title: parent ? parent.title : '',
            type: 'content',
        })
    }

    // Called by <Page> Svelte component script
    addPage(recto=false, verso=false) {
        this.page++
        const parent = this.items[this.chapter]
        const item = {
            depth: 0,
            path: [this.folder, 'page', this.page].join(this.pathSep),
            pidx: this.chapter, // MAY BE UPDATED if next item is 'section'
            recto,
            section: parent ? parent.section : '0', // MAY BE UPDATED
            title: parent ? parent.title : '',      // MAY BE UPDATED
            type: 'page',
            verso
        }
        this._addItem(item)
        
        // add page if neccesary to start on requested recto or verso
        const side = this.page%2 ? 'recto' : 'verso'
        if ((recto && side === 'verso') || verso && side === 'recto') {
            this.page++
            const next = {...item}
            next.path = [this.folder, 'page', this.page].join(this.pathSep)
            this._addItem(next)
            return next
        }
        return item
    }

    // Called by <Section> Svelte component script
    addSection(depth, folder, title) {
        const pidx = this.sectionParentIdx(depth)
        const parent = this.items[pidx]
        const seq = this.sectionSeq(depth)  // sibling number (base 1)
        const section = (pidx===0) ? `${seq}`
            : `${parent.section}${this.sectSep}${seq}`
        
        // If depth is 1, update the running chapter index
        if (depth === 1) this.chapter = this.items.length

        // If the previous item is a Page, make this section the Page parent
        const prev = this.items[this.items.length-1]
        if (prev.type === 'page' && depth === 1) {
            prev.pidx = this.items.length
            prev.section = section
            prev.title = title
        }

        return this._addItem({
            depth,  // section depth (base 0)
            path: parent.path + this.pathSep + folder,
            pidx,   // parent section's idx into this.items[]
            section,
            title,
            type: 'section',
        })
    }

    // Returns idx of the most recent 'section' at same depth
    // Used to find Content item parent, so depth of content
    // must be the same as its parent 'section' depth
    contentSection(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.type === 'section') {
                if (item.depth === depth)
                    return pidx
            }
        }
        throw new Error(`contentSection(${depth}) not found.`)
    }

    pageId(item) { return [this.folder, 'page', item.page].join(this.sectSep) }

    parent(item) { 
        if (item.pidx < 0) return null
        return this.items[item.pidx]
    }

    // Returns a section number like '1.2.3.4'
    sectionNumber(item, sep='.') {
        const parts = item.section.split(this.sectSep)
        return parts.join(sep)
    }

    // Returns a unique 'href' 'id' like 'body-section1-2-3-4'
    sectionId(item) {
        const parts = item.section.split(this.sectSep)
        return [this.folder, 'section'].concat(parts).join(this.sectSep)
    }

    // Returns idx of the most recent 'section' at depth-1
    sectionParentIdx(depth) {
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
    sectionSeq(depth) {
        let seq = 1
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.type === 'section') {
                if (item.depth === depth) seq++
                else if (item.depth === depth-1) return seq
            }
        }
        throw new Error(`sectionSeq(${depth}) not found.`)
    }
}