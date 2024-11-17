/**
 *  
 * @param {String} author 
 * @param {string} copyright 
 * @param {string} title 
 * @param {string} subtitle 
 * @param {string} numbering 
 * @returns 
 * 
 * - pages is an array of {num, items} where
 *      - num is the page number
 *      - items is an array of {type, obj, props}
 *      
 */
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