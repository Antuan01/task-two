<script>

    import {url} from '@sveltech/routify'

</script>

<div class="home-container">
    <h1> See the movies catalog </h1>
    <a href={$url('/movies')}> See Me </a>
</div>


<style>
    .home-container {
        padding: 30px;
    }
</style>