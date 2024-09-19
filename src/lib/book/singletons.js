export const book = 'Our Ancestors through Time and Place'

let _pageNumber = 0
let _toc = []

// 'item' is an object with at least {id, part, title} plus anything else appropo
export function addToc(item) {
    item.page = getPage()
    _toc.push(item)
    console.log(`Added ToC`, item)
}

export function incPage(n=1) {
    _pageNumber += n
    return _pageNumber
}

export function getPage() { return _pageNumber }

export function setPage(n) {
    _pageNumber = n
    return _pageNumber
}