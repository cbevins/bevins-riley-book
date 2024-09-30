/**
 * $lib/flags/flagPinsGxml.js
 * Functions to produce Gxml <svg> elements defining flag pin images
 * from the following flagDefsGxml.js functions:
 * 
 * There are 2 use cases to be aware of:
 * 
 * 1. If all that's needed is an SVG image with a *single* flag pin image,
 * use flagPinGxml() to return the SVG GXML (which may be nested in another SVG).
 * 
 * 2. Otherwise, first use flagPinDefs() to return a <defs> block GXML to nest
 * within the SVG, and then add each flag pin using useFlagPinDefGxml().
 */
import { belgium, canada, england, france, germany, ireland, netherlands,
    norway, scotland, sweden, unknown, wales, usa } from '$lib/flags/flagDefsGxml.js'

// Simple array of all canonical country key strings
const flagKeys = [
    'Belgium', 'Canada', 'England', 'France', 'Germany',
    'Ireland', 'Netherlands', 'Norway', 'Scotland', 'Sweden',
    'Unknown', 'USA', 'Wales']

// Map all valid country names to a canonical country key string
const flagKeyMap = new Map([
    ['belgium', 'Belgium'],
    ['Belgium', 'Belgium'],
    ['canada', 'Canada'],
    ['Canada', 'Canada'],
    ['england', 'England'],
    ['England', 'England'],
    ['france', 'France'],
    ['France', 'France'],
    ['germany', 'Germany'],
    ['Germany', 'Germany'],
    ['ireland', 'Ireland'],
    ['Ireland', 'Ireland'],
    ['netherlands', 'Netherlands'],
    ['Netherlands', 'Netherlands'],
    ['norway', 'Norway'],
    ['Norway', 'Norway'],
    ['scotland', 'Scotland'],
    ['Scotland', 'Scotland'],
    ['sweden', 'Sweden'],
    ['Sweden', 'Sweden'],
    ['unknown', 'Unknown'],
    ['', 'Unknown'],
    ['usa', 'USA'],
    ['USA', 'USA'],
    ['United States', 'USA'],
    ['United States of America', 'USA'],
    ['Wales', 'Wales']
])

// Map all canonical flag keys to a flagDefsGxml.js GXML constructor function
const flagFunctionMap = new Map([
    ['Belgium', belgium],
    ['Canada', canada],
    ['England', england],
    ['France', france],
    ['Germany', germany],
    ['Ireland', ireland],
    ['Netherlands', netherlands],
    ['Norway', norway],
    ['Scotland', scotland],
    ['Sweden', sweden],
    ['unknown', unknown],
    ['USA', usa],
    ['Wales', wales]
])

// Returns the canonical key string for the country, or throws an error
function getFlagKey(country) {
    if (! flagKeyMap.has(country))
        throw new Error(`getFlagKey('${country}') is not in the flagKeyMap.`)
    return flagKeyMap.get(country)
}

// Returns the flagDefsGxml.js construction function for the country,
// or throws an error
function getFlagFunction(country) {
    const key = getFlagKey(country)
    if (! flagFunctionMap.has(key))
        throw new Error(`getFlagFunction('${key}') is not in the flagFunctionMap.`)
    return flagFunctionMap.get(key)
}

// Returns a transformable <g> GXML element
// containing the flag pin image and border
function image(country, scale=1, width=100, height=100, borderColor='black') {
    const key = getFlagKey(country)
    const id = '#flag-' + key
    return {el: 'g', transform: `scale(${scale}, ${scale})`,
        els: [
            {el: 'use', x: 0, y: 0,
                href: id,
                filter: "url(#flag-lighting)",
                'clip-path':"url(#flag-clipper)"},
            // border
            {el: 'circle', cx: width/2, cy: height/2, r: (width/2-1),
                fill: 'none', stroke: borderColor, 'stroke-width': 2}
        ]
    }
}

/**
 * Returns a GXML SVG element of a single flag pin.
 * Best used for SVG with a single flag image.
 * 
 * @param {*} country 
 * @param {*} x 
 * @param {*} y 
 * @param {*} scale 
 * @param {*} borderColor 
 * @param {*} width 
 * @param {*} height 
 * @returns 
 */
export function flagPinGxml(country, x=0, y=0, scale=1, borderColor='black',
        width=100, height=100) {
    return {el: 'svg', x: x, y: y, width: scale*width, height: scale*height, els: [
        flagPinDefsGxml([country]),
        image(country, scale, width, height, borderColor)
    ]}
}

/**
 * Returns an SVG <defs> GXML element
 * defining one or more flag pins, with text paths, clipPaths, and filters.
 * @param {array} flags Array of country keys to include.
 *   If empty, all are flags are included (default).
 * @param {number} w Width in user units (default=100)
 * @param {number} h Height in user units (default=100)
 * @returns An SVG <defs> GXML element
 */
export function flagPinDefsGxml(flags=[], w=100, h=100) {
    // Flag pin clip path
    const clip = {el: 'clipPath', id: "flag-clipper", els: [
        {el: 'circle', cx: w/2, cy: h/2, r: w/2}
    ]}

    // Lighting filter for flag pin
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
    
    // Text paths for flag pins
    const tpath1 = {el: 'path', id: 'text-path-lower', d: 'M 5 45 A 45 45 0 1 0 95 45'}
    const tpath2 = {el: 'path', id: 'text-path-upper', d: 'M 5 70 A 45 45 0 1 1 95 70'}

    const defs = {el: 'defs', id: 'flag-pins-defs', els: [
        clip, tpath1, tpath2, filter
    ]}

    // Flag pin images
    if (! flags.length) flags = flagKeys
    for(let i=0; i<flags.length; i++) {
        const flag = flags[i]
        const f = getFlagFunction(flag)
        defs.els.push(f(w, h, 0, 'flag-'+flag))
    }
    return defs
}

/**
 * Returns a Gxml <svg> element defining a circular flag pin image
 * clipped and lighted from a <defs> flag image with 'id'.
 * Requires that the flagDefsGxml.js Gxml element <defs> are loaded into the top-level <svg>.
 * Best used if multiple instances of a single flag pin are displayed,
 * such as in a lineage map.
 * 
 * @param {string} country String that maps to a known flag key.
 * @param {number} x upper left corner x-coordinate
 * @param {number} y upper left corner y-coordinate
 * @param {number} scale scale
 * @param {string} borderColor
 * @param {number} width Not used
 * @param {number} height Not used
 * @returns A single Gxml JSON object with nested Gxml.
 */
export function useFlagPinDefGxml(country, x=0, y=0, scale=1, borderColor='black',
        width=100, height=100) {
    return {el: 'svg', x: x, y: y, width: scale*width, height: scale*height, els: [
        image(country, scale, width, height, borderColor)]
    }
}
