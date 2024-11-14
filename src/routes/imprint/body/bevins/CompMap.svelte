<script>
    import { SectionContent } from '$lib/imprint'
    // CompMap.svelte files simply import SVelte components into their own
    // namespace, and then Map() them to their corresponding Imprint manifest
    // section.compkey.
    import ChapterIntro from './intro/Intro.svelte'
    import MigrationsIntro from './migrations/Intro.svelte'
    import OriginsIntro from './origins/Intro.svelte'
    import StoriesIntro from './stories/Intro.svelte'
    import SurnameIntro from './surname/Intro.svelte'

    export let man

    const folder = 'bevins'
    const comps = new Map([
        ['BevinsChapterIntro', ChapterIntro],
        ['BevinsMigrations', MigrationsIntro],
        ['BevinsOrigins', OriginsIntro],
        ['BevinsStories', StoriesIntro],
        ['BevinsSurname', SurnameIntro],
    ])
</script>
<SectionContent {man} {folder} {comps}/>
