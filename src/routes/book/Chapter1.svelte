<script>
    import { register, P } from '$lib/book'

    export let part
    export let level
    const title = 'Bevins Lineage'
    const pages = 20
</script>

<div use:register={{part, level, title, pages}}/>

<P>{level} {part} {title}</P>
<p class="text-base mt-3 text-black font-normal indent-16 font-serif">
[Content: Chapter 1 Preamble]
</p>
