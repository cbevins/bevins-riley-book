<script>
    import { BookPart } from '$lib/book'
    import BevinsImmigrantsTable from './BevinsImmigrantsTable.svelte'
    import BevinsIntroduction from './Introduction.svelte'
    import BevinsOrigins from './Origins.svelte'
    import BevinsTimeLine from './TimeLine.svelte'

    export let man  // reference to a {manifest} object
    export let part // display only pages with the part id

    // Maps the Manifest item.comp key to its Svelte component
    const comps = new Map([
        ['BevinsIntroduction', BevinsIntroduction],
        ['BevinsImmigrantsTable', BevinsImmigrantsTable],
        ['BevinsOrigins', BevinsOrigins],
        ['BevinsTimeLine', BevinsTimeLine],
    ])
</script>

<BookPart {man} {part} {comps}/>
