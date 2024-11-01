<script>
    import FrontCover from '$lib/content/FrontCover.svelte'
    import Introduction from './Introduction.svelte'
    import Chapter1 from './Chapter1.svelte'
    import Chapter1Section1 from './Chapter1Section1.svelte'
    import Chapter2 from './Chapter2.svelte'
</script>

<FrontCover />
<Introduction part='Introduction' level='1' />
<Chapter1 part='Chapter 1', level='1' />
<Chapter1Section1 part='Section 1', level='2' />
<Chapter2 part='Chapter 2', level='1' />