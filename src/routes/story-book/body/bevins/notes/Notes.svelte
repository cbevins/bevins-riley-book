<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    
    // These are all Lineage {node} references
    const lineage = getChannels('bevins')
    const maryBolt = lineage.find('MaryBolt1822')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
    const wlBevins = lineage.find('WilliamLongfordBevins1815')
    const maryAnnWhite= lineage.find('MaryAnnWhite1848')
    const johnBevins = lineage.find('JohnBevins1783')
    const maryAnnIsom = lineage.find('MaryAnnIsom1766')
    const sarahAnnLongford = lineage.find('SarahAnnLongford1788')
    const josephBevins = lineage.find('JosephBevins1762')
    const thomasBevins = lineage.find('ThomasBevins1731')
    const sarahWrathburn = lineage.find('SarahWrathburn1736')
    const williamBevins = lineage.find('WilliamBevins1705')
    const sarahWilkinson = lineage.find('SarahWilkinson1696')

</script>

<div id='footnote-bevins-1'>

<NoteItem item='1'>
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

<NoteItem  item='2'>
The 1880 USFC for the <Da node={waBevins}/> household lists daughter
<Name>Mary Allace</Name>as 10 years old and born in England.
AlLl the other children are born in Illinois.
<div class='mt-1'/>
There are 3 <Name>Bevins</Name> households in Henry county in 1880.
The dwelling before theirs is occupied by another <Name>William Bevins</Name>,
aged 65 and born in England, with a 22 yearl old <Name>Julia</Name>
and 15 year old <Name>James</Name>, both born in Illinois.
<div class='mt-1'/>
The dwelling after theirs is occupied by a 25 year-old <Name>George Bevins</Name>
born in Ohio (his parents were born in England),
18 year old wife <Name>Charlot</Name> born in New York, and a 10 month old
son <Name>Joseph</Name> born in Iowa.
<div class='mt-1'/>
Bevins households enumerated by the 1880 Census in Illinois
<table class="text-sm text-left text-gray-500 border-2 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr><th>County</th><th>Name</th><th>S, M, F</th><th>No</th><th>Bevins</th></tr>
    </thead>
    <tbody class='text-left'>
    <tr><td>Carroll</td><td>Edwin Bevins</td><td>NY VT NH</td><td>90</td><td>3</td></tr>
    <tr><td>Clark</td><td>Beeacon Bevins (step dau)</td><td>IL IL IL</td><td>171</td><td>1 of 5</td></tr>
    <tr><td>Ford</td><td>James Bevins</td><td>Eng Eng Eng</td><td>7</td><td>1</td></tr>
    <tr><td>Peoria</td><td>Thomas Bevins</td><td>IL IL VI</td><td>26</td><td>1</td></tr>
    <tr><td>Henry</td><td>William Bevins</td><td>Eng Eng Eng</td><td>67</td><td>4</td></tr>
    <tr><td>Henry</td><td>William Bevins*</td><td>Eng Eng Eng</td><td>68</td><td>7</td></tr>
    <tr><td>Henry</td><td>George Bevins</td><td>OH Eng Eng</td><td>69</td><td>3</td></tr>
    <tr><td>Macon</td><td>Eliza Bevins</td><td>IL VI MD</td><td>105</td><td>6</td></tr>
    <tr><td>Mercer</td><td>Fountain Bevins</td><td>IN UN UN</td><td>162</td><td>4</td></tr>
    <tr><td>Will</td><td>Nancy Bevins</td><td>IN KY KY</td><td>120</td><td>1</td></tr>
    <tr><td>Vermilion</td><td>Josiah Bevins</td><td>OH DE UN</td><td>210</td><td>5</td></tr>
</tbody></table>
</NoteItem>

<NoteItem  item='3'>
    The earliest residence I've found to date of a <Name>Bevins</Name> in US and colonial
    census and tax rolls are:
    <div class="grid grid-cols-12">
        <div class='col-span-1'>1699 -</div>
        <div class='col-span-11'>
            <Name>Thomas Bevins</Name> lived in 'Spes Utij Hundred, Baltimore,
            Maryland' <Source>Maryland tax list</Source>.
        </div>
        <div class='col-span-1'>1703 -</div>
        <div class='col-span-11'>
            <Name>Joseph Bevins</Name> lived in the 'So. Side Gunpowder, Baltimore,
            Maryland' <Source>Maryland tax list</Source>.
        </div>
    </div>
    <div class='mt-1'/>
    The first First Census of the United States was taken in 1790 of heads of households.
    By the 1790s, there were Bevins living in at least 7 colonies:
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th>Colony</th><th>Counties</th></tr>
        </thead>
        <tbody>
            <tr><td>Connecticut</td><td>Middlesex, Hartford</td></tr>
            <tr><td>North Carolina</td><td>Randolph</td></tr>
            <tr><td>New Jersey</td><td> Cumberland, Gloucester</td></tr>
            <tr><td>New York</td><td>Albany, Columbia</td></tr>
            <tr><td>Maryland</td><td>Baltimore, Worcester, Cecil</td></tr>
            <tr><td>South Carolina</td><td>Charleston</td></tr>
            <tr><td>Vermont</td><td>Windor, Orange</td></tr>
        </tbody></table>

    <div class='mt-1'/>
    In 1790 a <Name>William Bevins</Name> lived in Charleston District, Dorchester County,
    St. George's Parish in South Carolina.  His household included 4 free 
    white males over 16 and 2 under 16, 4 free white females, and 2 slaves.
    Relationship to our family line is unknown.
    <div class='mt-1'/>
    A <Name>John Bevins</Name> lived in Baltimore City, MD, with 2 minor white
    males, 3 white feamles, and no slaves.
    <div class='mt-1'/>
</NoteItem>
    
<NoteItem  item='3'>
    Bevins households enumerated by the 1850 Census in Illinois
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th>County</th><th>Name</th><th>Born</th><th>No</th><th>Bevins</th></tr>
        </thead>
        <tbody class='text-left'>
        <tr><td>Fulton</td><td>William Bevins</td><td>Eng</td><td>34</td><td>5</td></tr>
        <tr><td>Knox</td><td>Bazel Bevins</td><td>PN</td><td>2091</td><td>1 of 7</td></tr>
        <tr><td>Sangamon</td><td>Margaret Bevins</td><td>MD</td><td>7</td><td>1 of 6</td></tr>
        <tr><td>Madison</td><td>Egbert Bevins</td><td>IL</td><td>43</td><td>4</td></tr>
    </tbody></table>
</NoteItem>

<NoteItem  item='5'>
    Some elder Bevins from the 1870 USFC in Illinois:
    There was a <Name>Hannah Bevins</Name> born in Virginia in 1798.
    There was a <Name>Charles Bevins</Name> born in North Carolina in 1790.

    Bevins households enumerated by the 1870 Census in Illinois
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th>County</th><th>Name</th><th>S, M, F</th><th>No</th><th>Bevins</th></tr>
        </thead>
        <tbody class='text-left'>
        <tr><td>Carroll</td><td>Chas F Bevins</td><td>VT</td><td>5</td><td>2</td></tr>
        <tr><td>Carroll</td><td>Thomas Bevins</td><td>VT</td><td>104</td><td>5</td></tr>
        <tr><td>Cook</td><td>Martha Bevins</td><td>OH</td><td>653</td><td>4</td></tr>
        <tr><td>Fulton</td><td>Haney Mary Bevins</td><td>NY</td><td>97</td><td>5</td></tr>
        <tr><td>Henry</td><td>William Bevins</td><td>Eng</td><td>29</td><td>10</td></tr>
        <tr><td>Iroquois</td><td>James Bevins (Wid)</td><td>Eng</td><td>238</td><td>4</td></tr>
        <tr><td>Menard</td><td>Hannah Bevins</td><td>VI </td><td>210</td><td>5</td></tr>
        <tr><td>Pike</td><td>Charles Bevins</td><td>NC</td><td>125</td><td>2</td></tr>
        <tr><td>Union</td><td>James Bevins</td><td>OH</td><td>27</td><td>2</td></tr>
    </tbody></table>
</NoteItem>
</div>
