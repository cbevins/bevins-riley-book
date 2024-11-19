<script>
    import { Book } from '$lib/markup'
    import { Manifest, ListOfFeatures, ManifestTable, Publish, TableContents } from '$lib/publish'

    import BodyManifest from './body/Manifest.svelte'
    import FaceManifest from './face/Manifest.svelte'
    import FrontManifest from './front/Manifest.svelte'

    // Define the Book
    const author = 'Collin Douglas Bevins'
    const copyright = '2025'
    const book = 'Our Ancestors through Time and Place'
    const subtitle = 'History and Geography of the Bevins and Riley Families'
    const showBreak = true

    // Create an un-numbered Manifest for the cover, title, frontispiece, etc
    const faceMan = new Manifest('face')
    
    // Create a roman-numeral front matter Manifest
    const frontMan = new Manifest('front')

    // Create an arabic-numeral Manifest for the book body and back matter
    const bodyMan = new Manifest('body')
</script>

<div class=" mt-4 mb-2 p-2 bg-blue-100 border-2 border-black rounded shadow-lg shadow-slate-500 overflow-hidden">
    The Bevins-Riley Storybook currently, has {bodyMan.page} pages.
</div>

<Book>
    <!-- Compile the face Manifest -->
    <FaceManifest man={faceMan}/>

    <!-- Compile the front Manifest -->
    <FrontManifest man={frontMan}/>

    <!-- Compile the body Manifest -->
    <BodyManifest man={bodyMan}/>

    <!-- Temporarily display the Body manifest -->
    <!-- <ManifestTable man={bodyMan}/> -->
    <TableContents man={bodyMan} {book} chapter='Table of Contents'/>
    <ListOfFeatures man={bodyMan} name='Figure' items={bodyMan.figures}
        {book} chapter='List of Figures'/>
    <ListOfFeatures man={bodyMan} name='Map' items={bodyMan.maps}
        {book} chapter='List of Maps'/>
    <ListOfFeatures man={bodyMan} name='Table' items={bodyMan.tables}
        {book} chapter='List of Tables'/>
        
    <Publish man={bodyMan} {book} {showBreak}/>
</Book>
