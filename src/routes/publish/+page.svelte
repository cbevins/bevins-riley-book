<script>
    import { Book } from '$lib/markup'
    import { newManifest } from '$lib/publish'
    import BodyManifest from './scratch/BodyManifest.svelte'
    import FaceManifest from './scratch/FaceManifest.svelte'
    import FrontManifest from './scratch/FrontManifest.svelte'
    import ShowManifest from './scratch/ShowManifest.svelte'

    import { Manifest, ManifestTable } from '$lib/publish'

    // Define the Book
    const author = 'Collin Douglas Bevins'
    const copyright = '2025'
    const title = 'Our Ancestors through Time and Place'
    const subtitle = 'History and Geography of the Bevins and Riley Families'

    // Create an un-numbered Manifest for the cover, title, frontispiece, etc
    const face = newManifest(author, copyright, title, subtitle, 'none')
    
    // Create a roman-numeral front matter Manifest
    const front = newManifest(author, copyright, title, subtitle, 'roman')

    // Create an arabic-numeral Manifest for the book body and back matter
    const bodyMan = new Manifest('body')
    const body = newManifest(author, copyright, title, subtitle, 'arabic')
</script>

<Book>
    <!-- Compile the face Manifest -->
    <FaceManifest man={face} depth={0}/>

    <!-- Compile the front Manifest -->
    <FrontManifest man={front} depth={0}/>

    <!-- Compile the body Manifest -->
    <BodyManifest man={bodyMan} depth={1}/>
    <ManifestTable man={bodyMan}/>

    <!-- Temporaroly display the Body manifest -->
    <!-- <ShowManifest man={body}/> -->
</Book>