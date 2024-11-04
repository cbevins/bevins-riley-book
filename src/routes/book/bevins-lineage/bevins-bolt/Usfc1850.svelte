<script>
    import { usfc1850 } from '$bevins/bevins-bolt/usfc.js'
    import { P, NewPage, Section, Usfc1850Table } from '$lib/book'

    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['Unites States Census Records']
</script>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left">
<P>
The 1850 USFC, recorded 12 Aug, 1850, states ‘William Bevans’ (sic), aged 36,
was residing in Townsend, Huron, OH, USA along with his inferred spouse, ‘Mary Bevans’,
aged 30.  Both he and his wife were born in England and could not read or write.
( According to the 1900 USFC for his son William Alfred, William Longford and Mary Bolt would have immigrated to the US in 1845.) The family lived on a farm valued at $440 with the following children:
</P>

<P><Usfc1850Table census={usfc1850} /></P>

<NewPage {part} {title}/>
</div>
