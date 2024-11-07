export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Margaret Eva Nattrass')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('NattrassIntroduction', 'Nattrass Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
