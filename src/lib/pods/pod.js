const Pods = new Map([
    ['NV,LEI', {
        geoKey: 'ENG,LEI,Newbold Verdon',
        label: 'Newbold Verdon, Leicestershire, England',
    }],
    ['Brixham,DEV', {
        geoKey: 'ENG,DEV,Brixham',
        label: 'Brixham, Devon, England',
    }],
    ['Huron,OH', {
        geoKey: 'USA,OH,Huron',
        label: 'Huron, Ohio',
    }],
    ['Henry,IL', {
        geoKey: 'USA,IL,Henry',
        label: 'Henry County, IL',
    }],
    ['Northern,MN', {
        geoKey: 'USA,MN,Itasca',
        label: 'Northern MN',
    }]
])

/**
 * This method is Ancestor based with a list of Location-Dates
 * Ancestors only appear once, but Location keys appear many times
 */
const born = 'born'
const arr = 'arr'
const join = 'join'
const Ancestors = [
    ['William BEVINS Sr.', 9, [[born, 1665, 'NV,LEI']]],
    ['Judith BAKER', 9, [[born, 1665, 'NV,LEI']]],
    ['Jonathon BOTT', 8, [[born, 1690, 'NV,LEI']]],
    ['Margaret TUDNEY', 8, [[born, 1693, 'NV,LEI']]],
    ['Sarah WILKINSON', 8, [[born, 1696, 'NV,LEI']]],
    ['William BEVINS', 8, [[born, 1705, 'NV,LEI']]],
    ['George THIRLBY', 7, [[born, 1709, 'NV,LEI']]],
    ['Mary POOLE', 7, [[born, 1720, 'NV,LEI']]],
    ['Benjamin BOTT', 7, [[born, 1729, 'NV,LEI']]],
    ['Thomas BEVINS', 7, [[born, 1731, 'NV,LEI']]],
    ['Katherine MOORE', 7, [[born, 1736, 'NV,LEI']]],
    ['Sarah WRATHBURN', 7, [[born, 1736, 'NV,LEI']]],
    ['Thomas ISOM', 7, [[born, 1738, 'NV,LEI']]],
    ['Ann QUEENBOROUGH', 7, [[born, 1740, 'NV,LEI']]],
    ['Ann THIRLBY', 6, [[born, 1756, 'NV,LEI']]],
    ['John BOTT', 6, [[born, 1756, 'NV,LEI']]],
    ['Joseph BEVINS', 6, [[born, 1762, 'NV,LEI']]],
    ['Mary Ann', 6, [[born, 1766, 'NV,LEI']]],
    ['Simon BOTT', 5, [[born, 1779, 'NV,LEI']]],
    ['John BEVINS', 5, [[born, 1783, 'NV,LEI']]],
    ['Mary WYKES', 5, [[born, 1783, 'NV,LEI']]],
    ['William Longford BEVINS', 4, [
        [born, 1815, 'NV,LEI'],
        [arr, 1845, 'USA,OH,Huson'],
        [arr, 1855, 'USA,IL,Henry'],
    ]],
    ['Mary BOLT', 4, [
        [born, 1822, 'EMG,LEI,Newbold Verdon'],
        [arr, 1845, 'Huron,OH'],
        [arr, 1855, 'Henry,IL'],
    ]],
    ['William Alfred BEVINS', 3, [
        [born, 1843, 'NV,LEI'],
        [arr, 1845, 'Huson,OH'],
        [arr, 1855, 'Henry,IL'],
    ]],
    ['Mary Ann WHITE', 3, [
        [born, 1848, 'Brixham,DEV'],
        [arr, 1869, 'NV,LEI'],
        [arr, 1871, 'Henry,IL'],
    ]],
    ['Samuel BEVINS', 2, [
        [born, 1881, 'Henry,IL'],
        [arr, 1909, 'Northern,MN']
    ]],
    ['Samuel Frederick SHOFFNER', 4, [
        [born, 1830, 'PA'],
        [arr, 1863, 'Vermilion,IL'],
        [arr, 1867, 'Northern,MN'],
    ]],
    ['Elizabeth Ann SOWDERS', 4, [
        [born, 1841, 'Vermilion,IL'],
        [arr, 1867, 'Northern,MN'],
    ]],
    ['George Washington COLLINS', 3, [[born, 1870, 'Northern,MN']]],
    ['Francis Marie SHOFNER', 3, [[born, 1871, 'Northern,MN']]],
    ['Hattie Jane COLLINS', 2, [[born, 1889, 'Northern,MN']]],
    ['William Collins BEVINS', 1, [[born, 1931, 'Northern,MN']]],
    ['Meartia Margaret HEDDENS', 1, [
        [born, 1933, 'Rolette,ND'],
        [arr, 1933, 'Northern,MN'],
    ]],
    // Add Ralph V Heddens and Margaret Eva Nattrass to NorthernMN
]

function podMembers(podKey, ancestors) {
    const members = []
    for(let i=0; i<ancestors.length; i++) {
        const [name, gen, events] = ancestors[i]
        let by = 0
        for(let j=0; j<events.length; j++) {
            const [type, year, pKey] = events[j]
            if (type === born) by = year
            if (pKey === podKey) members.push([type, year, gen, name, year-by])
        }
    }
    return members.sort((a, b) => {
        const ya = a[1]
        const yb = b[1]
        return ya - yb
    })
}

function listPod(podMap, podKey, ancestors) {
    const pod = podMap.get(podKey)
    console.log(`${pod.label} (${pod.geoKey})`)
    const members = podMembers(podKey, ancestors)
    for(let i=0; i<members.length; i++) {
        const [type, year, gen, name, age] = members[i]
        const a = (type === born) ? '' : `(age ${age})`
        console.log(`  ${type.padEnd(4)} ${year} ${gen}g ${name} ${a}`)
    }
}
listPod(Pods, 'NV,LEI', Ancestors)
listPod(Pods, 'Henry,IL', Ancestors)
listPod(Pods, 'Northern,MN', Ancestors)