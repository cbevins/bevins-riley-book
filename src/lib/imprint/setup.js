export function setup(tag, seq, parent, collection, pages) {
    const self = parent ? parent + '-' + tag : tag
    const page = pages.length
    const depth = seq.split('-').length
    const section = {self, seq, tag, parent, depth, page}
    collection.set(seq, section)
    return section
}