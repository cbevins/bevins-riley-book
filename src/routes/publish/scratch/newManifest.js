export function newManifest(author, copyright, title, subtitle,
        numbering='arabic') {
    const man = {
        author,
        copyright,
        numbering,      // 'arabic', 'roman', 'none'
        pathSep: '-',   // path folder (tag) separator
        pages: [],
        sections: new Map(),
        sectionSep: '-', // section separator
        subtitle,
        title,
    }
    return man
}