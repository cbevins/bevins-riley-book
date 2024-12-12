/**
 * Returns a Book {manifest} object with the properties:
 *  {pages, parts, figures, tables}
 * 
 * A 'Book' is a collection of nested {part}s and a collection of {page}s.
 * While a {page} may be composed of zero or more {part}s,
 * a {part} may not span more than 1 {page}.  So any content spanning more
 * than 1 page must be split into multiple parts.
 * 
 * The constructor is passed an array of records defining the Book structure.
 * Each array element is transformed into a {part} object with some additional
 * properties and appended onto the a {page} object in the Book.
 * 
 * Each element of the array passed to the constructor is itself an array
 * with the following elements:
 *  [<depth>, <newpage>, <comp>, <title>, <embeds>]
 * 
 *  - <depth> is an integer depth of the book part,
 *      where depth 0 correspnds to the 'front', 'body', and 'back' parts.
 * 
 *  - <newpage> is a boolean.  If TRUE
 *      - a new {page} object is appended onto the manifest.pages array,
 *      - the new {page} becomes the current page, and
 *      - all subsequent {part}s are appended to the current {page}.
 * 
 *  - <comp> is a string key to a Svelte component.
 *      If empty or 'None', no content will be displayed in the book,
 *      but any <title> *will* be displayed and appended to the ToC.
 * 
 *  - <title> is a string that is displayed before any <comp> content
 *      and appended to the ToC. If the string is empty, then no title
 *      is displayed in the Book or appended onto the ToC.
 * 
 *  - <embeds> is an array of any figures, tables, etc that are embedded
 *      in the part and that should appear in the ToC or List of <type>s.
 *      Each element is an array of [<type>, <title>] pairs,
 *      where <type> may be any arbitray type key,
 *      e.g., 'figure', 'table', 'map', 'callout', whatever.
 */

export function createManifest(lines) {
    const figures = []
    const headers = ['', '', '', '', '', '', '', '', '', '']
    const items = []
    const levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const pages = []
    const sections = []
    const tables = []
    for(let i=0; i<lines.length; i++) {
        const [depth, type, newpage, comp, title, part] = lines[i]

        // Update page headers and item levels stacks
        if (type === 'section') {
            headers[depth] = title
            levels[depth]++
            for (let d=depth+1; d<headers.length; d++) {
                headers[d] = ''
                levels[d] = 0
            }
        }

        // If item starts a new page, append a new pages entry
        if (newpage) {
            const nextpage = {
                pageno: pages.length + 1,
                part,
                headers: [...headers],
                items: []}
            pages.push(nextpage)
        }

        // Assign this {page} to the {item}
        const page = pages[pages.length-1]
        const lvl = [...levels]
        const item = {type, depth, newpage, comp, title, page, part, levels: lvl}

        if (type === 'section') {
            sections.push(item)
            item.id = sections.length   // sections index plus 1
        } else if (type === 'table') {
            tables.push(item)
            item.id = tables.length     // tables index plus 1
        } else if (type === 'figure') {
            figures.push(item)
            item.id = figures.length    // figures index plus 1
        }

        // Add this item to the current page
        pages[pages.length-1].items.push(item)
        items.push(item)
    }
    return {pages, items, figures, tables, sections}
}

/**
 * Joins the item.levels into a string using the 'sep'
 * @param {object} item Object with an levels[] array
 * @param {string} sep Separator between each level
 * @param {integer} startLevel Starting level for the sequence
 * @param {string} prefix optional string prefix
 * @returns 
 */
export function itemSequence(item, sep, startLevel=0, prefix='') {
    let str = prefix + item.levels[startLevel]
    for (let i=startLevel+1; i<item.levels.length; i++) {
        if (item.levels[i]) str += sep + item.levels[i]
    }
    return str
}

export function updateItems(startDepth, partId, items) {
    for(let i=0; i<items.length; i++) {
        items[i][0] = items[i][0] + startDepth
        items[i].push(partId)
    }
    return items
}
