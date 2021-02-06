<template>
    <div id="register" class="row m-0">
        <div class="row m-0">
            <div class="col col-12 col-sm-8 col-md-8 mx-auto mt-5 text-center">
                <h2 class="h2 h2-responsive font-weight-300 text-black-50">
                    Bem vindo ao <span class="font-weight-500 text-black">Hrefs</span>
                </h2>

                <p class="font-weight-300">Aqui você reúne todos os links referentes ao seu perfil profissional em um único lugar!</p>

                <p class="font-weight-400">Vamos começar com um cadastro básico</p>
            </div>
        </div>
        <div class="col col-12 col-sm-6 col-md-4 mx-auto p-5">
            <form name="register-form" action="#" @submit.prevent="register" class="w-100">

                <p
                    class="note font-weight-500 override-note"
                    :class="{
                        'note-primary': ui.note.primary,
                        'note-warning': ui.note.warning,
                        'note-danger': ui.note.danger
                    }"
                    v-show="request.message != ''"> {{ request.message }}
                </p>

                <label class="font-weight-500">Email</label>
                <input v-model="user.email" type="email" name="email" class="form-control mb-1">

                <label class="font-weight-500">Senha</label>
                <input v-model="user.password" type="password" name="password" class="form-control mb-3">

                <div class="text-end">
                    <button :disabled="submitDisable" class="btn btn-primary font-weight-600">
                        <span v-if="request.sending" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-else>{{ ui.submitText }}</span>
                    </button>
                </div>

                <nav class="text-center mt-5">
                    Já tem conta? <router-link to="/login">entre</router-link>
                </nav>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Register',

        data()
        {
            return {
                user: {
                    email: undefined,
                    password: undefined
                },

                ui: {
                    note: {
                        primary: false,
                        warning: false,
                        danger: false,
                        text: ''
                    },

                    submitText: 'cadastrar'
                },

                request: {
                    sending: false,
                    message: '',
                },
            }
        },

        computed: {

            submitDisable()
            {
                return (!this.user.email || !this.user.password || this.user.email.length < 3 || this.user.password.length < 3)
            },
        },

        methods: {

            register()
            {
                try
                {
                    this.request.sending = true

                    this.$http.post('/login', {email: this.user.email, password: this.user.password})
                    .then(response => {

                        this.request.sending = false

                        if (response.data.error)
                        {
                            this.ui.note.danger = true
                            this.request.message = response.data.message
                        }
                        else
                        {
                            this.ui.note.primary = true
                            this.request.message = 'Redirecionando...'

                            sessionStorage.setItem('t_a_hrefs', true)
                            this.$router.push({name: 'app.home'})

                        }
                    })
                    .catch(error => {
                        this.request.sending = false
                        console.log(error)
                    })
                }
                catch (error)
                {
                    this.request.sending = false
                    this.ui.note.warning = true
                    this.ui.note.text = error

                    console.log(error)
                }
            }
        }
    }

</script>

<style>

    .override-note
    {
        font-size: 13px;
    }

</style>