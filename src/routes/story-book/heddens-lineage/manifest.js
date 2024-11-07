export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Ralph Vernon Heddens')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('HeddensIntroduction', 'Heddens Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
