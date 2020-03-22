<template>
    <b-row>
        <p>Eintrag erstellen</p>
        <b-form @submit.prevent="handleOfferCreate">
            <b-col cols="12">
                <b-form-group>
                    <b-form-radio-group v-model="form.formType">
                        <b-form-radio value="suchen">Suchen</b-form-radio>
                        <b-form-radio value="bieten">Bieten</b-form-radio>
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
                <b-form-select v-model="form.category" :options="options.category"></b-form-select>
                <b-form-input required v-model="form.title" placeholder="Titel"></b-form-input>
                <b-form-textarea required v-model="form.description" placeholder="Beschreibung"></b-form-textarea>
                <b-form-select v-model="form.profile" :options="options.profile"></b-form-select>
                <b-form-textarea v-if="form.category === 'einkaufsliste'" v-model="form.shoppingList" placeholder="Einkaufsliste (optional)"></b-form-textarea>
                <b-form-input :type="'number'" required v-model="form.cost" placeholder="geschätzte Kosten"></b-form-input>
                <b-form-input :type="'number'" required v-model="form.tip" placeholder="Trinkgeld"></b-form-input>
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
                shoppingList: '',
                cost: 0,
                tip: 0
            },
            addressProfiles: []
        };
    },
    mounted() {
        this.addUsersProfilesToSelect()
    },
    methods: {
        async addUsersProfilesToSelect() {
            const profiles = await this.getUsersProfiles()

            profiles.forEach(addressProfile => {
                this.options.profile.push({value: addressProfile.pid, text: `${addressProfile.nachname} (${addressProfile.strasse} ${addressProfile.hausnummer})`})
                this.addressProfiles.push(addressProfile)
            });
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
                return response.data.data.getMyProfiles
            }catch(e) {
                console.log(e);
            }
        },
        async handleOfferCreate() {
            const indexOfProfile = this.addressProfiles.findIndex(x => x.pid === this.form.profile);
            const profile = this.addressProfiles[indexOfProfile]

            try {
                const response = await axios.post(
                    "http://95.217.162.151:4000/graphql",
                    {
                        query: `
                            mutation Offer($offertype: String!, $jobtype: String!, $title: String!, $description: String!, $vorname: String!, $nachname: String!, $cost: Float!, $tipp: Float!, $shoppingList: String!, $long: String!, $lat: String!){
                                createOffer(offertype: $offertype, jobtype: $jobtype, title: $title, description: $description, vorname: $vorname, nachname: $nachname, cost: $cost, tipp: $tipp, shoppingList: $shoppingList, long: $long, lat: $lat) {
                                    uid
                                    oid
                                    offertype
                                    jobtype
                                    date
                                    title
                                    description
                                    vorname
                                    nachname
                                    cost
                                    tipp
                                    shoppingList
                                    long
                                    lat
                                }
                            }
                        `,
                        variables: {
                            offertype: this.form.formType,
                            jobtype: this.form.category,
                            title: this.form.title,
                            description: this.form.description,
                            vorname: profile.vorname,
                            nachname: profile.nachname,
                            cost: parseFloat(this.form.cost),
                            tipp: parseFloat(this.form.tip),
                            shoppingList: this.form.shoppingList,
                            long: profile.long.toString(),
                            lat: profile.lat.toString()
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
};
</script>

<style scoped>
</style>