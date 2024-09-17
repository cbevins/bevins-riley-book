<script>
    import P from '$lib/book/P.svelte'
    import NewPage from '$lib/book/NewPage.svelte'
    import SectionBeg from '$lib/book/SectionBeg.svelte'

    export let id = ''      // something like '<book>-<chapter>'
    export let pageno = ''  // something like '123'
    export let part = ''    // part, something like 'Chapter 1'
    export let title = ''   // part title

    let pn = parseInt(pageno) + 1
    const titles =['Unites States Census Records']
</script>

<NewPage {part} {title} pageno={pn++}/>
<SectionBeg {id} {pageno} {titles}/>
    
<P>
The 1850 USFC, recorded 12 Aug, 1850, states ‘William Bevans’ (sic), aged 36, was residing in Townsend, Huron, OH, USA along with his inferred spouse, ‘Mary Bevans’, aged 30.  Both he and his wife were born in England and could not read or write. ( According to the 1900 USFC for his son William Alfred, William Longford and Mary Bolt would have immigrated to the US in 1845.) The family lived on a farm valued at $440 with the following children:
- John, aged 13, born in England,
- Joseph, aged 1, born in England,
- ‘William A’, aged 7, born in England,
- Sarah, aged 5, born in ‘NJ’,
- Mary, aged 1, born in Ohio
</P><P>
The 1860 USFC, record on 20 Jul, 1860, locates the family in Annawan, Henry County, Illinois. William L and his wife Mary and now listed as 44 and 33 years of age, respectively.  The value of his farm was estimated at $1600, and personal estate value at $500.  The parents are still listed as unable to read or write.  Children in the household included:
<ul>
    <li>- ‘Jn’, aged 21, farmer, born in England,
    </li><li>
        - Joseph, aged 19, farmer, born in England,
    </li><li>
        - ‘Wm’, aged 18, farmer, born in England,
    </li><li>
        - Sarah, aged 15, born in New Jersey,
    </li><li>
        - George, aged 7, born in Ohio,
    </li><li>
        - ‘Saml’, aged 5, born in Ohio,
    </li><li>
        - Julia, aged 3, born in Illinois, and
    </li><li>
        - Roselle, aged 6 months, born in Illinois.
    </li>
    </ul>
</P><P>
Interestingly, 5 of their 7 their neighboring farming families listed on this census sheet were also born in England, and all had property valued at $1600-$1800 and personal estate of $450-$550.
</P><P>
The 1870 USFC, recorded on 22 Jul 1870, has the family still in Annawan, the value of their reale estate estimated at $2000, and personal estate at $300. William and Mary are now 55 and 48 years of age, and the children are now listed as:
- Joseph, aged 28, ‘domestic sert’, born in England,
- ‘Wm A’, aged 26, born in England,
- George, aged 17, born in Ohio,
- ‘Saml’, aged 15, ‘at home’, born in Ohio,
- Julia, aged 12, born in Illinois, and
- Roselle, aged 10, born in Illinois.
- Phebe, aged 8, born in Illinois, and
- James, aged 5, born in Illinois.
</P><P>
    No-one in the family can read or write, although Saml, Julia, Rosetta, and Phebe all attended school within the year. John and Sarah are no longer in the household.
</P><P>
By the 1880 USFC (8 Jun, 1880), the household consist of:
- William, aged 65, farmer, born in England, listed as ‘sick’,
- Samuel, aged 24, farmer, born in Illinois, listed as ‘sick’,
- Julia, aged 22, born in Illinois, and
- James, aged 15, born in Illinois.
</P><P>
    In the neighboring residence lived son William Alfred and his wife Mary Ann White (our 1st GGP).  Household members were:
- William, aged 36, farmer, born in England, listed as ‘sick’,
- Mary, aged 33, born in England,
- Allace, aged 10, born in Illinois,
- Simon, aged 8(?), born in Illinois,
- Elisabeth, aged 4, born in Illinois,
- Nellie, 2, born in Illinois, and
Feebe, 1 month, born in Illinois.
</P><P>
An interesting question on the 1880 USFC was  ‘Is the person sick or temporarily disabled, so as to be unable to attend to ordinary business or duties? On 8 Jun, 1880, William Longford, Samuel, and William Alfred are listed as sick.  There are 50 individuals listed on this census sheet, 17 of which are listed as sick.
</P>