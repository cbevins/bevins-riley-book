import { Manifest } from './Manifest.js'

function chapter1(toc) {
    // Page 1
    toc.beginSection('1', 'The Bevins Lineage')
    toc.beginSection('1.1', 'Overview')
    toc.addPageHeader()
    toc.addChapterTitle()
    toc.addSectionTitle()
    toc.addContent('BevinsOverview', 'Overview content goes here')
    toc.addTable('Bevins Immigrants')
    toc.endSection('1.1')

    // Page 2
    toc.newPage()
    toc.beginSection('1.2', 'Newbold Verdon')
    toc.addPageHeader()
    toc.addSectionTitle()
    toc.addContent('NewboldVerdon1', 'Newbold Verdon first page above figure')
    toc.addFigure('Newbold Verdon Environs')
    toc.addContent('NewboldVerdon2', 'Newbold Verdon first page below figure')
    toc.newPage()
    toc.addPageHeader()
    toc.addContent('NewboldVerdon3', 'Newbold Verdon second page')
    toc.endSection('1.2')
    toc.endSection('1')
}

function chapter2(toc) {
    toc.newPage()
    toc.beginSection('2', 'The Collins Lineage')
    toc.beginSection('2.1', 'Overview')
    toc.addPageHeader()
    toc.addChapterTitle()
    toc.addSectionTitle()
    toc.endSection('2.1')
    toc.endSection('2')
}

function chapter3(toc) {
    toc.newPage()
    toc.beginSection('3', 'The Heddens Lineage')
    toc.beginSection('3.1', 'Overview')
    toc.addPageHeader()
    toc.addChapterTitle()
    toc.addSectionTitle()
    toc.endSection('3.1')
    toc.endSection('3')
}

export function getToc() {
    const toc = new Manifest()
    chapter1(toc)
    chapter2(toc)
    chapter3(toc)
    return toc
}
