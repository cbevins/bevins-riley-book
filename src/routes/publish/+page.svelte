<script>
    import { Book, publishInit, Publish, setup } from '$lib/publish'
    import Body from './body/comp.svelte'
    import Front from './front/comp.svelte'
    import Root from './body/publish.svelte'
    import Manifest from './front/Manifest.svelte'
    import Scratch from './scratch/Scratch.svelte'

    // const man = publishInit()
    const parent = null
    let sections = new Map()
    let pages = []
    
    const man = {
        pages: [],
        sections: new Map(),
    }
</script>

<Book>
    <Scratch {man}/>

    <!-- <Publish {man} {parent} comp={Root} tag='UN' title='United Nations'/> -->
    <Manifest {man}/>


    <!-- <Body {sections} {pages}/>
    <Front {sections}/> -->
</Book>