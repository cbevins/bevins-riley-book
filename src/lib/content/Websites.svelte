<script>
    import P from '$lib/book/P.svelte'
    import Section from '$lib/book/Section.svelte'

    export let id = ''          // Chapter element id
    export let newpage = false  // If TRUE, starts with a <NewPage>
    export let part = ''        // Chapter ordinal, like 'Chapter 1', displayed on page top margin
    export let title = ''       // Chapter title, displayed on page top margin
    export let captions = ['Useful Websites']
</script>

<Section {id} {part} {title} {captions} {newpage}/>

<div class="text-left mb-10">
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside">
        <li><a href="https://forebears.io/" target="_blank"
            class="font-medium text-blue-600 hover:underline">
            Forebears.io: Surname Distributions around the Worlds</a>
        </li>
    </ul>
</div>
