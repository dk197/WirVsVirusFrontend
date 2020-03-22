<template>
    <b-container fluid>
        <b-row>
            <div v-if="!checkIfLoggedIn">
                <div v-if="showLoginForm">
                    <LoginForm></LoginForm>
                    <div id="register">
                        <p>Neu hier?</p>
                        <b-button type="submit" v-on:click="showRegistrationForm" variant="link">Registrieren</b-button>
                    </div>
                </div>
                <RegistrationForm v-else></RegistrationForm>
                <b-button @click="showRegistrationForm">Registrieren</b-button>
            </div>
            <div v-else>
                <div id="title">
                    <h1>PROFILE UND GUTHABEN</h1>
                </div>
                <b-container>
                    <div>
                        <h2>EINGELOGGT ALS</h2>
                        <div>
                            <label>Vorname</label>
                            <b-form-input></b-form-input>
                        </div>
                        <div>
                            <label>Nachname</label>
                            <b-form-input></b-form-input>
                        </div>
                        <div>
                            <label>E-Mail</label>
                            <b-form-input></b-form-input>
                        </div>
                        <b-button class="btn-profile btn-secondary" block pill>Änderungen speichern</b-button>
                        <div id="guthaben">
                            <h3>GUTHABEN</h3>
                            <p>23,00 €</p>
                        </div>
                        <b-button block pill class="btn-profile btn-black">
                            Guthaben und Transaktionen
                            <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
</svg>
                        </b-button>
                    </div>
                    <div>
                        <h2>PROFILE VERWALTEN</h2>
                        <!-- <div class="card">
                            <img src="@/assets/helga.png" alt="Profil Bild"/>
                            <h3>Hildegard Maier</h3>
                            <svg class="bi bi-chevron-right" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                        </div> -->
                        <b-card-group deck>
                            <b-card no-body class="overflow-hidden rounded-0">
                                <b-row no-gutters>
                                    <b-col cols="3">
                                        <b-card-img src="https://cdn.discordapp.com/attachments/690595900636004352/691237566568988742/unknown.png" class="rounded-0"></b-card-img>
                                    </b-col>
                                    <b-col cols="8">
                                        <b-card-body title="HILDEGARD MAIER"></b-card-body>
                                    </b-col>
                                    <b-col cols="1">
                                        <svg class="bi bi-chevron-right" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-card-group>
                    </div>

                    <p>Profil</p>
                    user is logged in
                    <b-button @click="showProfileForm">Profil anlegen</b-button>
                    <ProfileForm v-if="showProfileFormStatus"></ProfileForm>
                </b-container>
            </div>
        </b-row>
    </b-container>
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
    h1 {
        font-size: 18px;
        font-weight: 600;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-top: 30px;
    }

    #title {
        border-radius: 0 0 30px 30px;
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.10);
        -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.10);
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.10);
        width: 100vw;
        padding: 25px 0 40px;
        text-align: center;
    }

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

    #guthaben h3{
        font-size: 16px;
        font-weight: 100;
        margin: 30px 0 0;
    }

    #guthaben p{
        font-size: 35px;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
    }

    .btn-link, .btn-link:hover{
        color: #903737;
        padding: 0 5px;
    }

    .btn-profile {
        margin-top: 20px;
        padding: 15px 20px;
        border: 0;
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
    }

    .btn-secondary {
        background: #F2F2F2;
        color: #464646;
    }

    .btn-black {
        background: #212529;
        color: white;
    }

    .card {
        border: 0;
        border-radius: 0;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.10);
        margin-top: 20px;
    }

    .card .row {
        display: flex;
        align-items: center;
    }

    .card img {
        padding: 5px 10px;
        margin: 5px;
    }

    .card-title {
        font-size: 16px;
        margin-bottom: 0;
    }

    /* .card h3{
        font-size: 16px;
        float: left;
    } */

    label {
        padding: 0;
        font-weight: 100;
        margin: 10px 0 0;
        font-family: 'Montserrat', sans-serif;
    }

    .form-control {
        border: 0;
        border-radius: 0;
        border-bottom: 0.25px solid #464646;
        padding: 15px 0;
        transition: all 0.2s ease-out;
        color: #464646;
        font-weight: 600;
    }

    .form-control:focus {
        border: 0;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.34);
        padding: 15px 20px;
        transition: all 0.2s ease-out;
    }
</style>