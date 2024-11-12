<script>
    const dates = [
        {date: '1650-1850', text: 'Bevins family in England'},
        {date: '1845', text: 'William Alfred Bevins and Mary Bolt arrive in Philadelphia'},
    ]
</script>

<ul>
{#each dates as date}
    <li>{date.date} : {date.text}</li>
{/each}
</ul>