<script>
    import { Book, setup } from '$lib/publish'
    
    import Body from './body/comp.svelte'
    import Front from './front/comp.svelte'

    import PublishBody from './body/publish.svelte'
    let sections = new Map()
    let pages = []
</script>

<Book>
    <PublishBody/>
    <!-- <Body {sections} {pages}/>
    <Front {sections}/> -->
</Book>