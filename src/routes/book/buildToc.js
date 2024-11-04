/*
    Processes a nested ToC structure into a simple array of ToC items

    Each item has the following predefined attributes:
    - item.type is one of 'chapter', 'section', 'callout', 'figure', or 'table'
    - item.title is the items ToC entry
    - item.comp is a reference to a Svelte component to be displayed for the item
    - item.page
        If 0, the item begins on a new page
        If > 0, the page of the item *parent* on which it begins
    - item.items is an array of child items

    This method adds the following attributes to each item:
    - item.href
        for type 'chapter' or 'section', a nested index such as 'toc-1', 'toc-1.2', 'toc-1.2.3', etc. 
        for type 'callout', 'figure', or 'table', its the sequences number such as
        'toc-callout-1', 'toc-fure-2', 'toc-table2', etc.
    - item.numb
        for type 'chapter' or 'section', a nested index such as '1', '1.2', '1.2.3', etc. 
        for type 'callout', 'figure', or 'table', its the sequences number 1, 2, 3, etc.
    - item.parent
        reference to the item's parent
    - item.section - for a callout, figure, or table, its the section in which it appears
        for type 'callout', 'figure', or 'table', its the item.numb in which it is contained
        for type 'chapter' or 'section', it is the same as its item.numb
*/

export function buildToc(parent) {
    const toc = {
        chapters: [],
        callouts: [],
        figures: [],
        tables: [],
        parts: [],
    }
    parent.depth = 0
    parent.parent = null
    parent.numb = ''
    parent.section = ''
    parent.href = 'toc'
    _process(parent, toc)
    return toc
}
function _process(parent, toc) {
    let section = 0
    for(let i=0; i<parent.items.length; i++) {
        const child = parent.items[i]
        child.parent = parent
        child.depth = parent.depth + 1
        if (child.type === 'chapter' || child.type === 'section') {
            section++
            child.numb = parent.parent ? parent.numb + '-' + section : section
            child.section = child.numb
            child.href = 'toc-section-' + child.numb
            if (child.type === 'chapter') toc.chapters.push(child)
            toc.parts.push(child)
            _process(child, toc)
        } else if (child.type === 'figure' ) {
            toc.figures.push(child)
            child.numb = toc.figures.length
            child.href = 'toc-figure-' + child.numb
            child.section = parent.section
            toc.parts.push(child)
        } else if (child.type === 'table' ) {
            toc.tables.push(child)
            child.numb = toc.tables.length
            child.href = 'toc-table-' + child.numb
            child.section = parent.section
            toc.parts.push(child)
        } else if (child.type === 'callout' ) {
            toc.callouts.push(child)
            child.numb = toc.callouts.length
            child.href = 'toc-callout-' + child.numb
            child.section = parent.section
            toc.parts.push(child)
        }
    }
}
