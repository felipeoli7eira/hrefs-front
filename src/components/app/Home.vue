<template>
    <div id="app-home">
        <NavBar />

        <button @click="logout">logout</button>
    </div>
</template>

<script>

    import NavBar from '@/components/app/Navbar'

    export default {
        name: 'Home',

        components: { NavBar },

        methods: {

            logout()
            {
                sessionStorage.removeItem('t_a_hrefs')
                this.$router.push({ name: 'web.login' })
            }
        }
    }

</script>

<style>

</style>