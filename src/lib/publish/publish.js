export function publishFirst(tag, title, items=[]) {
    const section = {
        comp: null,
        depth: 0,
        header0: title,
        header1: '',
        items,
        name: tag,
        page: 1,
        parent: null,
        pager: 'first',
        order: 0,
        sections: [],
        seq: '00',
        tag,
        title
    }
    const man = {
        pages: [],          // [{num: 1, sections: [section]}],
        depth0: section,    // root {section} reference
        depth1: null,       // reference to running current depth 1 {section}
        sections: new Map()
    }
    man.sections.set(section.seq, section)
    return {man, section}
}

export function publish(man, parent, comp, tag, title, items=[], pager='newpg') {
    const section = {
        comp,
        depth: parent.depth + 1,
        header0: man.depth0.title,
        header1: man.depth1 ? man.depth1.title : '',
        items, order: man.sections.size,
        name: parent.name + '-' + tag,
        page: man.pages.length + 1,
        parent: null,
        pager,
        sections: [],
        seq: parent.seq + '-' + `${parent.sections.length+1}`.padStart(2,'0'),
        tag,
        title
    }
    if (section.depth === 1) {
        man.depth1 = section
        section.header1 = title
    }
    parent.sections.push(section)
    man.sections.set(section.seq, section)
    return section
}