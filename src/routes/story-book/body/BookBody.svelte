<script>
    import Introduction from './introduction/IntroPart.svelte'
    import Bevins from './bevins/Lineage.svelte'
    import Collins from './collins/Lineage.svelte'
    import DeReus from './dereus/Lineage.svelte'
    import Heddens from './heddens/Lineage.svelte'
    import Nattrass from './nattrass/Lineage.svelte'
    import Nelson from './nelson/Lineage.svelte'
    import Riley from './riley/Lineage.svelte'
    import Trombley from './trombley/Lineage.svelte'

    export let man
</script>

<Introduction {man} part='intro'/>
<Bevins {man} part='bevins'/>
<Collins {man} part='collins'/>
<Heddens {man} part='heddens'/>
<Nattrass {man} part='nattrass'/>
<Riley {man} part='riley'/>
<DeReus {man} part='dereus'/>
<Trombley {man} part='trombley'/>
<Nelson {man} part='nelson'/>
