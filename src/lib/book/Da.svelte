<script>
    import { Name } from '$lib/book'
    export let name
    export let gen
    let g = gen
    let ord = 'th'
    let txt = 'ggp'
    if (gen === '1') {
        ord = 'st'
    } else if (gen === '2') {
        ord = 'nd'
    } else if (gen === '3') {
        ord = 'rd'
    } else if (gen === '0') {
        txt = 'gp'
        g = ''
        ord = ''
    } else if (gen === '-1') {
        txt = 'p'
        g = ''
        ord = ''
    }
</script>
<Name>{name}</Name><sup>{g}<sup>{ord}</sup>{txt}</sup>