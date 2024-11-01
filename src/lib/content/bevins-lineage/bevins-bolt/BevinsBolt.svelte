<script>
    import { register, Cite, Enquote, Name, P, Section, See } from '$lib/book'

    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = [
        'The Immigrants',
        'William Longford Bevins and Mary Bolt (2nd GGP)']
    let props = { ...$$restProps }
    const name = '1.2, Bevins, BevinsBolt'
    const pages = 2
</script>

<div use:register={{name, pages}}/>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left">
<P>Our 2nd GGF <Name>William Longford Bevins</Name> was born on 4 Mar 1815 in Newbold Verdon,
Leicestershire, England <See href="oattap-bevins-newboldverdon"
    text="Newbold Verdon, Leicestershire - History and Geography"/>.
</P>

<P>At age 22, <Name>William</Name> married <Name>Ruth Gent</Name>, age 20, on 13 Nov 1837
at Church Gresley, DerbyShire.
Ruth was born on 22 Jun 1817 in nearby Donisthorpe, Derbyshire, England.
She gave birth to their son John Henry Bevins nine months later on 19 Mar 1838
at Ashby de la Zouchs, Leicestershire.  Apparently the birth or its aftermath
did not go well, as she died shortly thereafter in April 1838 in Ashby de la Zouch.
The 3 locales of Church Gresley, Donisthorpe, and Ashby de la Zouch form a small
triangle about 4 miles on a side, so the couple were probably residing in the
Ashby de la Zouch vicinity at the time.
</P><P>
Being a widowed father of an infant child, William probably moved back to his parents'
home in Newbold Verdon, about 12 miles to the southeast.  For it was near here,
in Market Bosworth (3 miles to the west) that two years later he married our
2nd GGM <Name>Mary Bolt</Name> (either in January or on March 15, 1840)
<Cite>English and Wales Civil Registration Index 1837-1900, Vol 15, page 209</Cite>.
Mary's last name is variously given as <Name>Bolt</Name>, <Name>Bork</Name>,
and <Name>Bott</Name>.  At age 17, she was 9 years younger than William.
</P><P>
<Name>Mary Bolt</Name> was born in Barwell, Leicestershire, England on 19 Aug 1822,
the ninth of ten children of <Name>Simon Bott</Name> and <Name>Mary Wykes</Name>.
Her father, Simon Bott, died in 1854 in Market Bosworth, so her family may have been residing
there around the time of her marriage to William.
</P><P>
Mary died on 3 Jul 1878 in Annawan, Henry, Illinois (<Enquote>hemoplegia</Enquote>?).
William Longford died 17 Jun 1889 in Annawan, Henry, Illinois.
They are both buried in Fairview Cemetery, adjacent to the Fairview United Methodist Chruch in Annawan.
</P><P>
I have not explored Mary’s lineage much further at this point.
A good starting place is Ramonabevins72 <Enquote>Bevins Family Tree</Enquote>.
She names Mary's mother as <Name>Mary Starbuck</Name>, born about 1783 in Thornton, Leicestershire,
and father as <Name>Simon Bork</Name>, born 15 Sep 1779 in Bardon, Leicestershire.
</P>
</div>