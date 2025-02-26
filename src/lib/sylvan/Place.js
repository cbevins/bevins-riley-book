export class Place {
    constructor(text, location, parts, messages) {
        const country = parts.length > 0 ? parts.pop() : ''
        const state = parts.length > 0 ? parts.pop() : ''
        const locale = parts.length > 0 ? parts.join(', ') : ''
        this._data = {
            count: 0,
            country,
            locale,
            location,   // reference to a GedcomPlaceLocationsJson Map() entry
            messages,
            parts,
            state,
            text
        }
    }

    coords() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            return [lat, lng]
        }
        return [0, 0]
    }

    count() { return this._data.count }

    country() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            if (names.length) return names[0]
        }
        return this._data.country
    }

    fullName(countryFirst=false, sep=', ') {
        if (this.location()) {
            const parts = []
            const [keys, names, lat, lng] = this.location()
            for(let i=0; i<names.length; i++) parts.push(names[i])
            if (! countryFirst) parts.reverse()
            return parts.join(sep)
        }
        return this._data.parts.join(',')
    }

    keys() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            return keys
        }
        return []
    }

    lat() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            return lat
        }
        return 0
    }

    lng() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            return lng
        }
        return 0
    }
    
    locale() { return this._data.locale }
    
    location() { return this._data.location }
    
    messages() { return this._data.messages }
    
    standard() { return this.fullName() }
    
    state() {
        if (this.location()) {
            const [keys, names, lat, lng] = this.location()
            if (names.length > 1) return names[1]
        }
        return this._data.state
    }

    text() { return this._data.text }

    increment() { this._data.count++ }
}
