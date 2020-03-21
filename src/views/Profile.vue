<template>
    <b-row>
        <p>Profil</p>
        <div v-if="!checkIfLoggedIn">
            <LoginForm v-if="showLoginForm"></LoginForm>
            <RegistrationForm v-else></RegistrationForm>
        </div>
        <div v-else>
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
    components: {
        LoginForm,
        RegistrationForm
    }
}
</script>

<style scoped>

</style>