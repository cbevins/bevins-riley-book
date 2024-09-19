<script>
    import P from '$lib/book/P.svelte'
    import Section from '$lib/book/Section.svelte'

    import BattleBosworth from './BattleBosworth.svelte'

    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = [
        'Newbold Verdon, Leicestershire',
        'History and Geography'
    ]
</script>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left">
<P>Leicestershire is a county in the English Midlands. The village of Newbold Verdon has a population of 3,012 in 2011.
</P><P>
    According to Wikipedia:
</P><P>
    New Verdon was an agricultural center until 1850's, when coal mining became predominant.
</P><P>
    In the itinerary of 1280, Newbold, Brascote, Naneby and Barlestone answered collectively as one village, which contained 80 acres of woodland and a vineyard.
</P><P>
    A part of Newbold was enclosed in 1509, although the main enclosure took place in 1810 when the church was awarded 1,316 acres of glebe land (used to support the parish priest and any other church endeavors).
</P>
<BattleBosworth id={id+'-battlebosworth'} captions={['The Battle of Bosworth']}/>
<P>
    Framework knitters were operating in the village in 1812, and by 1845 over 60 frames were in existence. By then, coal was being mined in the neighboring villages and many abandoned their frames and drifted into the mines.
</P><P>
    Like many other villages Newbold was almost self supporting having its own tailors, blacksmith and wheelwright, butchers and shoemakers.
</P><P>
    Distances from Newbold Verdon, birthplace of William Longford Bevins, to:
    <ul><li>
        - 120 miles NW to Liverpool 
        </li><li>
        - 100 miles SE to London
        </li><li>
        - 12 miles NW to Donisthorpe, Derbyshire, birthplace of Ruth Gent
        </li><li>
        - 13 miles northwest to Ashby de la Zouch, where Ruth Gent died
        </li><li>
            - 6 miles southwest to Bosworth Battlefield, 
        </li><li>
        - 5 miles south to Barwell, birthplace of Mary Bolt
        </li><li>
        - 3 miles west to Market Bosworth, where he married Mary Bolt
        </li><li>
        - 4 miles northwest to Thornton where Mary’s father Simon Bott was born
        </li><li>
        - 21 miles south to Coventry
        </li><li>
        - 30 miles north to Derby or Nottingham					
        </li>
    </ul>    
</P>

<P>
    The following places were recorded in the Domesday Book (1086), William the Conqueror’s census of his new won kingdom:										
    Niwebold, meaning ‘new built’.  It acquired the Verdon suffix from Nicholas de Verdon who owned the manor in 1226.
    Gresele			
</P>
</div>