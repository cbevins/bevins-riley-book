<script>
    import Book from '../../lib/publish/Book.svelte';
import Body from './body/comp.svelte'
    import Front from './front/comp.svelte'

    let sections = new Map()
    let pages = []
</script>

<Book>
    <Body {sections} {pages}/>
    <Front {sections}/>
</Book>