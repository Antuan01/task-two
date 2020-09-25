<script>
    import {redirect} from '@sveltech/routify'
    export let title;
    export let release_date;
    export let details;
    export let images;
    export let index;

    const redirection  = () => $redirect(`/movies/${index}`)
</script>

<div 
class="max-w-sm w-full lg:w-1/4 lg:flex p-6 hover:bg-blue-200 cursor-pointer"
on:click={redirection} >
    <div 
    class="flex-column items-center p-2 justify-between"
    >

        <h2
        class="text-center overflow-hidden"
        > Title: {title} </h2>
        <p
        class="text-center overflow-hidden"
        > Release date: {release_date} </p>   
            {#if details}
                <p
                class="text-center overflow-hidden"
                > Director: {details[0].director} </p>
            {/if}
    </div>

    <div 
    class="text-center overflow-hidden"
    >
        {#if images}
        <img src={images[0].thumbnail} alt="thumbnail" >
        {/if}
    </div>

</div>