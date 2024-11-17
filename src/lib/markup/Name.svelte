<script>
    export let ggp = ''   // '1', '2', ...
    export let sup = ''
    export let life = ''

    function superHtml() {
        let ord = 'th'
        if (ggp !== '') {
            if (ggp === '1') ord = 'st'
            else if (ggp === '2') ord = 'nd'
            else if (ggp === '3') ord = 'rd'
            return `<sup>${ggp}<sup>${ord}</sup>ggp</sup>`
        }
        if (sup !== '') {
            return `<sup>${sup}</sup>`
        }
        return ''
    }
    function lifeHtml() {
        return (life === '') ? '' : ` (${life})`
    }
</script>
<span class='font-bold'><slot></slot></span>
{@html superHtml()}
{@html lifeHtml()}