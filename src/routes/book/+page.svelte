<script>
    import {getManifest as getBackManifest} from './back-matter/manifest.js'
    import {getManifest as getBodyManifest} from './body/manifest.js'
    import {getManifest as getFrontManifest} from './front-matter/manifest.js'
    import { P } from '$lib/book'
    import ManifestTable from './ManfiestTable.svelte'

    function addEmbeds(man) {
        for(let i=0; i<man.length; i++) {
            const item = man[i]
            if(item.length < 5) item.push([])
        }
    return man
    }
    const frontManifest = addEmbeds(getFrontManifest())
    console.log(frontManifest)
    const bodyManifest = addEmbeds(getBodyManifest())
    const backManifest = addEmbeds(getBackManifest())
</script>
<P>YEP</P>
<ManifestTable man={frontManifest} title="Front Matter Manifest"/>
<ManifestTable man={bodyManifest} title="Body Manifest"/>
<ManifestTable man={backManifest} title="Back Matter Manifest" />
