/**
 * Returns a Book {manifest} object with the properties:
 *  {pages, embeds: {callouts, figures, other, tables}}
 * 
 * The constructor is passed an array of 'lines' defining the Book structure.
 * Each line defines a 'section', 'figure', or 'table', as follows:
 * 
 *  - <folder>, <depth>, 'section', <newpage>, <component>, <title>
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

export const ignore = 'ignore'  //
export const newpg = 'newp'    // component is first item of a new {page}
export const same = 'same'      // component is appended to current {page}
export const recto = 'recto'    // component is first item of a new recto {page}
export const verso = 'verso'    // component is first item of a new verso {page}

export function createManifest(lines, prefix) {
    // returned properties
    const pages = []    // array of {num, id, titles, sections}
    // embedded features within sections
    const callouts = []
    const figures = []
    const others = []
    const tables = []

    // temporary
    const titles = ['', '', '', '', '', '']
    const counts = [0, 0, 0, 0, 0, 0]
    let pageno = 0
    let page = null     // reference to the current page
    let id = ''         // generic, shared id or href variable

    function addPage() {
        pageno++
        page = {
            num: pageno,
            id: prefix + '-page-' + pageno,
            titles: [... titles],
            sections: []
        }
        pages.push(page)
    }

    for(let ln=0; ln<lines.length; ln++) {
        const line = lines[ln]
        // console.log(line)
        
        // add any missing {embed}s array then unpack elements
        if (line.length < 6) line.push([])
        const [folder, depth, pager, compkey, title, embeds] = line
        if (pager === ignore) continue

        // if recto or verso, insert any necessary {page}s before this new section
        if ((pager===recto && pageno%2=== 1) || (pager===verso && pageno%2=== 0))
            addPage()

        // Update the title and counts stacks
        titles[depth] = title
        counts[depth]++
        for (let d=depth+1; d< titles.length; d++) {
            titles[d] = ''
            counts[d] = 0
        }

        // If section starts a new page, append a new {page} entry
        if (pager === newpg || pager === recto || pager === verso)
            addPage()

        // Build the  nested {section} id
        id = prefix + '-section'
        for(let j=0; j<counts.length; j++)
            if (counts[j]) id += `-${j}`

        // Add the new {section} to the current {page}
        const section = {folder, depth, pager, compkey, title, embeds: [],
            page, id, headers: [...titles]}
        page.sections.push(section)

        // Collect any embeded features
        for(let i=0; i<embeds.length; i++) {
            // determine the embedded feature type
            let list
            const [type, name] = embeds[i]
            if (type === 'callout') list = callouts
            else if (type === 'figure') list = figures
            else if (type === 'table') list = tables
            else list = others

            const item = {
                href: `${prefix}-${type}-${list.length+1}`,
                num: list.length + 1,
                pageno,
                section: section,
                title: name,
                type
            }
            list.push(item)
            section.embeds.push(item)
        }
    }
    return {pages, embeds: {callouts, figures, others, tables}}
}

// item = {depth, pager, compkey, title, embeds, page, id, headers}
export function logItems(man) {
    for (let p=0; p<man.pages.length; p++) {
        const [pageNum, pageId, pageTitles, pageSections] = man.pages[p]
        for (let i=0; i<pageSections.length; i++) {
            const [depth, pager, compkey, title, embeds, page, id, headers]
                = pageSections[i]
            console.log(`${id} p${page.num} (${pager}) [${depth}]: `
                + `[${compkey}] "${title}" embeds=${embeds.length}`)
        }
    }
}

// page = {pageno, part,  titles, items[]}
export function logPages(man) {
    for (let p=0; p<man.pages.length; p++) {
        const [num, id, titles, sections] = man.pages[p]
        console.log(`${num} (${id}) has ${sections.length} sections: `
            + `"${titles[0]}" "${titles[1]}"`)
    }
}
