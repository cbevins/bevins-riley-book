/**
 * Returns an initialized empty {man} and parent {section}
 */
export function publishInit() {
    const man = {
        pages: [],          // [{num: 1, sections: [section]}],
        depth0: null,    // root {section} reference
        depth1: null,       // reference to running current depth 1 {section}
        sections: new Map()
    }
    return man
}

export function publish(man, parent, comp, tag, title, items=[], pager='newpg') {
    let depth = parent ? parent.depth + 1: 0
    console.log(`publish(${tag} ${title})`)
    const section = {
        comp,
        depth,
        header0: '',
        header1: '',
        items,
        order: man.sections.size,
        name: parent ? (parent.name + '-' + tag) : tag,
        page: man.pages.length + 1,
        parent,
        pager,
        sections: [],
        seq: parent ?
            (parent.seq + '-' + `${parent.sections.length+1}`.padStart(2,'0'))
            : '00',
        tag,
        title
    }
    if (depth === 0) {
        man.depth0 = section
        section.header0 = title
        section.header1 = ''
    } else if (depth === 1) {
        man.depth1 = section
        section.header0 = man.depth0.title
        section.header1 = title
    } else {
        section.header0 = man.depth0.title
        section.header1 = man.depth1.title
    }
    if (parent) parent.sections.push(section)
    man.sections.set(section.seq, section)
    return section
}