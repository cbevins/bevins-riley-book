<script>
    import { Book } from '$lib/markup'
    import { Manifest, ManifestTable, Publish } from '$lib/publish'

    import BodyManifest from './scratch/BodyManifest.svelte'
    import FaceManifest from './scratch/FaceManifest.svelte'
    import FrontManifest from './scratch/FrontManifest.svelte'

    // Define the Book
    const author = 'Collin Douglas Bevins'
    const copyright = '2025'
    const title = 'Our Ancestors through Time and Place'
    const subtitle = 'History and Geography of the Bevins and Riley Families'
    const showBreak = true

    // Create an un-numbered Manifest for the cover, title, frontispiece, etc
    const faceMan = new Manifest('face')
    
    // Create a roman-numeral front matter Manifest
    const frontMan = new Manifest('front')

    // Create an arabic-numeral Manifest for the book body and back matter
    const bodyMan = new Manifest('body')
</script>

<Book>
    <!-- Compile the face Manifest -->
    <FaceManifest man={faceMan}/>

    <!-- Compile the front Manifest -->
    <FrontManifest man={frontMan}/>

    <!-- Compile the body Manifest -->
    <BodyManifest man={bodyMan}/>

    <!-- Temporaroly display the Body manifest -->
    <!-- <ManifestTable man={bodyMan}/> -->
    <Publish man={bodyMan} {title} {showBreak}/>
</Book>