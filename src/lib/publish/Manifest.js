// Doen't calculate anything; simply creates the object with full properties
class ManifestItem {
    constructor(type, idx, href, page) {
        this.type = type    // 'page', 'contebnt', 'section', 'figure', 'table'
        this.idx = idx      // this item's index to into the Manifest.items[] array
        this.href = href    // unique element 'id' and 'href' string
        this.page = page    // page number
    }
    isContent() {return false}
    isFigure() {return false}
    isPage() {return false}
    isSection() {return false}
    isTable() {return false}
}
// Doen't calculate anything; simply creates the object with full properties
class ManifestContent extends ManifestItem {
    constructor(idx, href, page, pidx, depth, folder, path, comp) {
        super('content', idx, href, page)
        this.comp = comp        // Svelte component reference
        this.depth = depth      // section descent depth (base 0)
        this.path = path        // full lineage of parental folders including folder
        this.pidx = pidx        // parent section index into Manifest.items[] array
        this.folder = folder    // string tag for debug purposes (e.g., 'origins')
    }
    isContent() {return true}
}
// Doen't calculate anything; simply creates the object with full properties
class ManifestPage extends ManifestItem {
    constructor(idx, href, page, recto, verso) {
        super('page', idx, href, page)
        this.depth = page
        this.recto = recto
        this.verso = verso
    }
    isPage() {return true}
}
// Doen't calculate anything; simply creates the object with full properties
class ManifestSection extends ManifestItem {
    constructor(idx, href, page, pidx, depth, folder, path, seq, title) {
        super('section', idx, href, page)
        this.depth = depth      // section descent depth (base 0)
        this.pidx = pidx        // parent section index into Manifest.items[] array
        this.folder = folder    // last segment of item's full path
        this.path = path        // full lineage of parental folders including folder
        this.seq = seq          // item's sequence number under its parent section (base 1)
        this.title = title      // title to appear before section and in ToC
    }
    isSection() {return true}
}
/**
 * Creates an Manifest initialized with just a root section
 */
export class Manifest {
    constructor(href, doubleSided=true) {
        this.href = href
        this.doubleSided = doubleSided  // affects Page recto/verso
        this.hrefSep = '-'  // separator between href segments
        this.pathSep = '-'  // separator between path segments
        this.page = 0       // running page number
        this.callout = 0     // running callout number
        this.figure = 0     // running figure number
        this.table = 0      // running table number
        const root = new ManifestSection(
            0,      // idx = item's index into the this.items[] array
            href+this.hrefSep+'section',   // href
            0,      // page
            -1,     // pidx = parent's idx into this.items[]
            0,      // depth
            href,   // folder = last segment of item's full path
            href,   // path = full lineage of item's parent's, including self
            0,      // seq = item's sequence number under its parent section (base 1)
            href    // title
        )
        this.items = [root]
    }

    _addItem(item) {
        this.items.push(item)
        // console.log(`Added <${item.type}> '${item.href}' to page ${item.page}`)
        return item
    }

    // Called by <Content> Svelte component script
    addContent(depth, folder, comp) {
        const idx = this.items.length
        const pidx = this.contentSection(depth)
        const parent = this.items[pidx]
        // href looks like 'body-01-02-03-content-<folder>'
        const href = parent.href + this.hrefSep + 'content' + this.hrefSep + folder
        // path looks like 'body-bevins-origins-<folder>'
        const path = parent.path + this.pathSep + folder
        const item = new ManifestContent(idx, href, this.page,
            pidx, depth, folder, path, comp)
        return this._addItem(item)
    }

    // Called by <Page> Svelte component script
    addPage(recto=false, verso=false) {
        this.page++
        const idx = this.items.length
        // href looks like 'body-page-123'
        const href = `${this.href}${this.hrefSep}page${this.hrefSep}${this.page}`
        const item = new ManifestPage(idx, href, this.page, recto, verso)
        return this._addItem(item)
    }

    // Called by <Section> Svelte component script
    addSection(depth, folder, title) {
        const idx = this.items.length
        // console.log(`addSection(${depth}, ${folder}, ${title})`)
        const pidx = this.sectionParentIdx(depth)
        const parent = this.items[pidx]
        const seq = this.sectionSeq(depth)
        // href looks like 'body-section-01-02-03'
        const href = parent.href + this.hrefSep + seq
        // path looks like 'body-bevins-origins'
        const path = parent.path + this.pathSep + folder
        const item = new ManifestSection(
            idx,        // idx = item's index into the this.items[] array
            href,       // href =
            this.page,  // page = page number
            pidx,       // pidx = parent's idx into this.items[]
            depth,      // depth
            folder,     // folder = last segment of item's full path
            path,       // path = full lineage of item's parent's, including self
            seq,        // seq = item's sequence number under its parent section (base 1)
            title       // title
        )
        return this._addItem(item)
    }

    contentSection(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.isSection()) {
                if (item.depth === depth)
                    return pidx
            }
        }
        throw new Error(`contentSection(${depth}) not found.`)
    }

    sectionParentIdx(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            // console.log(pidx, item, item.isSection())
            if(item.isSection() && item.depth === depth-1)  {
                return pidx
            }
        }
        return -1
    }

    sectionSeq(depth) {
        for(let pidx=this.items.length-1; pidx>=0; pidx--) {
            const item = this.items[pidx]
            if(item.isSection()) {
                if (item.depth === depth)
                    return item.seq + 1
                else if (item.depth === depth-1)
                    return 1
            }
        }
        throw new Error(`sectionSeq(${depth}) not found.`)
    }
}