<script>
    import { Da, Enquote, Name, NoteItem, P, Source } from '$lib/markup'
    export let id, num
</script>

<div id={id}>
<NoteItem  item={num}>
    Some elder Bevins from the 1870 USFC in Illinois:
    There was a <Name>Hannah Bevins</Name> born in Virginia in 1798.
    There was a <Name>Charles Bevins</Name> born in North Carolina in 1790.
<div class='mt-1'/>
    Bevins households enumerated by the 1870 Census in Illinois:
    <table class="text-sm text-left text-gray-500 border-2 rounded-lg">
        <thead class="text-xs text-gray-700 bg-gray-500">
            <tr><th>County</th><th>Name</th><th>S, M, F</th><th>Dwell #</th><th>Bevins</th></tr>
        </thead>
        <tbody class='text-left'>
        <tr><td>Carroll</td><td>Chas F Bevins</td><td>VT</td><td>5</td><td>2</td></tr>
        <tr><td>Carroll</td><td>Thomas Bevins</td><td>VT</td><td>104</td><td>5</td></tr>
        <tr><td>Cook</td><td>Martha Bevins</td><td>OH</td><td>653</td><td>4</td></tr>
        <tr><td>Fulton</td><td>Haney Mary Bevins</td><td>NY</td><td>97</td><td>5</td></tr>
        <tr><td>Henry</td><td>William Bevins</td><td>Eng</td><td>29</td><td>10</td></tr>
        <tr><td>Iroquois</td><td>James Bevins (Wid)</td><td>Eng</td><td>238</td><td>4</td></tr>
        <tr><td>Menard</td><td>Hannah Bevins</td><td>VI </td><td>210</td><td>5</td></tr>
        <tr><td>Pike</td><td>Charles Bevins</td><td>NC</td><td>125</td><td>2</td></tr>
        <tr><td>Union</td><td>James Bevins</td><td>OH</td><td>27</td><td>2</td></tr>
    </tbody></table>
</NoteItem>
</div>
