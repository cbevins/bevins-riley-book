<script>
    import {P} from '$lib/markup'
    export let man, item, id
    const section = man.items[item.pidx]
</script>

<div id={id} class="bg-amber-100 border-2 border-black mt-4 mb-4 p-4 rounded overflow-hidden shadow-lg shadow-slate-500">
    
    <P><span class="font-bold">{item.type.toUpperCase()} PLACEHOLDER</span></P>
    <P><span class="font-bold">[{item.path}]</span></P>
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {#each [item.title, item.path, item.section, item.id] as prop}
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            {prop}</li>
        {/each}
    </ul>
    <!-- <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </P> -->
</div>
