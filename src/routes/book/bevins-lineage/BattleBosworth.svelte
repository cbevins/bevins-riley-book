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
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet.
</p>

<p>
  Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
  orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
  ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis
  ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et
  a urna. Ut id ornare felis, eget fermentum sapien.
</p>
