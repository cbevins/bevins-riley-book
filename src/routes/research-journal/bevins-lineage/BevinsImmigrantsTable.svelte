<script>
    import { ImmigrantsTable } from '$lib/book'
    export let item

    const captions = ['Immigrants of the', 'Samuel Bevins Line']
    const immigrants = [
        {name: 'William Longford Bevins', gen: '2nd GGF', born: 'England', year: 1845, age: 30},
        {name: 'Mary Bolt', born: 'England', gen: '2nd GGM', year: 1845, age: 23},
        {name: 'William Alfred Bevins', gen: '1st GGF', born: 'England', year: 1845, age: 2},
        {name: 'Mary Ann White', born: 'England', gen: '1st GGM', year: '1871, 1873', age: 24},
    ]
</script>

<ImmigrantsTable {captions} {immigrants} {item}/>