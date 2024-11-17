<script>
    import {P} from '$lib/markup'
    export let man, item
    const section = man.items[item.pidx]
</script>

<div class="bg-amber-100 border-2 border-black mt-4 mb-4 p-4 rounded overflow-hidden shadow-lg shadow-slate-500">
    <P>The <span class="font-bold">[{item.path}]</span> content for section
        <span class="font-bold">{section.href} '{section.title}'</span>
        is currently under construction.</P><P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </P>
</div>
