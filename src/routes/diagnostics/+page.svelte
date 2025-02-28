<script>
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import SylvanDiagnostics from './SylvanDiagnostics.svelte'
    const sylvan = getSylvan()
    const subjectNameKey = 'CollinDouglasBevins1952'
    const prefix = 'BH'
</script>
<SylvanDiagnostics {sylvan} subjectNameKey='CollinDouglasBevins1952' prefix='BH'/>
<SylvanDiagnostics {sylvan} subjectNameKey='BarbaraJeanneRiley1953' prefix='RT'/>
