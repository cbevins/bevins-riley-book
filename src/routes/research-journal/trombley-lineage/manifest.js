export function manifest(man, chapter) {
    function num(section) { return chapter + '.' + section}

    man.newPage().beginSection(chapter, 'The Trombley Lineage')
    {
        man.beginSection(num('1'), 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .endSection(num('1'))
        }
        man.endSection(chapter)
    }
}