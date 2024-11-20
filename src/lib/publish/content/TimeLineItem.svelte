<script>
    export let item     // [<dt>, <dd>]
    const lorem = 'Congue nibh sollicitudin aptent posuere sociosqu potenti habitant odio. Erat hendrerit blandit eget, turpis faucibus gravida tristique nisi. Class varius sem facilisis eu non orci amet sollicitudin risus. Convallis sed sociosqu sapien ad diam iaculis ut; parturient primis. Nunc id cursus aliquam cras himenaeos dapibus natoque. Dapibus magnis diam dolor tristique leo scelerisque, tincidunt dis. Malesuada blandit erat taciti, in aptent dis leo. Adipiscing venenatis porta aenean nunc conubia eros finibus nisl.'

</script>


<div class="grid grid-cols-9 mb-2 divide-x-4 divide-blue-300 border-4 rounded  border-blue-500">
    <div class='col-span-1 text-center py-1 text-lg font-bold'>{item[0]}</div>
    <div class='col-span-8 text-left px-4 py-1'>{lorem}</div>
</div>
