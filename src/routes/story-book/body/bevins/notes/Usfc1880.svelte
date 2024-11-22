<script>
    import { getChannels } from '$lib/content/singletons.js'
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    export let id, num

    // These are all Lineage {node} references
    const lineage = getChannels('bevins')
    const waBevins = lineage.find('WilliamAlfredBevins1843')
</script>

<div id={id}>
<NoteItem  item={num}>
    The 1880 USFC for the <Da node={waBevins}/> household in Dwelling 68
    lists daughter <Name>Mary Allace</Name> as 10 years old and born in England.
    All the other children are born in Illinois.
    <div class='mt-1'/>
    There were actually 3 <Name>Bevins</Name> households in Henry county in 1880
    apparently adjacent to one another.
    <div class='mt-1'/>
    Dwelling 67 is occupied by another <Name>William Bevins</Name>,
    aged 65 and born in England, with a 22 yearl old <Name>Julia</Name>
    and 15 year old <Name>James</Name>, both born in Illinois.
    <div class='mt-1'/>
    Dwelling 69 is occupied by a 25 year-old <Name>George Bevins</Name>
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
    </div>
    