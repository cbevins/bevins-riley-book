/**
 * Returns a Book {manifest} object with the properties:
 *  {pages, items, figures, tables, sections}
 * 
 * The constructor is passed an array of 'lines' defining the Book structure.
 * Each line defines a ;section', 'figure', or 'table', as follows:
 * 
 *  - <depth>, 'section', <newpage>, <component>, <title>
 *      Appends text content to the current page:
 *      - enters the <title> into the ToC,
 *      - appends the <title> onto the current page.
 *      - appends the <component> onto the current page.
 * 
 *      If <title> is missing or an empty string:
 *      - appends just the <component> onto the current page.
 * 
 *      If <component> is '':
 *      - enters the <title> into the ToC,
 *      - appends just the <title> onto the current page.
 * 
 *  - <depth>, <'figure'|'table', <newpage>, <component>, <title>
 *      Appends figure or table content onto the current page:
 *      - enters the <title> into the list of figures or tables
 *      - appends the <title> to the current page
 *      - appends the <component> to the current page
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
        headers[depth] = title
        levels[depth]++
        for (let d=depth+1; d<headers.length; d++) {
            headers[d] = ''
            levels[d] = 0
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
