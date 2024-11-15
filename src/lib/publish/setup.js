export function setup(tag, title, seq, parent, sections, pages) {
    const self = parent ? parent + '-' + tag : tag
    const page = pages.length
    const depth = seq.split('-').length
    const pseq = seq.split('-')
    // console.log('Processing', seq, pseq)
    let header0 = title
    let header1 = ''
    if ( pseq.length === 1) {
        // console.log('1 part seq', title)
    } else if (pseq.length === 2) {
        let sec0 = sections.get(pseq[0])
        // console.log('2 part seq sec0', sec0)
        header0 = sec0.title
        header1 = title
    } else if (pseq.length >= 3) {
        let sec0 = sections.get(pseq[0])
        // console.log('3 part seq: sec0', sec0)
        header0 = sec0.title
        let sec1 = sections.get(pseq[0]+'-'+pseq[1])
        // console.log('3 part seq: sec1', sec1)
        header1 = sec1.title
    }
    const section = {self, seq, tag, parent, depth, page, title, header0, header1}
    // console.log('setting', seq)
    sections.set(seq, section)
    return section
}