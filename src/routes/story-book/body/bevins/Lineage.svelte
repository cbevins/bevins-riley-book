<script>
    import { BookPart } from '$lib/book'
    import BevinsImmigrantsTable from './migration/BevinsImmigrantsTable.svelte'
    import BevinsIntroduction from './intro/A.svelte'
    import BevinsMigrations from './migration/A.svelte'
    import BevinsOrigins from './origins/A.svelte'
    import BevinsTimeLine from './migration/TimeLine.svelte'
    import MaryAnnWhite from './origins/MaryAnnWhite.svelte'
    import BattleBosworth from './origins/BattleBosworth.svelte'
    import WilliamAlfredBevins from './origins/WilliamAlfredBevins.svelte'

    export let man  // reference to a {manifest} object
    export let part // display only pages with the part id

    // Maps the Manifest item.comp key to its Svelte component
    const comps = new Map([
        ['BevinsIntroduction', BevinsIntroduction],
        ['BevinsOrigins', BevinsOrigins],
        ['WilliamAlfredBevins', WilliamAlfredBevins],
        ['BattleBosworth', BattleBosworth],
        ['MaryAnnWhite', MaryAnnWhite],
        ['BevinsMigrations', BevinsMigrations],
        ['BevinsImmigrantsTable', BevinsImmigrantsTable],
        ['BevinsTimeLine', BevinsTimeLine],
    ])
</script>

<BookPart {man} {part} {comps}/>
