<script>
    import { P, NewPage } from '$lib/newbook'
    export let toc

    function tocLine(part) {
        let str = ''
        if (part.type === 'chapter')
            str = `Chapter ${part.numb}: ${part.title} [#${part.href}]`
        else if (part.type === 'section')
            str = `${pad(part)} ${part.numb}: ${part.title} [#${part.href}]`
        else if (part.type === 'newpage')
            str = `${pad(part)} ${part.numb}: ${part.title} [#${part.href}]`
        else
            str = `${pad(part)} ${part.type} ${part.numb}: ${part.title} [#${part.href}` // in section ${part.section}]`
        str += `Page ${part.begins}`
        return str
    }

    function pad(item) {
        let str = ''
        for (let i=0; i<4*(item.depth-1); i++) str += '&nbsp;'
        return str
    }
</script>

<NewPage/>
{#each toc.parts as part}
    <P>{@html tocLine(part)}</P>
{/each}
