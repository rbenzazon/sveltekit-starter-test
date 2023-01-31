<script>
    import '../app.css';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<header>
    <h1>Job listings</h1>
</header>

<main class="container">
    <slot/>
</main>

<style>
    h1 {
        padding: 2rem;
    }
    .container {
        padding: 1rem;
        max-width: 768px;
    }
</style>
