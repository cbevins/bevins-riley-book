<script>
    import { onMount } from 'svelte'
    import { Book } from '$lib/markup'
    import { Manifest, ListOfFeatures, ManifestTable, Publish, TableContents } from '$lib/publish'
    import { TableOfPageHeights } from '$lib/publish'

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
    $: bodyMan = new Manifest('body')

    function pageHts() {
        const limit = 1190
        let id = `body-page-1`
        let el = document.getElementById(id)
        let prev = el.getBoundingClientRect().y
        for (let i=2; i<bodyMan.page; i++) {
            id = `body-page-${i}`
            el = document.getElementById(id)
            if(!el) {
                console.log(`Page ${id} has null Element`)
            } else {
                const y = el.getBoundingClientRect().y
                const ht = y - prev
                if (ht > limit)
                console.log(`Page ${i-1} ht=${y-prev} EXCEEDS ${limit} LIMIT!`)
                prev = y
            }
        }
    }

	onMount(() => { pageHts()
	})
</script>
<div class="fixed top-0 left-0 right-0">
    <a href="#book-table-contents"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xlg text-sm px-2 py-2 focus:outline-none">
        Contents
    </a>
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
    <ListOfFeatures man={bodyMan} {book} type='figure' />
    <ListOfFeatures man={bodyMan} {book} type='map' />
    <ListOfFeatures man={bodyMan} {book} type='table' />
    <ListOfFeatures man={bodyMan} {book} type='sidebar' />
        
    <Publish man={bodyMan} {book} {showBreak}/>
</Book>
<!-- <TableOfPageHeights man={bodyMan} {book} /> -->
