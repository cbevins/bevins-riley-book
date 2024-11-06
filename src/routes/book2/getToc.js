import { Manifest } from './Manifest.js'

function chapter1(toc) {
    // Page 1
    toc.beginSection('1', 'The Bevins Lineage')
        toc.beginSection('1.1', 'Overview')
        toc.addPageHeader()
        toc.addChapterTitle()
        toc.addSectionTitle()
        toc.addContent('BevinsOverview', 'Overview content goes here')
        toc.addTable('BevinsImmigrantsTable', 'Bevins Immigrants')
        toc.endSection('1.1')

        // Page 2
        toc.newPage()
        toc.beginSection('1.2', 'Newbold Verdon')
            toc.addPageHeader()
            toc.addSectionTitle()
            toc.addContent('NewboldVerdon1', 'Newbold Verdon first page above figure')
            toc.addFigure('NewboldVerdonMap', 'Newbold Verdon Environs')
            toc.addContent('NewboldVerdon2', 'Newbold Verdon first page below figure')
            toc.newPage()
            toc.addPageHeader()
            toc.addContent('NewboldVerdon3', 'Newbold Verdon second page')
        toc.endSection('1.2')

        toc.newPage()
        toc.beginSection('1.3', 'The Immigrants William Longford Bevins and Mary Bolt [2])')
            toc.addPageHeader()
            toc.addSectionTitle()
            toc.addContent('BevinsBolt', 'Bevins-Bolt')
            toc.newPage()
            toc.addPageHeader()
            toc.beginSection('1.3.1', '1850 US Federal Census')
                toc.addSectionTitle()
                toc.addContent('BevinsBoltUsfc1850', 'Bevins-Bolt 1850 Household')
                toc.addTable('BevinsBoltUsfc1850Table', 'Bevins-Bolt 1850 Household')
            toc.endSection('1.3.1')
            toc.newPage()
            toc.addPageHeader()
            toc.beginSection('1.3.2', '1860 US Federal Census')
                toc.addSectionTitle()
                toc.addContent('BevinsBoltUsfc1860', 'Bevins-Bolt 1860 Household')
                toc.addTable('BevinsBoltUsfc1860Table', 'Bevins-Bolt 1860 Household')
            toc.endSection('1.3.2')
            toc.newPage()
            toc.addPageHeader()
            toc.beginSection('1.3.3', '1870 US Federal Census')
                toc.addSectionTitle()
                toc.addContent('BevinsBoltUsfc1870', 'Bevins-Bolt 1870 Household')
                toc.addTable('BevinsBoltUsfc1870Table', 'Bevins-Bolt 1870 Household')
            toc.endSection('1.3.3')
            toc.newPage()
            toc.addPageHeader()
            toc.beginSection('1.3.4', '1880 US Federal Census')
                toc.addSectionTitle()
                toc.addContent('BevinsBoltUsfc1880', 'Bevins-Bolt 1880 Household')
                toc.addTable('BevinsBoltUsfc1880Table', 'Bevins-Bolt 1880 Household')
            toc.endSection('1.3.4')
        toc.endSection('1.3')

        toc.newPage()
        toc.beginSection('1.5', 'William Alfred Bevins and Mary Ann White [1] ?')
            toc.addPageHeader()
            toc.addSectionTitle()
            toc.addContent('BevinsWhite', 'Bevins-White')
        toc.endSection('1.3')
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
