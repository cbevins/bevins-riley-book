import fs from 'fs'
import { Sylvan } from '../sylvan/Sylvan.js'
import { Channels } from './Channels.js'
import { _gedcomData } from '../gedcom/_gedcomDataAncestry.js'
import { GedcomPlaceKeys } from '../places/GedcomPlaceKeys.js'

const sylvan = new Sylvan(_gedcomData)
const collin = sylvan.people().find('CollinDouglasBevins1952')
const barbara = sylvan.people().find('BarbaraJeanneRiley1953')
const drew = sylvan.people().find('DrewallynBevinsRiley1982')

const branchSpecs = [
    // Branch specs for GREAT grand parent lineages
    ['Bevins', collin, 'SamuelBevins1881'],
    ['Collins', collin, 'HattieJaneCollins1889'],
    ['Heddens', collin, 'RalphVernonHeddens1909'],
    ['Nattrass', collin, 'MargaretEvaNattrass1914'],
    ['Riley', barbara, 'SheldonJamesRiley1902'],
    ['Dereus', barbara, 'GladysMaeDeReus1907'],
    ['Trombley', barbara, 'HaroldRichardTrombley1901'],
    ['Nelson', barbara, 'MyrtleEstelleNelson1899'],

    // Branch specs for Gret GrandParent lineages
    // bevins-white, parents of 'SamuelBevins1881'
    ['Bevins-Bevins', collin, 'WilliamAlfredBevins1843'],
    ['Bevins-White', collin, 'MaryAnnWhite1848'],
    // collins-shofner, parents of 'HattieJaneCollins1889'
    ['Collins-Collins', collin, 'GeorgeWashingtonCollins1870'],
    ['Collins-Shofner', collin, 'FrancesMarieShofner1871'],
    // heddens-lemler parents of 'RalphVernonHeddens1909'
    ['Heddens-Heddens', collin, 'RalphRoyHeddens1890'],
    ['Heddens-Lemler', collin, 'MeartiaMaeLemler1889'],
    // nattrass-myhre, parents of 'MargaretEvaNattrass1914'
    ['Nattrass-Nattrass', collin, 'HarrySingNattrass1888'],
    ['Nattrass-Myhre', collin, 'GinaOliviaMyhre1890'],

    // riley-robson, parents of 'SheldonJamesRiley1902'
    ['Riley-Riley', barbara, 'JeremiahRiley1860'],
    ['Riley-Robson', barbara, 'CarolineCarrieRobson1874'],
    // dereus-poulson, parents of 'GladysMaeDeReus1907'
    ['Dereus-Dereus', barbara, 'PeterDeReus1862'],
    ['Dereus-Poulson', barbara, 'HelenSophia(Ella)Poulson1866'],
    // trombly-cyr, parents of 'HaroldRichardTrombley1901'
    ['Trombley-Trombley', barbara, 'GeorgeThomasTrombley1879'],
    ['Trombley-Cyr', barbara, 'FlorenceCyr1879'],
    // nelson-peterson, parents of 'MyrtleEstelleNelson1899'
    ['Nelson-Nelson', barbara, 'CarlJohanGottfredNelson1870'],
    ['Nelson-Peterson', barbara, 'HuldaSophiaPeterson1876'],

    // Branch specs for earlier lineages
]

export class Origins {
    constructor(sylvan) {
        this.freqMap = new Map()
        this.rootPerson = null
        this.branchKey = null
        this.label = 'Unlabeled'
        this.lineage = null
        this.subjectNode = null
        this.sylvan = sylvan
    }

    birthOrigins(label, rootPerson, branchKey) {
        this.freqMap = new Map()
        this.label = label
        this.rootPerson = rootPerson
        this.branchKey = branchKey
        this.lineage = new Channels(rootPerson, true, branchKey)
        this.subjectNode = this.lineage.branchNode()
        this._descendNode(this.subjectNode)
        return this
    }

    _addBirthPlaceDEP(node) {
        const place = node.person.birthPlace()
        const keys = place.keys()
        let keyDepth = 2
        if (keys[0] === 'USA') keyDepth = 3
        const key = place.names().slice(0,keyDepth).join(',')
        if (! this.freqMap.has(key)) this.freqMap.set(key, [])
        const nodes = this.freqMap.get(key)
        nodes.push(node)
        this.freqMap.set(key, nodes)
    }

    _addBirthPlace(node, useGeoKeys=false) {
        const place = node.person.birthPlace()
        let keys
        if (useGeoKeys) {
            // Get the location keys from either the found GeoLocationDb keys
            keys = place.names().slice(0,keyDepth).join(',')
        } else {
            // Or directly from the GedcomPlaceKeys, since we don't need lat,lng
            keys = GedcomPlaceKeys.get(place.text()).split(',')
        }
        let keyLeng = keys.length
        let keyDepth = keyLeng
        if (keyLeng) {
            if (keys[0] === 'USA') keyDepth = Math.min(3, keyLeng)
            else if (keyLeng > 1 && keys[0] === 'CAN' && keys[1] === 'QC') keyDepth = Math.min(3, keyLeng)
            else keyDepth = Math.min(2, keyLeng)
        }
        // const key = place.names().slice(0,keyDepth).join(',')
        const key = (keys.slice(0,keyDepth)).join(',')
        if (! this.freqMap.has(key)) this.freqMap.set(key, [])
        const nodes = this.freqMap.get(key)
        nodes.push(node)
        this.freqMap.set(key, nodes)
    }

    _descendNode(node, depth=0) {
        this._addBirthPlace(node)
        if (node.father) this._descendNode(node.father, depth+1)
        if (node.mother) this._descendNode(node.mother, depth+1)
    }

    knownCountry(country) {
        if (['Unknown', 'unknown', ''].includes(country)) return false
        return true
    }

    report(fileName) {
        let str = ''
        // freqMap is <locationKey> => [<nodes>],
        // so array is [ [locationKey, nodes]]
        const ar = Array.from(this.freqMap.entries()).sort()
        let n = 0
        let m = 0
        for (let i=0; i<ar.length; i++) {
            let [key, nodes] = ar[i]
            str += `\n'${key}' Location has ${nodes.length} Ancestors:\n`
            nodes.sort((a, b) => { return b.person.birthYear() - a.person.birthYear()})
            n += nodes.length
            for(let j=0; j<nodes.length; j++) {
                const node = nodes[j]
                const person = node.person
                const born =  person.birthCountry()
                const died = person.deathCountry()
                let imm = '   '
                if (this.knownCountry(born) && this.knownCountry(died) && born !== died) {
                    imm = '***'
                    m++
                }
                str += `     ${imm} ${person.birthYear()} g${node.gen}  ${person.nameKey()}, ${person.fullName()} `
                    + `[b:${person.birthPlace().keys()}, d:${person.deathPlace().keys()}]\n`
            }
        }
        // Trace lineage
        let trace = ''
        let child = this.subjectNode.child
        let depth = 1
        let c = '|->'   // String.fromCharCode(766)
        while(child) {
            trace += `g${child.gen}: ${' '.padStart(4*depth++)} ${c} ${child.person.label()}\n`
            child = child.node
        }
        str = `g${this.subjectNode.gen}: ${this.subjectNode.person.label()}\n`
            + trace + '\n'
            + `has ${n} Ancestors born in ${ar.length} Locations with ${m} possible Immigrants\n`
            + str
        fs.writeFile(fileName, str, function (err) {
            if (err) throw err
        })
        console.log(`Output was written to '${fileName}'`)
    }
}


const origins = new Origins(sylvan)
for(let i=0; i<branchSpecs.length; i++) {
    const [label, rootPerson, subjectKey] = branchSpecs[i]
    const fileName = './output/Origins-' + label + '.txt'
    origins.birthOrigins(label, rootPerson, subjectKey).report(fileName)
}