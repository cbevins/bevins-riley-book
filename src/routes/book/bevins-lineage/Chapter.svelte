<script>
    // This is a Chapter composed of Sections
    import Intro from './Intro.svelte'
    import BevinsBolt from './BevinsBolt.svelte'
    import NewboldVerdon from './NewboldVerdon.svelte'
    import USFC from './BevinsBoltCensus.svelte'

    export let id = ''      // something like '<book>-<chapter>'
    export let pageno = ''  // something like '123'
    export let part = ''    // part, something like 'Chapter 1'
    export let title = ''   // part title, something like 'The Bevins Lineage'

    let pn = parseInt(pageno)
    const sections = [  // [component, id, pageno ]
        [Intro, id+'-intro', ],
        [BevinsBolt, id+'-bevinsbolt'],
        [NewboldVerdon, id+'newboldverdon'],
        [USFC, id+'-usfc']
    ]
</script>

{#each sections as [component, id], n}
    <svelte:component this={component} {id} {part} {title} pageno={pn+n}}/>
{/each}
