<script>
    // Intro is a Section of a Chapter
    import ImmigrantsTable from '$lib/book/ImmigrantsTable.svelte'
 
    export let id = ''          // Table element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['Direct Ancestor Immigrants', 'on the Samuel Bevins Line']

    const immigrants = [
        {name: 'William Longford Bevins', gen: '2nd GGF', born: 'England', year: 1845, age: 30},
        {name: 'Mary Bolt', born: 'England', gen: '2nd GGM', year: 1845, age: 23},
        {name: 'William Alfred Bevins', gen: '1st GGF', born: 'England', year: 1845, age: 2},
        {name: 'Mary White', born: 'England', gen: '1st GGM', year: '1871, 1873', age: 24},
    ]
</script>

<ImmigrantsTable {id} {part} {title} {newpage} {captions} {immigrants}/>