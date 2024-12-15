<script>
    import { Bold, Em, Enquote, P } from '$lib/markup'
    const p = $$props // Ignore passed props: man, item, id
const canterbury = [
    ['Whan that Aprill, with his shoures soote', 'When [that] April with his showers sweet'],
    ['The dro&#540te of March hath perced to the roote', 'The drought of March has pierced to the root'],
    ['And bathed every veyne in swich licour,' ,'And bathed every vein in such liquor,'],
    ['Of which vertu engendred is the flour;', 'From which goodness is engendered the flower;']
]
</script> 

<P>
The <Em>The Canterbury Tales</Em> written by Geoffrey Chaucer between 1387 and 1400 AD,
is a collection of 24 stories that runs over 17,000 written in Middle English.
This is a bit easier for modern English readers to comprehend.  The first 4 lines
of the <Em>General Prologue</Em> are:
</P><P>
    
<div id='table-canterbury-tales-translation'
    class="mx-auto w-[6in] h-[0.95in] py-1 text-left rounded-xl bg-green-200">
    <table class="w-auto mx-auto text-sm text-left text-gray-500 rounded-lg">
    <thead class="text-xs text-gray-700 bg-gray-500">
        <tr>
            <th class="px-2 py-0">Original in Middle English</th>
            <th class="px-2 py-0">Modern English Translation</th>
        </tr>
    </thead>
    <tbody>
        {#each canterbury as line}
            <tr class="odd:bg-white even:bg-gray-50 bg-white text-xs">
                <td class="px-2 py-0 text-left">{@html line[0]}</td>
                <td class="px-4 py-0 text-left">{line[1]}</td>
            </tr>
        {/each}
    </tbody>
</table>
</div>
</P>