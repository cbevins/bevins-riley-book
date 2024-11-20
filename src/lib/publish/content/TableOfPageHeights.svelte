<script>
    import { onMount } from 'svelte'
    import { NewPage } from '$lib/markup'
    export let man
    export let book = ''
    let chapter = 'Table of Page Heights'
    
    onMount(() => {
        for (let i=0; i<10; i++) {
            let p1 = document.getElementById(`body-page-${i}`)
            let r1 = p1.getBoundingClientRect()
            let t1 = r1.top
            console.log(`Page ${i} rect`, r1)
        }
    })
    // function top(id) {
    //     return document.getElementById(id).getBoundingClientRect().top
    // }

    // const items = []
    // let prevTop = top('body-page-0')
    // for(let i=1; i<man.page; i++) {
    //     const thisTop = top(`body-page-${i}`)
    //     items.push(thisTop - prevTop)
    //     console.log(i-1, thisTop - prevTop)
    //     prevTop = thisTop
    // }
</script>
<!-- 
<NewPage {book} {chapter} id={man.folder+'-listOfPageHeights'}/>

<div class="mb-4 text-4xl font-bold text-left">
    Table of Page Heights
</div>

<table class='w-80 mb-8'>
    <thead>
        <tr class="even:bg-white odd:bg-gray-50 bg-white border-b ">
            <th class="text-lg px-2 py-1">Page</th>
            <th class="text-lg px-2 py-1">Height</th>
        </tr>
    </thead>
    <tbody>
        {#each items as ht, n }
            <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                <td class="text-lg px-2 py-1">{n}</td>
                <td class="text-lg px-2 py-1">{ht}</td>
            </tr>
        {/each}
    </tbody>
</table> -->