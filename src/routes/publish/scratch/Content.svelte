<script>
    export let man
    export let comp
    export let file

    console.log('Content props:', $$restProps)
    const pages = man.pages
    const page = pages[pages.length-1]
    page.comps.push({type: 'comp', obj: comp, props: $$restProps})
</script>