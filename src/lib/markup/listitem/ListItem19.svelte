<script>
    // LitItem with a 1:9 column layout
    export let item
</script>

<div class="border-blue-500 bg-blue-100 divide-blue-300 grid grid-cols-10 mx-4 mb-2 divide-x-4 border-2 rounded-2xl">
    <div class='col-span-1 text-center py-1 text-lg font-bold'>
        {item}
    </div>
    <div class='col-span-9 text-left px-4 py-1'>
        <slot>
            ListItem content goes here
        </slot>
    </div>
</div>
