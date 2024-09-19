<script>
    import {setPage} from '$lib/book/singletons.js'

    import Book from '$lib/book/Book.svelte'
    import Chapter from '$lib/book/Chapter.svelte'

    import FrontCover from '$lib/content/FrontCover.svelte'
    import Intro from '$lib/content/bevins-lineage/Intro.svelte'
    import BevinsBolt from '$lib/content/bevins-lineage/BevinsBolt.svelte'
    import BevinsImmigrants from '$lib/content/bevins-lineage/ImmigrantsTable.svelte'
    import NewboldVerdon from '$lib/content/bevins-lineage/NewboldVerdon.svelte'
    import BevinsBoltUSFC from '$lib/content/bevins-lineage/BevinsBoltCensus.svelte'

    setPage(0)
    const id1 = 'oattap-bevins'
    const parts = [
        // Chapter displays a title and some subtitles, and contains sections
        {comp: Chapter, props: {id: id1,
            part: 'Chapter 1',
            title: 'The Bevins Lineage',
            subs: ['Origins of the Bevins Surname', 'A Dose of English History', 'Tribal Relations'],
            sections: [
                // type='intro' is just text markup startying after ChapterBeg
                {comp: Intro, props: {id: id1+'-intro', type: 'intro'}},
                {comp: BevinsImmigrants, props: {id: id1+'-immigrants',
                    captions: ['Direct Ancestor Immigrants', 'on the Samuel Bevins Line']}},
                {comp: BevinsBolt, props: { id: id1+'-bevinsbolt',
                    captions: ['The Immigrants',
                        'William Longford Bevins and Mary Bolt (2nd GGP)']}},
                {comp: NewboldVerdon, props: {id: id1+'-newboldverdon',
                    captions: [ 'Newbold Verdon, Leicestershire',
                        'History and Geography']}},
                {comp: BevinsBoltUSFC, props: {id: id1+'-bevinsbolt-usfc',
                    captions: [ 'United States Census Records']}},
            ]
        }}
    ]
</script>

<FrontCover/>
<Book>
    {#each parts as part}
        <svelte:component this={part.comp} {...part.props}/>
    {/each}
</Book>
