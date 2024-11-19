<script>
    import { NewPage } from '$lib/markup'
    import ListOfFeatures from './ListOfFeatures.svelte'
    
    export let man
    export let title

    let book = title
    let chapter = 
    let items = man.figures
    let name = 'Figure'
</script>
<ListOfFeatures {man} {name} {items} />
