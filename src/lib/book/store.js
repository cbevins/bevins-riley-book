import { readable, writable } from 'svelte/store'

export const book = readable('Our Ancestors through Time and Place')

export const pageno = writable(0)
