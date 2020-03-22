<template>
    <b-row>
        <p>Registrieren</p>
        <b-form @submit.prevent="handleProfileCreate">
            <b-form-input required v-model="form.vorname" placeholder="Vorname"></b-form-input>
            <b-form-input required v-model="form.nachname" placeholder="Nachname"></b-form-input>
            <b-form-input required v-model="form.strasse" placeholder="Straße"></b-form-input>
            <b-form-input required v-model="form.hausnummer" placeholder="Hausnummer"></b-form-input>
            <b-form-input v-model="form.adresszusatz" placeholder="Adresszusatz"></b-form-input>
            <b-form-input required v-model="form.stadt" placeholder="Stadt"></b-form-input>
            <b-form-input required v-model="form.plz" placeholder="PLZ"></b-form-input>
            <b-form-input required v-model="form.land" placeholder="Land"></b-form-input>
            <b-button type="submit">Erstellen</b-button>
        </b-form>
    </b-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                vorname: '',
                nachname: '',
                strasse: '',
                hausnummer: '',
                adresszusatz: '',
                stadt: '',
                plz: '',
                land: ''
            }
        }
    },
    methods: {
        async handleProfileCreate() {
            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                            mutation Profile($vorname: String!, $nachname: String!, $strasse: String!, $hausnummer: String!, $adresszusatz: String!, $stadt: String!, $plz: String!, $land: String!){
                                createProfile(vorname: $vorname, nachname: $nachname, strasse: $strasse, hausnummer: $hausnummer, adresszusatz: $adresszusatz, stadt: $stadt, plz: $plz, land: $land) {
                                    uid
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
                        `,
                        variables: {
                            vorname: this.form.vorname,
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
            }catch(e) {
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>

</style>