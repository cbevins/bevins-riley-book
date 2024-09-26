<script>
    import {setPage} from '$lib/book/singletons.js'

    import Book from '$lib/book/Book.svelte'
    import Chapter from '$lib/book/Chapter.svelte'
    import Cartouche from '../../lib/book/Cartouche.svelte'

    import FrontCover from '$lib/content/FrontCover.svelte'
    import Websites from '$lib/content/Websites.svelte'
    import FamilyUnit from '$lib/book/FamilyUnit.svelte'
    import Intro from '$lib/content/bevins-lineage/Intro.svelte'
    import BevinsBolt from '$lib/content/bevins-lineage/BevinsBolt.svelte'
    import BevinsImmigrants from '$lib/content/bevins-lineage/ImmigrantsTable.svelte'
    import NewboldVerdon from '$lib/content/bevins-lineage/NewboldVerdon.svelte'
    import BevinsBoltUSFC from '$lib/content/bevins-lineage/BevinsBoltCensus.svelte'

    setPage(0)
    let id = 'oattap-bevins'
    const parts = [
        // Chapter displays a title and some subtitles, and contains sections
        {comp: Chapter, pages: 1, props: {id: id,
            part: 'Chapter 1',
            title: 'The Bevins Lineage',
            subs: ['Origins of the Bevins Surname', 'A Dose of English History', 'Tribal Relations'],
            sections: [
                // type='intro' is just text markup startying after ChapterBeg
                {comp: Intro, pages: 1, props: {id: id+'-intro', type: 'intro'}},
                {comp: BevinsImmigrants,  pages: 1, props: {id: id+'-immigrants',
                    captions: ['Direct Ancestor Immigrants', 'on the Samuel Bevins Line']}},
                {comp: BevinsBolt, pages: 1, props: { id: id+'-bevinsbolt',
                    captions: ['The Immigrants',
                        'William Longford Bevins and Mary Bolt (2nd GGP)']}},
                {comp: NewboldVerdon, pages: 1, props: {id: id+'-newboldverdon',
                    captions: [ 'Newbold Verdon, Leicestershire',
                        'History and Geography']}},
                {comp: BevinsBoltUSFC, pages: 1, props: {id: id+'-bevinsbolt-usfc',
                    captions: [ 'United States Census Records']}},
                {comp: FamilyUnit, pages: 1, props: {id: id+'-bevinsbolt-damily',
                    lineageKey: 'bevins',
                    fatherKey: 'WilliamLongfordBevins1815',
                    motherKey: 'MaryBolt1822',
                    captions: [ 'Family Unit']}},
            ]
        }},
    ]
    id = 'oattap-collins'
    parts.push({comp: Chapter, props: {id: id,
        part: 'Chapter 2',
        title: 'The Collins Lineage',
        subs: ['12 Generations of Americans From 1621',
            'Quakers, Preachers, and Generals', 'Hillbillies, Too!'],
        sections: []
    }})
    id = 'oattap-heddens'
    parts.push({comp: Chapter, props: {id: id,
        part: 'Chapter 3',
        title: 'The Heddens Lineage',
        subs: ['First Into Kansas Territory',
            "Are We Custer's Cousin?"],
        sections: []
    }})
    id = 'oattap-nattrass'
    parts.push({comp: Chapter, props: {id: id,
        part: 'Chapter 4',
        title: 'The Nattrass Lineage',
        subs: ['10 Generations of Americans From 1628',
            "Murder and Hanging"],
        sections: []
    }})
    id = 'oattap-websites'
    parts.push({comp: Chapter, props: {id: id,
        part: '',
        title: 'Appendix',
        subs: [],
        sections: [
            {comp: Websites,  pages: 1, props: {id: id+'-websites',
                captions: ['Useful Websites']}},
        ]
    }})
</script>

<FrontCover/>
<Book>
    {#each parts as part}
        <svelte:component this={part.comp} {...part.props}/>
    {/each}
    <Cartouche personKey='CollinDouglasBevins1952'/>
    <Cartouche personKey='WilliamLongfordBevins1815'/>
    <div class='mb-4'></div>
</Book>
