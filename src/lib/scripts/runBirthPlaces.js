/**
 * function birthPlacesByBranch() returns an array of records
 * containing a birth place (country-state-county or country-region)
 * with a nested array of records of lineages branches,
 * each with a nested array of records of ancestor nodes.
 * Pass the branchSpecsGp array for the 8 grand-parent lineages,
 * or the branchSpecsGgp for the 16 great-grand-parent lineages.
 */
import { Sylvan } from '../sylvan/Sylvan.js'
import { Channels } from '../lineage/Channels.js'
import { _gedcomData } from '../gedcom/_gedcomDataRootsMagic.js'
import { PlaceKeys } from './PlaceKeys.js'
import { BirthPlaceText } from './BirthPlaceText.js'

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
    // nattrass-yhre, parents of 'MargaretEvaNattrass1914'
    ['nattrass', collin, 'HarrySingNattrass1888'],
    ['myhre', collin, 'GinaOliviaMyhre1890'],

    // riley-robson, parents of 'SheldonJamesRiley1902'
    ['riley', barbara, 'JeremiahRiley1860'],
    ['robson', barbara, 'CarolineCarrieRobson1874'],
    // dereus-poulson, parents of 'GladysMaeDeReus1907'
    ['dereus', barbara, 'PeterDeReus1862'],
    ['poulson', barbara, 'HelenSophia(Ella)Poulson1860'],
    // ['poulson', barbara, 'HelenSophia(Ella)Poulson1866'],
    // trombly-cyr, parents of 'HaroldRichardTrombley1901'
    ['trombley', barbara, 'GeorgeThomasTrombley1879'],
    ['cyr', barbara, 'FlorenceCyr1879'],
    // nelson-peterson, parents of 'MyrtleEstelleNelson1899'
    ['nelson', barbara, 'CarlJohanGottfredNelson1870'],
    ['peterson', barbara, 'HuldaSophiaPeterson1876'],
]

export function birthPlacesByBranch(branchSpecs) {
    // Map() of <placeKey> => <branchMap>
    const birthPlaceMap = new Map()

    function descendNode(node, branchKey, depth=0) {
        addBirthPlace(node, branchKey)
        if (node.father) descendNode(node.father, branchKey, depth+1)
        if (node.mother) descendNode(node.mother, branchKey, depth+1)
    }

    function addBirthPlace(node, branchKey) {
        // Determine standard place name (like 'USA, MN, Itasca, Grand Rapids')
        const rawPlace = node.person.birthPlace().text()
        const stdPlace = BirthPlaceText.get(rawPlace)
        if (! stdPlace) {
            stdPlace = `MISSING STD BIRTH PLACE FOR: ${rawPlace}`
            console.log(stdPlace)
        }
        // Build place key from canonical place name (like 'USA-MN-Itasca')
        const parts = stdPlace.split(", ")
        let placeKey = parts[0]
        if (parts.length > 1) placeKey += '-' + parts[1]
        if (parts[0] === 'USA' && parts.length>2) {
            placeKey += '-' + parts[2]
        }
        // Ensure the place key is in the place Map
        if (! birthPlaceMap.has(placeKey)) {
            // Map() of <branchKey> => [nodes]
            const branchMap = new Map()
            for (let i=0; i<branchSpecs.length; i++) {
                branchMap.set(branchSpecs[i][0], [])
            }
            birthPlaceMap.set(placeKey, branchMap)
        }
        // Add this place to the place's branchMap
        const branchMap = birthPlaceMap.get(placeKey)
        const branchArr = branchMap.get(branchKey)
        branchArr.push(node)
    }

    // Add each branch to the places map
    for(let i=0; i<branchSpecs.length; i++) {
        const [branchKey, rootPerson, subjectKey] = branchSpecs[i]
        const lineage = new Channels(rootPerson, true, subjectKey)
        const subjectNode = lineage.branchNode()
        descendNode(subjectNode, branchKey)
    }
    // Convert to nested array
    const places = []
    for(const [placeKey, branchMap] of birthPlaceMap.entries()) {
        const branches = []
        for(const [branchKey, nodes] of branchMap.entries()) {
            branches.push([branchKey, nodes])
        }
        places.push([placeKey, branches])
    }
    return places.sort()
}

function logPlaces(places) {
    let str = `\n${places.length} Birth Places:\n`
    for (let i=0; i<places.length; i++) {
        let [placeKey, branches] = places[i]
        if (branches.length) {
            str += `${placeKey}:\n`
            for(let j=0; j<branches.length; j++) {
                const [branchKey, nodes] = branches[j]
                if (nodes.length) {
                    str += `    ${branchKey} (${nodes.length})\n`
                    for(let k=0; k<nodes.length; k++) {
                        const node = nodes[k]
                        str += (node.gen + ': ').padStart(10)
                            + ' ' + node.person.label() + ' b: '
                            + node.person.birthPlace().text() + '\n'
                    }
                }
            }
        }
    }
    return str
}

function logPlacesForBranch(places, forBranchKey) {
    let str = `\nBirth Places for the "${forBranchKey}" Family Branch\n`
    for (let i=0; i<places.length; i++) {
        let [placeKey, branches] = places[i]
            for(let j=0; j<branches.length; j++) {
                const [branchKey, nodes] = branches[j]
                if (branchKey === forBranchKey && nodes.length) {
                    str += `${placeKey} (${nodes.length})\n`
                    for(let k=0; k<nodes.length; k++) {
                        const node = nodes[k]
                        str += (node.gen + ': ').padStart(10)
                            + ' ' + node.person.label() + ' b: '
                            + node.person.birthPlace().text() + '\n'
                    }
                }
            }
    }
    return str
}
console.log('\n\n-----------------------------------------------------------\n\n')
const places  = birthPlacesByBranch(branchSpecsGgp)
// console.log(logPlaces(places)
console.log(logPlacesForBranch(places, 'white'))
