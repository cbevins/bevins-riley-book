# Folder gxml Refactor

There are 2 ways to define and use flag pin SVGs
1. An SVG containing a *defs* with the filter, clip path, text paths,
a flag GXML, and a border GXML, or

2. An SVG containing *defs* for all the flags that are referenced by *use*.

## Solutions:

Simplify flag pin usage into 2 functions:

1. Create master Map() of country name variants to a common key,
e.g., 'USA', 'usa', 'United States', etc => 'usa'

2. The key accesses another Map() of country data including
full name, abbreviation, flag, flag pin id, etc.

3. Any SVG containing one or more flag pins has a *defs* section
containing the specific subset of the mentioned flags.
The *defs* *el* is returned by
*createFlagPinDefsGxml(['usa', 'england', 'scotland'])*.

4. These *defs* are then referenced within the SVG for any specific
flag via *useCountryFlagPinDefGxml('usa')


## File: flagPinDefsGxml.js - 1 exported function
```js
// current:
export function flagPinDefsGxml(w=100, h=100)
// refactor to:
// If the countries array is empty, ALL countries are included
export function createFlagPinDefsGxml(countries=[], w=100, h=100)
```

## File: flagPinGxml.js - 1 exported function
```js
// current:
 export function flagPinGxml(id, x=0, y=0, scale=1, width=100, height=100)
 // rename to:
 export function useFlagPinDefGxml(id, x=0, y=0, scale=1, width=100, height=100)
 ```

## File: flagPinSingleGxml - 2 exported functions, 1 exported Map

```js
// DEPRECATE
export function flagPinSingleGxml(method, x=0, y=0, scale=1, width=100, height=100)
```

```js
// PREFER
export const flag = new Map([...]}
export function countryFlagPinGxml(country, x=0, y=0, scale=1, width=100, height=100)
// rename to:
export function flagPin(country, ...)
```

## File: flagPinsTableGxml.js
```js
// current
export function flagPinsTableGxml(w=100, h=75) {
    // leave as is
```

## File: flagsGxml.js
```js
export const flagMethods = [
    {method: belgium, id: 'belgium', label: 'Belgium'},
//...
]
```

All the following functions return an *el*:
```js
export function belgium(w=100, h=100, sw=1)
export function border(w=100, h=100, sw=1)
export function canada(w=100, h=100, sw=1)
//... more
export function wales(w=100, h=100, sw=1)
export function star(w=100, h=100, sw=1)
export function usaCanton(w, h)
export function usa(w=100, h=100, sw=1)
```

## File: gxmlStr.js - 1 exported function
```js
export function gxmlStr(gxml, indent=2, eol='\n', level=0)
```

## File: gxmlSvg.js

```js
export function fit(sourceEl, destEl, fit='both')
export function nest(sourceEl, sourceX, sourceY,
        destEl, destX=0, destY=0, scale=1, degrees=0)
export function nestMid(sourceEl, destEl, destX=0, destY=0, scale=1, degrees=0)
export function nestTl(sourceEl, destEl, destX=0, destY=0, scale=1, degrees=0)
export function register(subjectEl, subjectLocalX, subjectLocalY,
        referEl, referLocalX=0, referLocalY=0, scale=1, degrees=0)
export function registerCenters(subjectEl, referEl, scale=1, degrees=0)
export function textEl(x, y, content, anchor="middle")
```