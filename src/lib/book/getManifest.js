/**
 * A third alternate, less verbose Manifest data structure
 * 
 * There are only 3 record types:
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

export function getManifest(lines) {
    let header1 = ''
    let header2 = ''
    const figures = []
    const items = []
    const pages = []
    const sections = []
    const tables = []
    for(let i=0; i<lines.length; i++) {
        const [depth, type, newpage, comp, title] = lines[i]

        // If this item is a section, possibly update the page headers
        if (type === 'section') {
            if (depth === 0) {
                header1 = title
                header2 = ''
            } else if (depth === 1) {
                header2 = title
            }
        }
        // If item starts a new page, append a new pages entry
        if (newpage) {
            const nextpage = {
                pageno: pages.length + 1,
                header1: header1,
                header2: header2,
                items: []}
            pages.push(nextpage)
        }

        // Assign this {page} to the {item}
        const page = pages[pages.length-1]
        const item = {type, depth, newpage, comp, title, page}

        if (type === 'section') {
            item.id = sections.length
            sections.push(item)
        } else if (type === 'table') {
            item.id = tables.length
            tables.push(item)
        } else if (type === 'figure') {
            item.id = figures.length
            figures.push(item)
        }

        // Add this item to the current page
        pages[pages.length-1].items.push(item)
        items.push(item)
    }
    return {pages, items, figures, tables, sections}
}