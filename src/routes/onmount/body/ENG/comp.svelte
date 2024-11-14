<script>
    import { Pager } from '$lib/imprint'
    import DEV from './DEV/comp.svelte'
    import LEI from './LEI/comp.svelte'

    export let collection
    export let pages
    export let parent
    export let seq

    const tag = 'ENG'
    const self = parent + '-' + tag
    const section = {self, seq, page: pages.length}
</script>

<Pager {pages} {section}/>
<div class='text-xl'>{seq} = {self}</div>

<DEV {collection} {pages} parent={self} seq={seq+'-01'}/>
<LEI {collection} {pages} parent={self} seq={seq+'-02'}/>