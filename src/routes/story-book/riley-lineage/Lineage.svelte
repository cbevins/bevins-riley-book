<script>
    import { BookPart } from '$lib/book'
    import Introduction from './Introduction.svelte'

    export let man  // reference to a {manifest} object
    export let part // display only pages with the part id

    // Maps the Manifest item.comp key to its Svelte component
    const comps = new Map([
        ['RileyIntroduction', Introduction],
    ])
</script>

<BookPart {man} {part} {comps}/>
