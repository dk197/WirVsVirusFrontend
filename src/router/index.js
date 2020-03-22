import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/Map.vue'
import Feed from '../views/Feed.vue'
import Chat from '../views/Chat.vue'
import Profile from '../views/Profile.vue'
import OfferForm from '../views/OfferForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/map',
        name: 'Map',
        component: Map
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Feed
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/createoffer',
        name: 'CreateOffer',
        component: OfferForm
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
