<script>
    export let pages
    export let section

    $: num = pages.length + 1
    $: section.page = num
    $: pages.push(section)
</script>
<!-- Page {num} -->
 <hr>