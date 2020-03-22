<template>
    <div id="ebene1">
        <div id="ebene2">
            <div id="ebene3">
                <div id="ebene4">
                    <div id="login">
                        <b-container>
                            <b-row>
                                <b-col>
                                    <h1>Login</h1>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <p style="color: #464646, font-weight: 100">Melde dich hier an.</p>
                                </b-col>
                            </b-row>
                            <b-form @submit.prevent="handleLogin">
                                <b-form-input required v-model="form.email" placeholder="E-Mail"></b-form-input>
                                <b-form-input required v-model="form.password" placeholder="Passwort"></b-form-input>
                                <b-button type="submit" pill variant="dark">
                                    Anmelden
                                    <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
</svg>
                                </b-button>
                            </b-form>
                        </b-container>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                            email: "t.haral2d@gmx.de",
                            password: "Test123"
                        }
                    }
                );
                console.log(response.data.data.login);
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
#ebene1 {
    height: 100vh;
    width: 100vw;
    background: #903737;
    position: absolute;
    top: 0;
    left: 0;
}
#ebene2 {
    background-color: #E19B86;
    border-radius: 30px 30px 0 0;
    height: 80vh;
    width: 100vw;
    position: absolute;
    top: 20vh;
    left: 0;
}

#ebene3 {
    background: #F7D4B6;
    border-radius: 30px 30px 0 0;
    height: 10vh;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
}

#ebene4 {
    background: #F9E2C1;
    border-radius: 30px 30px 0 0;
    height: 10vh;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
}

#login {
    background: white;
    border-radius: 30px 30px 0 0;
    height: 65vh;
    width: 100vw;
    position: absolute;
    top: 5vh;
    left: 0;
    padding-top: 100px;
}

.form-control {
    border: 0;
    border-radius: 0;
    border-bottom: 0.25px solid #464646;
    padding: 25px 0;
    transition: all 0.2s ease-out;
    margin-bottom: 10px;
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