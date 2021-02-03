<template>
    <div id="app-home">
        <h1>App</h1>

        <button @click="logout">logout</button>
    </div>
</template>

<script>

    export default {
        name: 'Home',

        methods: {

            logout()
            {
                this.$router.push({ name: 'web.login' })
            }
        }
    }

</script>

<style>

</style>