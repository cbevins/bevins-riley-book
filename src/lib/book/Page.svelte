<script>
    import PageContent from './PageContent.svelte'
    import PageFooter from './PageFooter.svelte'
    import PageHeader from './PageHeader.svelte'

    export let hl = ''  // header margin left text
    export let hc = ''  // header margin center text
    export let hr = ''  // header margin right text
    export let fl = ''  // footer margin left text
    export let fc = ''  // footer margin center text
    export let fr = ''  // footer margin right text
</script>

<div style="page-break-before: always"/>
<div class='relative w-[8.5in] h-[11in] border-2 border-slate-400'>
    <PageHeader left={hl} center={hc} right={hr}/>
    <PageContent><slot></slot></PageContent>
    <PageFooter left={fl} center={fc} right={fr}/>
</div>
<div style="page-break-after: always"/>