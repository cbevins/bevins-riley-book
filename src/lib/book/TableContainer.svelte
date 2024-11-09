<script>
    export let comp
    export let item
</script>

<div class="border-2 border-black mt-4 mb-4 p-4 rounded overflow-hidden shadow-lg shadow-slate-500 bg-amber-100">
    <svelte:component this={comp} {item}/>
</div>
