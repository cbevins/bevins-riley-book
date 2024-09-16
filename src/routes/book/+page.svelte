<script>
    import FrontCover from './FrontCover.svelte'
    import Page from '$lib/book/Page.svelte'
    const bookTitle = 'Our Ancestors through Time and Place'
    const partNo = 'Chapter 1'
    const partTitle = 'The Bevins Lineage'
</script>

<FrontCover/>
{#each [1,2,3,4,5,6,7,8,9] as page}
    <Page hl={partNo} hc={partTitle} fl={bookTitle} fr={'Page '+page}>
        Page {page} Content
    </Page>
{/each}