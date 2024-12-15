<script>
    import { Bold, Em, Enquote, P } from '$lib/markup'
    import Beowulf from '../images/Beowulf.jpg'
    const p = $$props // Ignore passed props: man, item, id

    const beowulf = [
    ['Fyrst forð gewat; |','Soon the boat was launched and afloat'],
    ['flota wæs on yðum,','below the headland. The soldiers, in'],
    ['bat under beorge. |','full harness, came aboard by the prow'],
    ['Beornas gearwe','and stowed a cargo of polished armour'],
    ['on stefn stigon, — |','and magnificent war-'],
    ['streamas wundon,','equipment amidships'],
    ['sund wið sande; |','while the sea churned and surf beat'],
    ['secgas bæron','against the beach. Then the'],
    ['on bearm nacan |','adventurers,'],
    ['beorhte frætwe,','bound on the voyage they had eagerly'],
    ['guðsearo geatolic; |','desired, pushed off their well-braced'],
    ['guman ut scufon,','vessel.'],
    ['weras on wilsið |',''],
    ['wudu bundenne.', '']
]
const canterbury = [
    ['Whan that Aprill, with his shoures soote', 'When [that] April with his showers sweet'],
    ['The dro&#540te of March hath perced to the roote', 'The drought of March has pierced to the root'],
    ['And bathed every veyne in swich licour,' ,'And bathed every vein in such liquor,'],
    ['Of which vertu engendred is the flour;', 'From which goodness is engendered the flower;']
]
</script> 
<P>
<Em>Beowulf</Em> is one of the oldest and most important works of Old English
literature.  It is an anonymous epic poem in the Germanic heroic tradition
consisting of 3,182 alliterative lines.  Its origin is known to predate its
earliest extant manuscript from abut 1000 AD.
</P><P>
Beowulf's Old English is so difficult to make approachable to modern readers
that there are over 680 known translations.
Below are lines 210-216, accompanied by a well-known 1957 interpretation:
</P>
<div id='figure-beowulf-manuscript'
    class="float-left w-[2.2in] h-[3.6in] px-4 py-2 mr-4 mt-2 text-left rounded-xl bg-green-200">
    <!-- title -->
    <!-- slot -->
    <img src={Beowulf} alt='Beowulf Manuscript'/>
    <!-- caption -->
    <div class='text-xs text-black font-serif'>
        First page of Beowulf manuscript from circa 1000 AD.
    </div>
</div>

<div id='table-example-beowulf-translation'
    class="float-right w-[4.1in] h-[2.7in] px-4 mr-4 my-2 text-left rounded-xl bg-green-200">
    <table class="w-auto mx-auto my-2 text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr>
            <th class="px-2 py-0">Original Old English</th>
            <th class="px-2 py-0">1957 English Translation</th>
        </tr>
    </thead>
    <tbody>
        {#each beowulf as line}
            <tr class="odd:bg-white even:bg-gray-100 bg-white text-xs">
                <td class="px-2 py-0 text-left">{line[0]}</td>
                <td class="px-0 py-0 text-left">{line[1]}</td>
            </tr>
        {/each}
    </tbody>
</table>
</div>
<P>
    While modern English only consists of about a quarter of Old English words,
    this includes the majority of everyday words.
</P>
<P>
After the Norman Conquest in 1066 (see next section), English was replaced for
several centuries by <Bold>Anglo-Norman</Bold> (a type of French, aka
<Em>Old French</Em> or <Em>Old Norman</Em>) as the language of the palaces,
courts, manor houses, churches, schools, and upper classes.
This is regarded as marking the end of the Old English era, since the English
language then became heavily influenced by French-Norman, developing into what is now
considered <Bold>Middle English</Bold> and <Bold>Early Scots</Bold>.
</P>
<P>
The Mercian dialect of Old English became the basis of Middle and Modern English,
while the Northumbrian dialect of Old English, heavily influenced by Old Norse
and Scandinavian rule, became the basis for Scots.
From 1150 through 1500 the predominant spoken dialect was Middle English.
</P>
<P>
Middle English also saw the considerable adoption of Old French vocabulary,
especially in the areas of politics, law, the arts, religion, and poetic diction.
</P>