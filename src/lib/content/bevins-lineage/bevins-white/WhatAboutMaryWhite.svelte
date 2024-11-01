<script>
    import P from '$lib/book/P.svelte'
    import Section from '$lib/book/Section.svelte'

    export let id = ''          // Chapter element id
    export let newpage = true   // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['That ABout Mary White?']
</script>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left">
<P>Our 2nd GGF William Longford Bevins was born on 4 Mar 1815 in Newbold Verdon,
Leicestershire, England.
</P>

