export const book = 'Our Ancestors through Time and Place'

let _pageNumber = 0

export function addpage() {
    _pageNumber++
    console.log('addPage() now', _pageNumber)
    return _pageNumber
}

export function pageno() { return _pageNumber }

export function setPage(n) {
    _pageNumber = n
    return _pageNumber
}