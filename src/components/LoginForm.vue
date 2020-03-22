<template>
    <b-row>
        <p>Login</p>
        <b-form @submit.prevent="handleLogin">
            <b-form-input required v-model="form.email" placeholder="E-Mail"></b-form-input>
            <b-form-input required v-model="form.password" placeholder="Passwort"></b-form-input>
            <b-button type="submit">Anmelden</b-button>
        </b-form>
    </b-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async handleLogin() {

            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                        query User($email: String!, $password: String!){
                            login(email: $email, password: $password) {
                                userId
                                token
                            }
                        }`,
                        variables: {
                            email: this.form.email,
                            password: this.form.password
                        }
                    }
                );
                console.log(response.data);
                localStorage.setItem('token', response.data.data.login.token)
                this.$store.commit('logUserIn')
            }catch(e) {
                console.log(e);
            }
        }
    }
};
</script>

<style scoped>
</style>