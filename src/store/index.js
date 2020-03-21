import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: false,

    },
    getters: {
        isLoggedIn(state) {
            return state.loggedIn
        }
    },
    mutations: {
        logUserIn(state) {
            state.loggedIn = !state.loggedIn
        }
    },
    actions: {
    },
    modules: {
    }
})
