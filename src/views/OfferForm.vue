<template>
    <b-row>
        <p>Eintrag erstellen</p>
        <b-form @submit="handleOfferCreate">
            <b-col cols="12">
                <b-form-group>
                    <b-form-radio-group v-model="form.formType">
                        <b-form-radio value="suchen">Suchen</b-form-radio>
                        <b-form-radio value="bieten">Bieten</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
                <b-form-select v-model="form.category" :options="options.category"></b-form-select>
                <b-form-input required v-model="form.land" placeholder="Titel"></b-form-input>
                <b-form-textarea required v-model="form.land" placeholder="Beschreibung"></b-form-textarea>
                <b-form-select v-model="form.profile" :options="options.profile"></b-form-select>
                <b-form-textarea v-if="form.category === 'einkaufsliste'" v-model="form.shoppingList" placeholder="Einkaufsliste (optional)"></b-form-textarea>
            <b-button type="submit">Erstellen</b-button>
        </b-form>
    </b-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            options: {
                category: [
                    {value: null, text: 'Bitte Kategorie auswählen'},
                    {value: 'einkaufsliste', text: 'Einkaufsliste'},
                    {value: 'tiere', text: 'Tiere'},
                    {value: 'sonstiges', text: 'Sonstiges'}
                ],
                profile: [
                    {value: null, text: 'Bitte Kategorie auswählen'}
                ]
            },
            form: {
                formType: "suchen",
                category: null,
                title: '',
                description: '',
                profile: null,
                shoppingList: ''
            }
        };
    },
    mounted() {
        this.addUsersProfilesToSelect()
    },
    methods: {
        addUsersProfilesToSelect() {
            const profiles =this.getUsersProfiles()

            console.log(profiles);
        },
        async getUsersProfiles() {
            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                            query {
                                getMyProfiles {
                                    uid
                                    pid
                                    vorname
                                    nachname
                                    strasse
                                    hausnummer
                                    adresszusatz
                                    stadt
                                    plz
                                    land
                                    long
                                    lat
                                }
                            }
                        `
                    },
                    {headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }}
                );
                console.log(response.data);
            }catch(e) {
                console.log(e);
            }
        },
        async handleOfferCreate() {
            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                            mutation Offer($offerType: String!, $nachname: String!, $strasse: String!, $hausnummer: String!, $adresszusatz: String!, $stadt: String!, $plz: String!, $land: String!){
                                createOffer(vorname: $vorname, nachname: $nachname, strasse: $strasse, hausnummer: $hausnummer, adresszusatz: $adresszusatz, stadt: $stadt, plz: $plz, land: $land) {
                                    uid
                                    offerType
                                    nachname
                                    strasse
                                    hausnummer
                                    adresszusatz
                                    stadt
                                    plz
                                    land
                                    long
                                    lat
                                }
                            }
                        `,
                        variables: {
                            offerType: this.form.offerType,
                            nachname: this.form.nachname,
                            strasse: this.form.strasse,
                            hausnummer: this.form.hausnummer,
                            adresszusatz: this.form.adresszusatz,
                            stadt: this.form.stadt,
                            plz: this.form.plz,
                            land: this.form.land
                        }
                    },
                    {headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }},
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