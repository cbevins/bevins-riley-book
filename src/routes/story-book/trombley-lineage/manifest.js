export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Harold Richard Trombley')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('TrombleyIntroduction', 'Trombley Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
