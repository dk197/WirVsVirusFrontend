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
            <b-button @click="showRegistrationForm">Registrieren</b-button>
        </div>
        <div v-else>
            <p>Profil</p>
            user is logged in
            <b-button @click="showProfileForm">Profil anlegen</b-button>
            <ProfileForm v-if="showProfileFormStatus"></ProfileForm>
        </div>
    </b-row>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegistrationForm from '../components/RegistrationForm.vue'
import ProfileForm from '../components/ProfileForm.vue'
export default {
    data() {
        return {
            showLoginForm: true,
            showProfileFormStatus: false
        }
    },
    computed: {
        checkIfLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    methods: {
        showProfileForm() {
            this.showProfileFormStatus = !this.showProfileFormStatus
        },
        showRegistrationForm() {
            this.showLoginForm = !this.showLoginForm
        }
    },
    components: {
        LoginForm,
        RegistrationForm,
        ProfileForm
    }
}
</script>

<style scoped>
    #register {
        z-index: 10;
        position: absolute;
        bottom: 20px;
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