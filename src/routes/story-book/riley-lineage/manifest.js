export function manifest(man, chapter) {
    man.newPage().beginSection(chapter, 'Direct Ancestors of Sheldon Junior Riley')
    {
        man.beginSection(chapter+'.1', 'Overview')
        {
            man.addPageHeader().addChapterTitle().addSectionTitle()
            .addContent('RileyIntroduction', 'Riley Lineage Introduction')
            .endSection(chapter+'.1')
        }
        man.endSection(chapter)
    }
}
