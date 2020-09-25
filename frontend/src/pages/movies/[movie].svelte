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

<div class="p-6">
<a href={$url('/movies')}>
    <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    > 
    Go Back!! </button> </a>


    <div class="container-mix" >

{#if movie}
    {#if movie.videos[0]}
    <!-- <div class="video-container">
        <Video url={movie.videos[0].url} />
    </div> -->

    <div class="p-2 flex items-center justify-center" >
        <label class="px-2"> Video Url </label>
        <input 
        class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text"
        bind:value={movie.videos[0].url}
        />
    </div>
    {/if}

    
        <div class="p-2 flex items-center justify-center">
        <label class="px-2"> Title: </label>
        <input
        class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        bind:value={movie.title}
        />
        </div>
        <div class="p-2 flex items-center justify-center">
            <label class="px-2"> Release date: </label>
            <input
            class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            bind:value={movie.release_date}
            />
        </div>

        <div class="p-2 flex items-center justify-center">
            <label class="px-2"> Movie Image: </label>
            <input
            class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            bind:value={movie.images[0].thumbnail}
            />
        </div>
        <div class="p-2 flex items-center justify-center">
            <label> Movie Language: </label>
            <input
            class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            bind:value={movie.language}
            />
        </div>
        <div class="p-2 flex items-center justify-center">
            <label> Director: </label>
            <input
            class="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            bind:value={movie.details[0].director}
            />
        </div>

    <div class="p-2 flex items-center justify-center">
        <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        on:click={submit}
        disabled={loading}
        > Submit! </button>

        {#if loading}
            <p> submiting...</p>
        {/if}
    </div>
    
    {/if}
</div>
    

</div>
<style>
    .container-mix{
        display: flex;
        width: 100%;
        flex-direction: column;
    }
</style>