export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Myrtle Estelle Nelson')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('NelsonIntroduction', 'Nelson Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
