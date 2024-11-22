<script>
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    export let id, num
</script>

<div id={id}>
<NoteItem  item={num}>
    Bevins households enumerated by the 1850 Census in Illinois
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th>County</th><th>Name</th><th>Born</th><th>No</th><th>Bevins</th></tr>
        </thead>
        <tbody class='text-left'>
        <tr><td>Fulton</td><td>William Bevins</td><td>Eng</td><td>34</td><td>5</td></tr>
        <tr><td>Knox</td><td>Bazel Bevins</td><td>PN</td><td>2091</td><td>1 of 7</td></tr>
        <tr><td>Sangamon</td><td>Margaret Bevins</td><td>MD</td><td>7</td><td>1 of 6</td></tr>
        <tr><td>Madison</td><td>Egbert Bevins</td><td>IL</td><td>43</td><td>4</td></tr>
    </tbody></table>
</NoteItem>
</div>
