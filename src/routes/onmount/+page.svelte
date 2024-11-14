<script>
    import Body from './body/comp.svelte'
    import Front from './front/comp.svelte'

    let collection = new Map()
    let pages = []
</script>

<div class='text-xl'>Main Page</div>
<Body {collection} {pages}/>
<Front {collection}/>