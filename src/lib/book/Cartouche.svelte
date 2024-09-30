<script>
    import { gxmlStr } from '$lib/gxml/gxmlStr.js'
    import { nest } from '$lib/gxml/gxmlSvg.js'
    import { getSylvan } from '$lib/sylvan/singletons.js'
    import { flagPinGxml } from '$lib/flags/flagPinsGxml.js'

    export let personKey
    export let wd = 600
    export let ht = 100
    export let fontSize = 16
    export let fontFamily = 'sans-serif'

    // Gather Person info of possible interest
    const sylvan = getSylvan()
    const person = sylvan.people().find(personKey)
    if (! person) throw new Error(`Unknown personKey '${personKey}'`)

    const prefix = person.namePrefix()
    const given = person.nameGiven()
    const surnames = person.nameSurnames()
    const suffix = person.nameSuffixNoSeq()
    const fullName = [prefix, given, surnames.toUpperCase()].join(' ')

    const isFemale = person.isFemale()
    const isDeceased = person.isDeceased()
    const isImmigrant = person.isImmigrant()
    const fileId = person.fileId()
    const birthCountry = person.birthCountry()
    const birthYear = person.birthYear()
    const deathYear = person.deathYear()
    const deathCountry = person.deathCountry()
    const ageStr = person.ageString()
    const genderColor = isFemale ? 'magenta' : 'blue'
    
    let birthLine = person.birthLine() + ' [' + birthCountry + ']'
    let deathLine = person.deathLine()
    if (isDeceased) deathLine =  'd. ' + deathLine + ' [' + deathCountry + ']'

    const flagPin = flagPinGxml(birthCountry, 0, 0, 1, genderColor)

    const lines = [
        fullName,
        'b. '+birthLine,
        deathLine
    ]
    const lineHt = ht / (lines.length+1)

    const els = []
    els.push({el: 'rect', x: 0, y: 0, width: wd, height: ht,
        fill: 'none', stroke: genderColor, 'stroke-width': 1, rx: 50})
    els.push(flagPin)
    for(let i=0; i<lines.length; i++) {
        els.push({el: 'text',
            x: wd/2 + ht/2,
            y: (i+1)*lineHt,
            'text-anchor': "middle",
            'font-family': fontFamily,
            'font-weight': "lighter",
            'font-size': fontSize, 
            els: [{el: 'inner', content: lines[i]}]
        })
    }
    const cart = {el: 'svg', width: wd, height: ht, els: els}

</script>

{@html gxmlStr(cart)}
