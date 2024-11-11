<script>
    import { NewPage } from '$lib/book'
    import Colophon from './colophon/A.svelte'
    import Frontispiece from './frontispiece/A.svelte'
    import HalfTitle from './half-title/A.svelte'
    import TitlePage from './title-page/A.svelte'
    import Dedication from './dedication/A.svelte'
    import TableContents from './table-contents/A.svelte'
    import ListFigures from './list-figures/A.svelte'
    import ListTables from './list-tables/A.svelte'
    import Epigraph from './epigraph/A.svelte'
    import Preface from './preface/A.svelte'
    import Foreword from './foreword/A.svelte'

    export let body     // book body manifest
    export let back     // back-matter manifest
    
    const title = 'Our Ancestors Through Time and Place'
</script>

<NewPage page={{pageno: '', headers: [title, 'Half Title']}} firstPage={true}/>
<HalfTitle/>

<NewPage page={{pageno: '', headers: [title, 'Colophon']}}/>
<Colophon/>

<NewPage page={{pageno: '', headers: [title, 'Title Page']}}/>
<TitlePage/>

<NewPage page={{pageno: '', headers: [title, 'Frontispiece']}}/>
<Frontispiece/>

<NewPage page={{pageno: 'i', headers: [title, 'Dedication']}}/>
<Dedication/>

<NewPage page={{pageno: 'ii', headers: [title, 'Table of Contents']}}/>
<TableContents {body} {back}/>

<NewPage page={{pageno: 'iii', headers: [title, 'List of Figures']}}/>
<ListFigures/>

<NewPage page={{pageno: 'iv', headers: [title, 'List of Tables']}}/>
<ListTables/>

<NewPage page={{pageno: 'v', headers: [title, 'Epigraph']}}/>
<Epigraph/>

<NewPage page={{pageno: 'vi', headers: [title, 'Preface']}}/>
<Preface/>

<NewPage page={{pageno: 'vii', headers: [title, 'Foreword']}}/>
<Foreword/>
