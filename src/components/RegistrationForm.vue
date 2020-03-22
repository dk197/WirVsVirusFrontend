<template>
    <div id="ebene1">
        <div id="ebene2">
            <div id="ebene3">
                <div id="register">
                    <b-container>
                        <b-row>
                            <b-col>
                                <svg class="bi bi-arrow-left" viewBox="0 0 16 16"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                                        clip-rule="evenodd" />
                                    <path fill-rule="evenodd"
                                        d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                        clip-rule="evenodd" />
                                </svg>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <h2>REGISTRIEREN</h2>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <p id="untertitel">Bitte melde dich hier an.</p>
                            </b-col>
                        </b-row>
                        <b-form @submit.prevent="handleRegistration">
                            <b-form-input required v-model="form.vorname" placeholder="Vorname"></b-form-input>
                            <b-form-input required v-model="form.nachname" placeholder="Nachname"></b-form-input>
                            <b-form-input required v-model="form.email" placeholder="E-Mail"></b-form-input>
                            <b-form-input required v-model="form.password" placeholder="Passwort"></b-form-input>
                            <b-form-input required v-model="form.password_confirmation"
                                placeholder="Passwort bestätigen"></b-form-input>
                            <b-button type="submit" pill variant="dark">
                                Registrieren
                                <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
                                        clip-rule="evenodd" />
                                </svg>
                            </b-button>
                        </b-form>
                    </b-container>
                </div>
            </div>
        </div>
    </div>
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
                localStorage.setItem('token', response.data.data.register.token)
                this.$store.commit('logUserIn')
            }catch(e) {
                console.log(e);
            }
        }
    }
};
</script>
<style scoped>
#ebene1 {
    height: 100vh;
    width: 100vw;
    background: #E19B86;
    position: absolute;
    top: 0;
    left: 0;
}
#ebene2 {
    background-color: #F7D4B6;
    border-radius: 30px 30px 0 0;
    height: 90vh;
    width: 100vw;
    position: absolute;
    top: 7vh;
    left: 0;
}

#ebene3 {
    background: #F9E2C1;
    border-radius: 30px 30px 0 0;
    height: 88vh;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
}

#register {
    background: white;
    border-radius: 30px;
    height: 78vh;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
    padding-top: 50px;
}

.bi-arrow-left {
    height: 2.5em;
    margin-bottom: 10px;
}

#untertitel {
    color: #464646;
    font-weight: 300;
    margin-bottom: 30px;
}

.form-control {
    border: 0;
    border-radius: 0;
    border-bottom: 0.25px solid #464646;
    padding: 25px 0;
    transition: all 0.2s ease-out;
    margin-bottom: 10px;
    color: #464646;
    font-weight: 300;
}

.form-control:focus {
    border: 0;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
    padding: 25px 20px;
    transition: all 0.2s ease-out;
}

button {
    margin-top: 40px;
    float: right;
    background: black;
    padding: 10px 20px;
}
</style>