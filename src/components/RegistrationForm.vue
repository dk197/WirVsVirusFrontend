<template>
    <b-row>
        <p>Registrieren</p>
        <b-form @submit.prevent="handleRegistration">
            <b-form-input required v-model="form.vorname" placeholder="Vorname"></b-form-input>
            <b-form-input required v-model="form.nachname" placeholder="Nachname"></b-form-input>
            <b-form-input required v-model="form.email" placeholder="E-Mail"></b-form-input>
            <b-form-input required v-model="form.password" placeholder="Passwort"></b-form-input>
            <b-form-input
                required
                v-model="form.password_confirmation"
                placeholder="Passwort bestätigen"
            ></b-form-input>
            <b-button type="submit">Registrieren</b-button>
        </b-form>
    </b-row>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            form: {
                vorname: "",
                nachname: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    methods: {
        async handleRegistration() {
            if (this.form.password !== this.form.password_confirmation) {
                return alert("Passwörter stimmen nicht überein");
            }

            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                        mutation User($vorname: String!, $nachname: String!, $email: String!, $password: String!){
                            register(vorname: $vorname, nachname: $nachname, email: $email, password: $password) {
                                token
                                userId
                                tokenExpiration
                            }
                    }`,
                        variables: {
                            vorname: this.form.vorname,
                            nachname: this.form.nachname,
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