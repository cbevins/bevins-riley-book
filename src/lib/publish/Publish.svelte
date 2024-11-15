<script>
    import { publish } from '$lib/publish'
    export let man      // man = {pages, sections}
    export let parent   // reference to the parent *section*
    export let comp     // Svelte component reference
    export let tag
    export let title = ''
    export let pager = 'newpg'
    export let items = []
    const section = publish(man, parent, comp, tag, title, items, pager)
    // console.log(`<Publish: ${tag} ${title} '${section.header0}' '${section.header1}'>`)
</script>
<svelte:component this={comp} {man} {section} />