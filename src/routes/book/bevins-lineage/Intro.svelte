<script>
    // Intro is a Section of a Chapter
    import ChapterBeg from '$lib/book/ChapterBeg.svelte'
    import ImmigrantsTable from '$lib/book/ImmigrantsTable.svelte'

    import NewPage from '$lib/book/NewPage.svelte'
    import P from '$lib/book/P.svelte'

    export let id = ''      // something like '<book>-<chapter>-<section>'
    export let pageno = ''  // something like '123'
    export let part = ''    // part, something like 'Chapter 1'
    export let title = ''   // part title
    
    let pn = parseInt(pageno) + 1
    // Chapter subtitles
    const subs = [
        'Origins of the Bevins Surname',
        'A Dose of English History',
        'Tribal Relations'
    ]

    const immigrants = {
        titles: ['Direct Ancestor Immigrants', 'on the Samuel Bevins Line'],
        persons: [
            {name: 'William Longford Bevins', gen: '2nd GGF', born: 'England', year: 1845, age: 30},
            {name: 'Mary Bolt', born: 'England', gen: '2nd GGM', year: 1845, age: 23},
            {name: 'William Alfred Bevins', gen: '1st GGF', born: 'England', year: 1845, age: 2},
            {name: 'Mary White', born: 'England', gen: '1st GGM', year: '1871, 1873', age: 24},
        ]
    }
</script>

<ChapterBeg {id} {part} {title} pageno={pn++} {subs}/>

<P>The lineage of our grandfather Samuel Bevins is a good place to begin investigating our
    family history.  Firstly, there is the fact that we have inherited his surname, something we have
    heard, spoken, read, or written nearly every day of our lives.  So naturally, the etymology of the
    ‘Bevins’ surname is a subject of personal interest to explore.</P>

<P>But also, our grandfather’s lineage is the most recent of our ancestors
    to arrive in America.  Our 2nd great grandparents, William Longford
    Bevins and Mary Bolt, and their young son William Alfred (our 1st great
    grandparent), immigrated from England in 1845.  This simplifies the
    number of pathways to explore when determining our immigrant
    ancestors and their origins and reconstructing their life stories and
    historical influences. (1)
</P>
<P>Footnote 1:  To date, Samuel Bevins and his direct ancestors comprise 43
    of the 287 ancestors I have been able to document. By comparison, his
    wife, our grandmother Hattie Jane Collins, has 122 known ancestors.
    Grandfather Ralph Vernon Heddens has 39 (with many more to be explored),
    and grandmother Margaret Eva Nattrass has documented 81 ancestors.
</P>

<NewPage {part} {title} pageno={pn++}/>
<ImmigrantsTable {immigrants}/>