<script>
import axios from 'axios';
import { onMount } from 'svelte';
import App from '../../App.svelte';
import Card from "./_components/Card.svelte"
let movies = [];

onMount(async () => {
    const res = await axios.get('http://localhost:1337/movies')
    movies = await res.data
    console.log(movies)
})

</script>

<div class="flex p-8 flex-wrap">
    {#if movies.length > 0}
        {#each movies as movie, i}
            <Card index={i} {...movie} />
        {/each}
    {:else}
        <p> loading...</p>
    {/if}
</div>

