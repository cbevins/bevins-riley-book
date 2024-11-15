export function setup(tag, title, seq, parent, sections, pages) {
    const self = parent ? parent + '-' + tag : tag
    const page = pages.length
    const depth = seq.split('-').length
    const section = {self, seq, tag, parent, depth, page, title}
    sections.set(seq, section)
    return section
}