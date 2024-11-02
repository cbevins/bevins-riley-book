export let bookTitle = 'Unknown Book Title'
const bookId = 'book'
export let currentPage = 0
export let currentChapter = ''
export let currentSection = ''
export const tocMap = new Map()
export const pageMap = new Map()

export function getPage(id) {
    if (!pageMap.has(id)) throw new Error(`No pageMap entry form id '${id}'`)
    return pageMap.get(id)
}

export function newBook(title='Unknown Book Title') {
    currentPage = 0
    pageMap.clear()
    tocMap.clear()
    tocMap.set(bookId, {id: bookId, title: title, page: currentPage})
    bookTitle = title
    console.log('book()', title)
    return ''
}

export function newChapter(id, title, section='', pagetop=true) {
    currentChapter = title
    currentSection = section
    if (pagetop) newPage(id)
    tocMap.set(id, {id, title, page: currentPage, })
    console.log('chapter()', currentPage, id, title)
    return ''
}

export function newPage(id) {
    currentPage++
    pageMap.set(id, {id, page: currentPage,
        chapter: currentChapter, section: currentSection})
    return ''
}

export function newSection(id, title, pagetop=false) {
    currentSection = title
    if (pagetop) newPage(id)
    tocMap.set(id, {id, title, page: currentPage})
    console.log('section()', currentPage, id, title)
    return ''
}