/**
 * The GEDCOM ASCII file has a lot of '<level> PLAC <text>' records
 * 
 * We need a complete GedcomPlaceKeys Map() that has every unique PLAC <text> as its keys
 * and whose entries are another key into the GeoLocationsJson Map().
 * 
 * This program reads the GEDCOM file and displays those PLAC records whose <text>
 * is not currently in the GeoLocations Map(), and therefore need to be added to it.
 */
import fs from 'fs'
import { file2JsonArray } from '../../file-reader/file2JsonArray.js'
import { parseLine } from '../../gedcom/constructGedcom.js'
import { GedcomPlaceKeys } from '../GedcomPlaceKeys.js'
import { Level0Renames, Level1Renames } from './placeSegmentRenames.js'

const progName = (process.argv[1]).split('\\').pop()

const input = '../../data/gedcoms/AncestryLatest.ged'
// '../data/gedcoms/RootsMagicLatest.ged'

const keepers= [
    'FAM-DIV-PLAC',
    'FAM-MARR-PLAC',
    'INDI-BIRT-PLAC',
    'INDI-DEAT-PLAC',       // 398 missing
    'INDI-EVEN-PLAC',
    'INDI-GRAD-PLAC',
    'INDI-RESI-PLAC',
    // '_PLAC',
    // '_PLAC-STND',
    // '_PLAC-MAP',
    // '_PLAC-MAP-LATI',
    // '_PLAC-MAP-LONG',
]
const keepersSet = new Set()
keepers.forEach(item => keepersSet.add(item))

async function runMissing() {
    console.log(`\n\n${progName} ...`)
    // Convert the GEDCOM ASCII file into a Javascript array of records
    const lines = await file2JsonArray(input)
    console.log(`GEDCOM file '${input}' has ${lines.length} records`)
    console.log('The GedcomPlaceKeys.js file is missing the following PLAC contents:')
    const all = new Map()
    console.log(`${'Context'.padEnd(16)} Unique  Missing`)
    for (let i=0; i<keepers.length; i++) {
        const context = keepers[i]
        // Create an array of PLAC [<text>, <count>] elements matching the context
        const selected = selectLines(lines, context)
        
        // Display those GEDCOM PLAC records that do not have a GedcomPlaceKeys entry
        const missing = missingPlaces(selected)
        console.log(`${context.padEnd(16)} ${(selected.length+'').padStart(6)} `
            + `${(missing.length+'').padStart(6)}`)
        all.set(context, [selected.length, missing])
    }
    writeMissing(all, 'missingGedcomPlaceKeys.js')
}

// Returns an array of GEDCOM [<text>, <count>] elements from lines[] that match 'context'
function selectLines(lines, context) {
    const selectedMap = new Map()
    const contextStack = new Array(20).fill(0)
    for (let i=0; i<lines.length; i++) {
        const data = parseLine(lines[i], i+1)
        if (data) {
            const [level, type, content] = data
            contextStack[level] = type
            const key = (contextStack.slice(0,level+1)).join('-')
            if (key === context) {
                if (! selectedMap.has(content))
                    selectedMap.set(content, 1)
                else
                    selectedMap.set(content, selectedMap.get(content)+1)
            }
        }
    }
    return Array.from(selectedMap.entries()).sort()
}

// Returns an array of the 'selected' elements that are not present in GedcomPlaceKeys
function missingPlaces(selected) {
    const missing = []
    for(let i=0; i<selected.length; i++) {
        const [text, n] = selected[i]
        if (! GedcomPlaceKeys.has(text))
            missing.push([text, n])
    }
    return missing
}

function suggestKey(text) {
    const parts = text.split(',').reverse()
    const codes = []
    for(let i=0; i<parts.length; i++) {
        let part = parts[i].trim()
        part = part.replaceAll('.', ' ')
        part = part.replaceAll('-', ' ')
        part = part.replaceAll('   ', ' ')
        part = part.replaceAll('  ', ' ')
        if (i===0 && Level0Renames.has(part.toLowerCase()))
            part = Level0Renames.get(part.toLowerCase())
        if (i===1 && Level1Renames.has(part.toLowerCase()))
            part = Level1Renames.get(part.toLowerCase())
        codes.push(part)
    }
    return codes.join(',')
}

function writeMissing(all, outputName) {
    // Create some Javascript from the text array
    let js = `// auto-generated by ${progName} on ${new Date().toLocaleString()}\n`
    js += '// The following GEDCOM PLAC text have no entry in GedcomPlaceKeys.js\n'
    js += `export const missingPlaces = [\n`
    for(const [context, entry] of all) {
        const [count, missing] = entry
        js += `    // ${context} has ${count} unique PLAC text, and ${missing.length} are missing.\n`
        for(let i=0; i<missing.length; i++) {
            const [text, n] = missing[i]
            const key = suggestKey(text)
            js += `    ["${text}", "${key}"], // ${n}\n`
        }
    }
    js += ']\n'
    // Write the Javascript to a file for later use
    fs.writeFile(outputName, js, function (err) {
        if (err) throw err
    })
}

function testRecode(places) {
    for(let i=0; i<places.length; i++) {
        const key = suggestKey(places[i])
        console.log(`[${places[i]}] => [${key}]`)
    }
}
await runMissing()
// testRecode([
//     "Athens Twp, Harrison Cty., Ohio, USA",
//     'Asprington, Devon, England'])
