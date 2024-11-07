export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Gladys Mae De Reus')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('DeReusIntroduction', 'DeReus Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
