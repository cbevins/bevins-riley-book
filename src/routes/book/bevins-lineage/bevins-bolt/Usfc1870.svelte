<script>
    import { usfc1870} from '$bevins/bevins-bolt/usfc.js'
    import { P, NewPage, Usfc1870Table } from '$lib/book'
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
</script>

<P>
    The 1870 USFC, recorded on 22 Jul 1870, has the family still in Annawan,
    the value of their reale estate estimated at $2000, and personal estate at $300.
    William and Mary are now 55 and 48 years of age, and the children are now listed as:
</P><P>
    <Usfc1870Table census={usfc1870} />
</P><P>
    No-one in the family can read or write, although Saml, Julia, Rosetta, and Phebe
    all attended school within the year. John and Sarah are no longer in the household.
</P>

<NewPage {part} {title}/>
