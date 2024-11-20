<script>
    import TimeLineItem from './TimeLineItem.svelte'

    // items is array of [<dt>, <dd>] pairs
    // and <dt> can be an array of description terms
    export let items = []
</script>

<div>
    <div class="mt-8">
        <dl class="bg-blue-100">
            {#each items as item}
                <TimeLineItem {item}/>
            {/each}
        </dl>
    </div>
</div>