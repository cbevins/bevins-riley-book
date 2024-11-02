<script>
    import { Book, P } from '$lib/book'
    import {newBook, newChapter, newPage, newSection, getPage} from './toc.js'
    import PageBreak from './PageBreak.svelte'
</script>

<Book>

{newBook('Our Ancestors through Time and Place')}

{newChapter('bevins', 'Bevins Lineage')}
<PageBreak id='bevins'/>
<P>Bevins Lineage Introduction</P>

{newSection('bevins-bolt-1', 'The Immigrants William Longford Bevins and Mary Bolt', true)}
<PageBreak id='bevins-bolt-1'/>
<P>Bevins-Bolt Family Story</P>
{newPage('bevins-bolt-2')}
<PageBreak id='bevins-bolt-2'/>
<P>CONTINUED Bevins-Bolt Family Story</P>

{newSection('bevins-white', 'The William Alfred Bevins - Mary White Family', true)}
<PageBreak id='bevins-white'/>
<P>Bevins-White Family Story</P>

{newChapter('collins', 'Collins Lineage')}
<PageBreak id='collins'/>
<P>Collins Lineage Introduction</P>

{newChapter('heddens', 'Heddens Lineage')}
<PageBreak id='heddens'/>
<P>Heddens Lineage Introduction</P>

{newChapter('nattrass', 'Nattrass Lineage')}
<PageBreak id='nattrass'/>
<P>Nattrass Lineage Introduction</P>
</Book>