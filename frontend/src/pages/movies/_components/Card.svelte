<script>
    import {redirect} from '@sveltech/routify'
    export let title;
    export let release_date;
    export let details;
    export let images;
    export let index;

    const redirection  = () => $redirect(`/movies/${index}`)
</script>

<div on:click={redirection} >
<p> {title} </p>
<p> {release_date} </p>
<p> {index} </p>

<div >
    {#if details}
        <p> {details[0].director} </p>
    {/if}
</div>

<div >
    {#if images}
    <img src={images[0].thumbnail} alt="thumbnail" >
    {/if}
</div>

</div>