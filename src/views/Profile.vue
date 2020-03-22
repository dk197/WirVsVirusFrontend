<template>
    <b-row>
        <div v-if="!checkIfLoggedIn">
            <div v-if="showLoginForm">
                <LoginForm></LoginForm>
                <div id="register">
                    <p>Neu hier?</p>
                    <b-button type="submit" v-on:click="showRegisterForm" variant="link">Registrieren</b-button>
                </div>
            </div>
            <RegistrationForm v-else></RegistrationForm>
        </div>
        <div v-else>
            <p>Profil</p>
            user is logged in
        </div>
        <h1>{{ this.$store.isLoggedIn }}</h1>
    </b-row>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
export default {
    data() {
        return {
            showLoginForm: true
        }
    },
    computed: {
        checkIfLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        showRegisterForm() {
            this.showLoginForm = false
        }
    },
    components: {
        LoginForm,
        RegistrationForm
    }
}
</script>

<style scoped>
    #register {
        z-index: 10;
        position: absolute;
        bottom: 90px;
        padding-left: 15px;
        display: flex;
        align-items: center;
    }
    #register p{
        margin: 0;
    }
    .btn-link, .btn-link:hover{
        color: #903737;
        padding: 0 5px;
    }
</style>