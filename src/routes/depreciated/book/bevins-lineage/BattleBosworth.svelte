<script>
    import P from '$lib/book/P.svelte'
    import Section from '$lib/book/Section.svelte'

    export let id = ''          // Chapter element id
    export let newpage = false  // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['The Battle of Bosworth']
</script>

<div class="float-left w-[3in] h-[4.5in] px-4 mr-4 text-left rounded-xl bg-green-200">
    <Section {id} {part} {title} {captions} {newpage}/>
    The Battle of Bosworth (or Bosworth Field) was fought on 22 Aug 1485
    between the reigning King Richard III of the House of York,
    and an alliance of Lancastrians and Yorkist led by Henry Tudor.
    This last significant battle of the War of the Roses was first met
    on Ambion Hill just south of Market Bosworth.
    Richard was killed in this battle, ending the Plantagenet dynasty
    and ushering in the Tudor dynasty, making it one of the defining
    events of English history.
    This moment was enshrined at the end of William Shakespeare’s play Richard III.
</div>
