<script>

    import {url} from '@sveltech/routify'

</script>

<div class="home-container">
    <h1 class="text-red-900 font-bold">This heading is styled by Tailwind CSS</h1>
    <h1> See the movies catalog </h1>
    <a href={$url('/movies')}> See Me </a>
</div>

