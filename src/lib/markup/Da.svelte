<script>
    import { Popover } from 'flowbite-svelte'

    export let node
    export let rel = true       // add relationship superscript
    export let life = true      // add life span

    if (! node) {
        throw new Error(`Svelte component 'Da' was passed a null node`)
    }

    // Used only in the Popover title
    function daFull() {
        if (!gen) return 'Sibling'
        if (gen===1) return `Parent`
        if (gen===2) return `Grand Parent`
        if (gen===3) return `1st GGP`
        if (gen===4) return `2nd GGP`
        if (gen===5) return `3rd GGP`
        return `${gen-2}th GGP`
    }

    // Relationship superscript appended to name
    function superHtml() {
        return `<sup>` + daAbbr() + '</sup>'
    }
    
    function daAbbr() {
        if (!gen) return 'Offspring'
        if (gen===1) return `Par`
        if (gen===2) return `GP`
        if (gen===3) return `1<sup>st</sup>GGP`
        if (gen===4) return `2<sup>nd</sup>GGP`
        if (gen===5) return `3<sup>rd</sup>GGP`
        return `${gen-2}<sup>th</sup>GGP`
    }
    
    const {person, father, mother, child, gen, seq} = node
    const prefix = person.namePrefix()
    const given = person.nameGiven()
    const surnames = person.nameSurnames()
    // const suffix = person.nameSuffixNoSeq()
    const fullName = [prefix, given, surnames].join(' ')

    // const isFemale = person.isFemale()
    // const isDeceased = person.isDeceased()
    // const isImmigrant = person.isImmigrant()
    // const fileId = person.fileId()

    const lifeSpan = person.lifeSpan()
    const birthCountry = person.birthCountry()
    const birthYear = person.birthYear()
    const deathYear = person.deathYear()
    const deathCountry = person.deathCountry()
    const ageStr = person.ageString()

    const title = daFull() + fullName
    const rows = [
        ['Born', person.birthDate().str()+'<br/>'
            + person.birthPlace().text()],
        ['Died', person.deathDate().str() + '<br/>'
            + person.deathPlace().text() + '<br/>'
            + person.ageString()],
    ]
</script>

<span class='ordinal font-bold'>{fullName}</span>
<Popover title={title} trigger='click'
    class="w-72 text-sm font-light text-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
    <div class="space-y-2 py-2">
    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
        <tbody>
            {#each rows as row}
                <tr class="odd:bg-white even:bg-gray-50 bg-white border-b ">
                    <td class="px-2 py02 text-left">{row[0]}</td>
                    <td class="px-2 py-0 text-left">{@html row[1]}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
</Popover>
{#if rel}{@html superHtml()}{/if}
{#if life}{lifeSpan}{/if}
