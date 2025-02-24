import fs from 'fs'
import { GedcomPlaces } from '../GedcomPlaces.js'

const progName = (process.argv[1]).split('\\').pop()

function reformat(fileName='GedcomPlaces.js') {
    let js = 'export const GedcomPlaces = new Map([\n'
    for(const [key,entry] of GedcomPlaces) {
        const parts = entry.split(', ')
        const geoKey = parts.join(',')
        js += `    ["${key}", "${geoKey}"],\n`
    }
    js += '])\n'
    fs.writeFile(fileName, js, function (err) {
        if (err) throw err
    })
}

reformat()
