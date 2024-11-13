<script>
    import { getManifest } from './manifest.js'
    import ManifestTable from './ManfiestTable.svelte'

    // man{front, body}
    const man = getManifest()
    console.log('Refresh with pages', man.body.pages.length)
    // console.log(man.body)
</script>
Imprint
<ManifestTable man={man.body}/>
