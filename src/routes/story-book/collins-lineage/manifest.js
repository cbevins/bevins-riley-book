export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Hattie Jane Collins')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('CollinsIntroduction', 'Collins Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
