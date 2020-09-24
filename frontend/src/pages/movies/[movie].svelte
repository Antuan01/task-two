<script>
import axios from 'axios';
import { params } from '@sveltech/routify';
import { onMount } from 'svelte';
import {url} from '@sveltech/routify'
import Video from "./_components/Video.svelte"

$: id = $params.movie

let movie;
let loading = false;
let error = false;
onMount(async () => {
    const res = await axios.get(`http://localhost:1337/movie/${id}`)
    movie = await res.data

})

const submit = () => {
    loading = true
    axios.post(`http://localhost:1337/movie/${id}`, movie)
        .then(res => {
            console.log(res)
            loading = false
        }).catch(err => {
            console.log(err)
            loading = false
        })
}
</script>

<div class="main-container">
<a href={$url('/movies')}> Go Back!! </a>


{#if movie}
    {#if movie.videos[0]}
    <div class="video-container">
        <Video url={movie.videos[0].url} />
    </div>

    <div>
        <label> Video Url </label>
        <input type="text"
        bind:value={movie.videos[0].url}
        />
    </div>
    {/if}

    <div>
        <div>
        <label> Title </label>
        <input type="text"
        bind:value={movie.title}
        />
        </div>
        <div>
            <label> Release date </label>
            <input type="text"
            bind:value={movie.release_date}
            />
        </div>

        <div>
            <label> Movie Image </label>
            <input type="text"
            bind:value={movie.images[0].thumbnail}
            />
        </div>
        <div>
            <label> Movie Language </label>
            <input type="text"
            bind:value={movie.language}
            />
        </div>
        <div>
            <label> Director </label>
            <input type="text"
            bind:value={movie.details[0].director}
            />
        </div>

    </div>

    <div>
        <button
        on:click={submit}
        disabled={loading}
        > Submit! </button>

        {#if loading}
            <p> submiting...</p>
        {/if}
    </div>


{/if}

</div>

<style>
    .video-container {
        max-width: 400px;
        max-height: 400px;
    }
    .main-container {
        padding: 30px 30px;
    }
</style>