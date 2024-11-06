export function manifest(man, chapter) {
    function num(section) { return chapter + '.' + section}

    man.newPage().beginSection(chapter, 'The Bevins Lineage')
    {
        man.beginSection(num('1'), 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('BevinsOverview', 'Overview content goes here')
            .addTable('BevinsImmigrantsTable', 'Bevins Immigrants')
            .endSection(num('1'))
        }

        // first start a new page, then place a section into it
        man.newPage().beginSection(num('2'), 'Newbold Verdon') 
        {
            man.addPageHeader().addSectionTitle() // finally, display the page header
            .addContent('NewboldVerdon1', 'Newbold Verdon first page above figure')
            .addFigure('NewboldVerdonMap', 'Newbold Verdon Environs')
            .addContent('NewboldVerdon2', 'Newbold Verdon first page below figure')
            .newPage().addPageHeader()
            .addContent('NewboldVerdon3', 'Newbold Verdon second page')
            .endSection(num('2'))
        }

        man.newPage()
        .beginSection(num('3'), 'The Immigrants William Longford Bevins and Mary Bolt [2])')
        {
            man.addPageHeader().addSectionTitle()
            .addContent('BevinsBolt', 'Bevins-Bolt')
            {
                man.newPage().addPageHeader()
                .beginSection(num('3.1'), '1850 US Federal Census')
                .addSectionTitle()
                .addContent('BevinsBoltUsfc1850', 'Bevins-Bolt 1850 Household')
                .addTable('BevinsBoltUsfc1850Table', 'Bevins-Bolt 1850 Household')
                .endSection(num('3.1'))
            }
            {
                man.newPage().addPageHeader()
                .beginSection(num('3.2'), '1860 US Federal Census')
                .addSectionTitle()
                .addContent('BevinsBoltUsfc1860', 'Bevins-Bolt 1860 Household')
                .addTable('BevinsBoltUsfc1860Table', 'Bevins-Bolt 1860 Household')
                .endSection(num('3.2'))
            }
            {
                man.newPage().addPageHeader()
                .beginSection(num('3.3'), '1870 US Federal Census')
                .addSectionTitle()
                .addContent('BevinsBoltUsfc1870', 'Bevins-Bolt 1870 Household')
                .addTable('BevinsBoltUsfc1870Table', 'Bevins-Bolt 1870 Household')
                .endSection(num('3.3'))
            }
            {
                man.newPage().addPageHeader()
                .beginSection(num('3.4'), '1880 US Federal Census')
                .addSectionTitle()
                .addContent('BevinsBoltUsfc1880', 'Bevins-Bolt 1880 Household')
                .addTable('BevinsBoltUsfc1880Table', 'Bevins-Bolt 1880 Household')
                .endSection(num('3.4'))
            }
            man.endSection(num('3'))
        }

        man.newPage().beginSection(num('4'), 'William Alfred Bevins and Mary Ann White [1] ?')
        {
            man.addPageHeader().addSectionTitle()
            .addContent('BevinsWhite', 'Bevins-White')
            .endSection('4')
        }
        man.endSection(chapter)
    }
}
