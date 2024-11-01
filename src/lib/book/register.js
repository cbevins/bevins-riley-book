export let toc = []
export let nextPage = 1

export function register(node, props) {
    toc.push(props)
    console.log('Book registry', props, 'page', nextPage)
    nextPage += props.pages
}