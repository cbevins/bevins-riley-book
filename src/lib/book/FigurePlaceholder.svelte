<script>
    import {P} from '$lib/book'
    export let item
</script>
<div class="border-2 border-black mt-4 mb-4 p-4 rounded overflow-hidden shadow-lg shadow-slate-500 bg-amber-100">
    <P>The Svelte component [{item.comp}] is currently under construction.</P>
    <svg width='300' height='200'>
        <rect x='100' y='0' width='200' height='200' fill='green'/>
    </svg>
</div>