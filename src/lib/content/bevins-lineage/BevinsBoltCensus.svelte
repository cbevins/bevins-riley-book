<script>
    import { usfc1850, usfc1860, usfc1870, usfc1880 } from '$lib/data/Bevins-Bolt.js'
    import { usfc1880 as usfc1880bw } from '$lib/data/Bevins-White.js'

    import P from '$lib/book/P.svelte'
    import NewPage from '$lib/book/NewPage.svelte'
    import Section from '$lib/book/Section.svelte'

    import Usfc1850Table from '$lib/book/Usfc1850Table.svelte'
    import Usfc1860Table from '$lib/book/Usfc1860Table.svelte'
    import Usfc1870Table from '$lib/book/Usfc1870Table.svelte'
    import Usfc1880Table from '$lib/book/Usfc1880Table.svelte'

    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['Unites States Census Records']
</script>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left">
<P>
The 1850 USFC, recorded 12 Aug, 1850, states ‘William Bevans’ (sic), aged 36, was residing in Townsend, Huron, OH, USA along with his inferred spouse, ‘Mary Bevans’, aged 30.  Both he and his wife were born in England and could not read or write. ( According to the 1900 USFC for his son William Alfred, William Longford and Mary Bolt would have immigrated to the US in 1845.) The family lived on a farm valued at $440 with the following children:
</P>

<P><Usfc1850Table census={usfc1850} /></P>

<NewPage {part} {title}/>

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
<P>
    The 1870 USFC, recorded on 22 Jul 1870, has the family still in Annawan, the value of their reale estate estimated at $2000, and personal estate at $300. William and Mary are now 55 and 48 years of age, and the children are now listed as:
</P><P>
    <Usfc1870Table census={usfc1870} />
</P><P>
    No-one in the family can read or write, although Saml, Julia, Rosetta, and Phebe all attended school within the year. John and Sarah are no longer in the household.
</P>

<NewPage {part} {title}/>
<P>
    By the 1880 USFC (8 Jun, 1880), the household consist of:
</P><P>
    <Usfc1880Table census={usfc1880} />
</P><P>
    An interesting question on the 1880 USFC was  ‘Is the person sick or temporarily disabled, so as to be unable to attend to ordinary business or duties? On 8 Jun, 1880, William Longford, Samuel, and William Alfred are listed as sick.  There are 50 individuals listed on this census sheet, 17 of which are listed as sick.
</P><P>
    In the neighboring residence lived son William Alfred and his wife Mary Ann White (our 1st GGP):
</P><P>
    <Usfc1880Table census={usfc1880bw} />
</P>
</div>
