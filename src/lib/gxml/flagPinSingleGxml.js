// $lib candidate
/**
 * Returns a Gxml <svg> element with embedded <defs> FOR A SINGLE PIN
 * defining a circular flag image clipped and lighted.
 * DOES NOT REQUIRE any other <defs> to be loaded
 * 
 * @param {function} name of a flagsGxml() function ('england', 'usa', etc)
 * @param {number} x upper left corner x-coordinate
 * @param {number} y upper left corner y-coordinate
 * @param {number} scale scale
 * @param {number} width Not used
 * @param {number} height Not used
 * @returns A single Gxml JSON object with nested Gxml.
 */

// Lighting filter for flag 
const filter = {el: 'filter', id: 'flag-lighting', els: [
    {el: 'feGaussianBlur', in: "SourceAlpha", stdDeviation: 4, result: "blur1"},
    {el: 'feSpecularLighting', result: "specOut", in: "blur1", specularExponent: 100,
        'lighting-color': "#aaaaaa", els: [
            {el: 'fePointLight', x: 40, y: 40, z: 40}
        ]
    },
    {el: 'feComposite', in: "SourceGraphic", in2: "specOut",
        operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0}
]}

// Text paths for flag buttons
const tpath1 = {el: 'path', id: 'text-path-lower', d: 'M 5 45 A 45 45 0 1 0 95 45'}
const tpath2 = {el: 'path', id: 'text-path-upper', d: 'M 5 70 A 45 45 0 1 1 95 70'}

export function flagPinSingleGxml(method, x=0, y=0, scale=1, width=100, height=100) {
    const clip = {el: 'clipPath', id: "flag-clipper", els: [
        {el: 'circle', cx: width/2, cy: height/2, r: width/2}
    ]}
    const defs = {el: 'defs', id: 'flag-pins-defs', els: [clip, tpath1, tpath2, filter]}
    
    const flag = method()
    flag.filter = "url(#flag-lighting)"
    flag['clip-path'] ="url(#flag-clipper)"

    return {el: 'svg', x: x, y: y, width: scale*width, height: scale*height, els: [
        defs,
        {el: 'g', transform: `scale(${scale}, ${scale})`, els: [
            flag,
            {el: 'circle', cx: width/2, cy: height/2, r: (width/2-1),
                fill: 'none', stroke: 'black', 'stroke-width': 2}
    ]
        }
    ]}
}
