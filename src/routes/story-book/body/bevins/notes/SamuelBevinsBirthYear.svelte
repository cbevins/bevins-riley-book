<script>
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    export let id, num
</script>

<div id={id}>
<NoteItem item={num}>
    Some Ancestry.com trees give grandfather <Name>Samuel Bevins</Name>'s
    year of birth as 1879, while other say it was 1881.
    <div class='mt-1'/>
    The 1880 USFC, recorded on 8 June for his parents' household, shows 5 children,
    the youngest being <Enquote><Name>Feebee</Name></Enquote> at age 1 month.
    There is no Samuel listed.
    <div class='mt-1'/>
    The 1900 USFC for the family lists 6 children, with <Enquote><Name>Phebe</Name></Enquote>
    now aged 20 and born in May 1880,
    while <Name>Samuel</Name> is aged 18 and born in Dec 1881.
</NoteItem>
</div>    