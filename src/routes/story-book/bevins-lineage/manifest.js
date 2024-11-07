export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Samuel Bevins')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('BevinsIntroduction', 'Introduction')
            .addFigure('BevinsTimeLine', 'Bevins Timeline')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
