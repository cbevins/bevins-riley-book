<script>
    import {P} from '$lib/book'
    export let item
</script>

<div class='w-80'>
<div class="flex justify-center items-center">
    <svg width='200' height='200'>
        <rect x='0' y='0' width='200' height='200' fill='green'/>
    </svg>
</div>
Figure {item.id} - {item.title} Svelte component [{item.comp}]
is currently under construction.
</div>