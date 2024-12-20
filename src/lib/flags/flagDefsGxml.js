// $lib/flags/flagDefsGxml.js
// Flag Gxml definitions for various countries.
// Each functions returns a Gxml <svg> element containing a rectangular flag image.
// These images may be used to create an SVG <defs> block, rectangular flags,
// or clipped and lighted to produce flag pins such as in createFlagPinDefsGxml.js

import { nest, nestTl, textEl } from '$lib/gxml/gxmlSvg.js'

/**
 * @param {number} w
 * @param {number} h
 */
export function border(w, h, sw=1) {
    return {el: 'path', fill: 'none', stroke: 'black', 'stroke-width': sw,
        d: `m0,0 h${w} v${h} h-${w} v-${h}`}
}

export function belgium(w=100, h=100, sw=1, id='flag-Belgium') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: '#fdda24'},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#000000"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ef3340"},
        border(w, h, sw)
    ]}
}

export function canada(w=100, h=100, sw=1, id='flag-Canada') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "25%", height: "100%", fill: "red"},
        {el: 'rect', x: "75%", y: 0, width: "25%", height: "100%", fill: "red"},
        border(w, h, sw)
    ]}
}

export function england(w=100, h=100, sw=1, id='flag-England') {
    const wd = 0.2 * Math.min(h, w)
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "red", 'stroke-width': wd},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "red", 'stroke-width': wd},
        border(w, h, sw)]}
}

export function france(w=100, h=100, sw=1, id='flag-France') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#0055a4"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ef4135"},
        border(w, h, sw)]}
}

export function germany(w=100, h=100, sw=1, id='flag-Germany') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "red"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "33%", fill: "black"},
        {el: 'rect', x: 0, y: "67%", width: "100%", height: "33%", fill: "#ffcc00"},
        border(w, h, sw)]}
}

export function ireland(w=100, h=100, sw=1, id='flag-Ireland') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "33%", height: "100%", fill: "#009a49"},
        {el: 'rect', x: "67%", y: 0, width: "33%", height: "100%", fill: "#ff7900"},
        border(w, h, sw)]}
}

export function netherlands(w=100, h=100, sw=1, id='flag-Netherlands') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "white"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "33%", fill: "#009a49"},
        {el: 'rect', x: 0, y: "67%", width: "100%", height: "33%", fill: "#ff7900"},
        border(w, h, sw)]}
}

export function norway(w=100, h=100, sw=1, id='flag-Norway') {
    const lw = Math.min(w, h) * 2 / 22
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#ba0c2f"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "white", "stroke-width": 2*lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "white", "stroke-width": 2*lw},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "#00205b", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "#00205b", "stroke-width": lw},
        border(w, h, sw)]}
}

export function scotland(w=100, h=100, sw=1, id='flag-Scotland') {
    const lw = Math.min(w, h) * 0.2
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#005eb8"},
        {el: 'line', x1: 0, y1: 0, x2: "100%", y2: "100%", stroke: "white", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "100%", x2: "100%", y2: "0%", stroke: "white", "stroke-width": lw},
        border(w, h, sw)]}
}

export function sweden(w=100, h=100, sw=1, id='flag-Sweden') {
    const lw = Math.min(w, h) * 0.2
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "#006aa7"},
        {el: 'line', x1: "50%", y1: 0, x2: "50%", y2: "100%", stroke: "#ffcd00", "stroke-width": lw},
        {el: 'line', x1: 0, y1: "50%", x2: "100%", y2: "50%", stroke: "#ffcd00", "stroke-width": lw},
        border(w, h, sw)]}
}

export function unknown(w=100, h=100, sw=1, id='flag-Unknown') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "gray"},
        textEl(w/2, h/2, "?"),
        border(w, h, sw)]}
}

export function wales(w=100, h=100, sw=1, id='flag-Wales') {
    return {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "green"},
        {el: 'rect', x: 0, y: 0, width: "100%", height: "50%", fill: "white"},
        border(w, h, sw)]}
}

// Star for USA flag
export function star(fill='white', stroke='black', sw=1, id='flag-usa-star') {
    return {el: 'svg', id: id, width: 50, height: 50, els: [
        {el: 'path', fill: fill, stroke: stroke, 'stroke-width': sw,
            d: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"}
    ]}
}

// 5 rows of 6 stars and 4 rows of 5 stars
/**
 * @param {number} w
 * @param {number} h
 */
export function usaCanton(w, h) {
    const canton = {el: 'svg', width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "blue"},
    ]}

    // Canton star row ht and col width
    const dy = h / 10   // 5 + 4 rows
    const dx = w / 12   // 6 + 5 cols

    // Determine star scale from 50x50
    const scale = Math.min(dx, dy) / 50

    // 5 rows of 6 stars
    let y = -1.5*dy
    for(let row=0; row<5; row++) {
        y += 2*dy   // top edge
        let x = -1.5*dx
        for(let col=0; col<6; col++) {
            x += 2*dx // left edge
            nest(star(), 0, 0, canton, x, y, scale)
        }
    }

    // 4 rows of 5 stars
    y = -1.5*dy/2
    for(let row=0; row<4; row++) {
        y += 2*dy   // top edge
        let x = -dx/2
        for(let col=0; col<5; col++) {
            x += 2*dx // left edge
            nest(star(), 0, 0, canton, x, y, scale)
        }
    }
    return canton
}

export function usa(w=100, h=100, sw=1, id='flag-USA') {
    const dy = h / 13
    const flag = {el: 'svg', id: id, width: w, height: h, els: [
        {el: 'rect', x: 0, y: 0, width: "100%", height: "100%", fill: "red"},
    ]}

    // white stripes
    for (let i=0; i<6; i++) {
        const y = 2 * i * dy + dy
        flag.els.push({el: 'rect', x: 0, y: y, width: "100%", height: dy,
            fill: "white", 'stroke-width': 0})
    }
    // blue canton
    nestTl(usaCanton(0.5 * w, 7 * dy), flag, 0, 0)  

    // border
    // @ts-ignore
    flag.els.push(border(w, h, sw))
    return flag
}
