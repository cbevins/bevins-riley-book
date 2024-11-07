export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Introduction')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('Introduction', 'Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
