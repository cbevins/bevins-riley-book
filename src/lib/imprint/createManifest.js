/**
 * Returns a Book {manifest} object with the properties:
 *  {pages, embeds: {callouts, figures, other, tables}}
 * 
 * There are 3 Book parts:
 *  - 1 Front matter has its own manifest with page numbers and headers
 *  - 2 Book body starts page number and headers
 *  - 3 Back matter constinues with the page numbering and headers
 * Book front and back covers must be added independently.
 * 
 * The constructor is passed an array of 'lines' defining the Book sections.
 * Each section is defined by an array of:
 *  [<folder> <depth>, <pager>, <compKey>, <title>, <embeds>], where
 *  - depth is the section nesting level
 *      - 0 is the *part* level with the book title and is never displayed
 *      - >=1 is a *section* level
 *  - pager is 'same', 'newpage', 'rector', or 'verso'
 *  - compKey is a string key to a Svelte component 'import'
 *      - if falsey or empty, no component will be displayed
 *      - if compKey *cannot be matched* to a Svelte component 'import',
 *          a placeholder component will be displayed
 *      - if compKey *is matched* to a Svelte compnent 'import',
 *          the Svelte component will be displayed
 *  - title is a string that, if not falsey or empty, is
 *      - appended to the table of contents, and
 *      - appended to the current {page}
 *  - embeds is an optional array of items embedded in the section
 *      to be added to a 'List of <embedType>s'. Each embed is an array of 
 *      [<'callout'|'figure'|'map'|'table'>, <title>]
 * Each line defines a 'section', 'figure', or 'table', as follows:
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
    let bookTitle = 'Unknown Book Title'
    const titles = ['', '', '', '', '', '']
    const counts = [0, 0, 0, 0, 0, 0]
    let pageno = 0
    let page = null     // reference to the current page
    let id = ''         // generic, shared id or href variable

    function addPage(folder) {
        pageno++
        page = {
            id: prefix + '-page-' + pageno,
            folder,
            num: pageno,
            sections: [],
            titles: [... titles],
        }
        pages.push(page)
    }

    for(let ln=0; ln<lines.length; ln++) {
        const line = lines[ln]
        // console.log(line)
        
        // add any missing {embed}s array then unpack elements
        if (line.length < 6) line.push([])
        const [folder, depth, pager, compkey, title, embeds] = line

        // If first line, set the book title
        if (ln === 0 && depth === 0) {
            titles[depth] = line[4]
            counts[depth]++
            continue
        }
        // if (pager === ignore) continue

        // if recto or verso, insert any necessary {page}s before this new section
        if ( (pager===recto && pageno%2=== 1)
            || (pager===verso && pageno%2=== 0))
            addPage(folder)

        // Update the title and counts stacks
        titles[depth] = title
        if (depth === 0) console.log('First line', line)
        counts[depth]++
        for (let d=depth+1; d< titles.length; d++) {
            titles[d] = ''
            counts[d] = 0
        }

        // If section starts a new page, append a new {page} entry
        if (pager === newpg || pager === recto || pager === verso)
            addPage(folder)

        // Build the  nested {section} id
        id = prefix + '-section'
        for(let j=0; j<counts.length; j++)
            if (counts[j]) id += `-${counts[j]}`

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
