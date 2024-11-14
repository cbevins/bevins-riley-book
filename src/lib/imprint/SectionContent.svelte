<script>
    import { NewPage, SectionPlaceholder, SectionTitle} from '$lib/imprint'
    export let folder   // sections of this folder are displayed
    export let man      // manifest
    export let comps    // Map() of compkey to svelte:component ireferences
</script>

{#each man.pages as page}
    {#if page.folder === folder}
        <NewPage {page}/>
        {#each page.sections as section}
            <SectionTitle {section}/>
            {#if comps.has(section.compkey)}
                <svelte:component this={comps.get(section.compkey)}/>
            {:else}
                <SectionPlaceholder {section}/>
            {/if}
        {/each}
    {/if}
{/each}
