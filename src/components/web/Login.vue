<template>
    <div id="login" class="row">
        <div class="col col-12 col-sm-12 col-md-4 mx-auto mt-5">
            <form name="login" action="#" @submit.prevent="login" class="w-100">
                <label class="font-weight-500">Email</label>
                <input v-model="email" type="email" name="login" required class="form-control mb-1">

                <label class="font-weight-500">Senha</label>
                <input v-model="password" type="password" name="password" required class="form-control mb-3">

                <div class="text-end">
                    <button :disabled="setDisable" class="btn btn-primary font-weight-600">submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Login',

        data()
        {
            return {
                email: null,
                password: null
            }
        },

        computed: {

            setDisable()
            {
                return (!this.email || !this.password || this.email.length < 3 || this.password.length < 3)
            },

        },

        methods: {

            login()
            {
                fetch('http://localhost:8000/api/login')
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }

</script>

<style>

</style>