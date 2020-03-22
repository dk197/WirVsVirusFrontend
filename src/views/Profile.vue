<template>
    <b-row>
        <p>Profil</p>
        <div v-if="!checkIfLoggedIn">
            <LoginForm v-if="showLoginForm"></LoginForm>
            <RegistrationForm v-else></RegistrationForm>
            <b-button @click="showRegistrationForm">Registrieren</b-button>
        </div>
        <div v-else>
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

</style>