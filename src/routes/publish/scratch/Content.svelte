<script>
    export let man
    export let comp
    console.log($$restProps)
    const pages = man.pages
    const page = pages[pages.length-1]
    page.comps.push({type: 'comp', obj: comp, props: $$restProps})
</script>