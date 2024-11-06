<script>
    import { usfc1860 } from '$bevins/bevins-bolt/usfc.js'
    import { P, NewPage, Usfc1860Table } from '$lib/book'
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
</script>

<P>
    By the time of the 1860 census, the family has moved to Annawan, Henry County, Illinois.
    William L and his wife Mary and now listed as 44 and 33 years of age, respectively.
</P>
    
<P><Usfc1860Table census={usfc1860} /></P>
<P>Items of note include:
    <ul class='list-disc list-inside'>
        <li>Since Samuel, age 5, was born in Ohio, and Julia, age 3, was born in Illinois,
            the family must have moved to Annawan circa 1855 - 1857.</li>
        <li>
            Daughter Mary, who was age 1 in 1850, is no longer listed.
        </li>
        <li>
            Five of their 7 neighboring farming families listed on this census sheet
            were also born in England, and all had property valued at $1600-$1800 and personal estate of $450-$550.
        </li>
        <li>
            The third dwelling listed before their's was occupied by a 'James Bevins', age 28, born in England,
            his wife 'Mary J Bevins', born in NY, and daughters Julia (5) and Martha (1).
            I do not know what relationship, if any, the two families had.
        </li>
    </ul>
</P>
    
<NewPage {part} {title}/>
    