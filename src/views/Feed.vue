<template>
    <b-row>
        <p>Feed</p>
         <router-link to="/createoffer"><b-button class="tobotbtn">+</b-button></router-link>
    </b-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            offers: []
        }
    },
    methods: {
        async getAllOffers() {
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
                localStorage.setItem('token', response.data.data.login.token)
                this.$store.commit('logUserIn')
            }catch(e) {
                console.log(e);
            }
        },
    }
}
</script>

<style scoped>
.tobotbtn {
    position: fixed;
    bottom: 12%;
    right: 5%;;
    border-radius: 50%;
    background-color: black;
}
</style>