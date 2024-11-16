<script>
    export let man, depth, folder, title
    
    const {pages, sections, pathSep, sectionSep} = man

    // parent is the last pages section with depth-1
    let parent = null
    for(let i=0; i<pages.length; i++) {
        const page = pages[i]
        for (let j=0; j<page.comps.length; j++) {
            const {type, obj} = page.comps[j]
            if (type === 'section' && obj.depth === depth-1)
                parent = obj
        }
    }

    const page = pages.length - 1
    let path = folder
    let seq = '00'
    const section = {depth, page, parent, folder, title, path, seq, sections: []}
    if (parent) {
        section.path = parent.path + pathSep + folder
        section.seq = parent.seq + sectionSep
            + `${parent.sections.length+1}`.padStart(2,'0')
        parent.sections.push(section)
    }

    pages[page].comps.push({type: 'section', obj: section})
    sections.set(section.seq, section)
    // console.log(`Section ${depth} page ${page}: '${folder}' = '${title}' ${seq} ${name}`)
</script>
<slot></slot>