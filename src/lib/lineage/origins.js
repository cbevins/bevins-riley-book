import { Sylvan } from '../sylvan/Sylvan.js'
import { Channels } from './Channels.js'
import { _gedcomData } from '../gedcom/_gedcomDataAncestry.js'

const sylvan = new Sylvan(_gedcomData)
const collin = sylvan.people().find('CollinDouglasBevins1952')
const barbara = sylvan.people().find('BarbaraJeanneRiley1953')
const drew = sylvan.people().find('DrewallynBevinsRiley1982')

// Branch specs for grand parent lineages
const branchSpecsGp = [
    ['bevins', collin, 'SamuelBevins1881'],
    ['collins', collin, 'HattieJaneCollins1889'],
    ['heddens', collin, 'RalphVernonHeddens1909'],
    ['nattrass', collin, 'MargaretEvaNattrass1914'],

    ['riley', barbara, 'SheldonJamesRiley1902'],
    ['dereus', barbara, 'GladysMaeDeReus1907'],
    ['trombley', barbara, 'HaroldRichardTrombley1901'],
    ['nelson', barbara, 'MyrtleEstelleNelson1899'],
]

// Branch specs for GREAT grand parent lineages
const branchSpecsGgp = [
    // bevins-white, parents of 'SamuelBevins1881'
    ['bevins', collin, 'WilliamAlfredBevins1843'],
    ['white', collin, 'MaryAnnWhite1848'],
    // collins-shofner, parents of 'HattieJaneCollins1889'
    ['collins', collin, 'GeorgeWashingtonCollins1870'],
    ['shofner', collin, 'FrancesMarieShofner1871'],
    // heddens-lemler parents of 'RalphVernonHeddens1909'
    ['heddens', collin, 'RalphRoyHeddens1890'],
    ['lemler', collin, 'MeartiaMaeLemler1889'],
    // nattrass-myhre, parents of 'MargaretEvaNattrass1914'
    ['nattrass', collin, 'HarrySingNattrass1888'],
    ['myhre', collin, 'GinaOliviaMyhre1890'],

    // riley-robson, parents of 'SheldonJamesRiley1902'
    ['riley', barbara, 'JeremiahRiley1860'],
    ['robson', barbara, 'CarolineCarrieRobson1874'],
    // dereus-poulson, parents of 'GladysMaeDeReus1907'
    ['dereus', barbara, 'PeterDeReus1862'],
    ['poulson', barbara, 'HelenSophia(Ella)Poulson1866'],
    // ['poulson', barbara, 'HelenSophia(Ella)Poulson1866'],
    // trombly-cyr, parents of 'HaroldRichardTrombley1901'
    ['trombley', barbara, 'GeorgeThomasTrombley1879'],
    ['cyr', barbara, 'FlorenceCyr1879'],
    // nelson-peterson, parents of 'MyrtleEstelleNelson1899'
    ['nelson', barbara, 'CarlJohanGottfredNelson1870'],
    ['peterson', barbara, 'HuldaSophiaPeterson1876'],
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

    _addBirthPlace(node) {
        const place = node.person.birthPlace()
        const keys = place.keys()
        let keyDepth = 2
        if (keys[0] === 'USA') keyDepth = 3
        const key = place.names().slice(0,keyDepth).join(',')
        if (! this.freqMap.has(key)) this.freqMap.set(key, [])
        const persons = this.freqMap.get(key)
        persons.push(node.person)
        this.freqMap.set(key, persons)
    }

    _descendNode(node, depth=0) {
        this._addBirthPlace(node)
        if (node.father) this._descendNode(node.father, depth+1)
        if (node.mother) this._descendNode(node.mother, depth+1)
    }

    report() {
        console.log(`\nAncestral Origins of ${this.subjectNode.person.fullName()}`)
        const ar = Array.from(this.freqMap.entries()).sort()
        let n = 0
        for (let i=0; i<ar.length; i++) {
            const [key, persons] = ar[i]
            n += persons.length
            const years = []
            for(let j=0; j<persons.length; j++) {
                years.push(persons[j].birthYear())
            }
            years.sort()
            console.log(`${(persons.length+'').padStart(4)} ${key.padEnd(32)} (${years.toString()})`)
        }
        console.log(`${(n+'').padStart(4)} Ancestors born in ${ar.length} locations`)
    }
}

const origins = new Origins(sylvan)
for(let i=0; i<branchSpecsGgp.length; i++) {
    const [label, rootPerson, subjectKey] = branchSpecsGgp[i]
    origins.birthOrigins(label, rootPerson, subjectKey).report()
}