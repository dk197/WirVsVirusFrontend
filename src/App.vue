<template>
    <div id="app">
        <div>
            <b-nav class="bottom-nav" tabs justified>
                <b-nav-item active><router-link to="/">Map</router-link></b-nav-item>
                <b-nav-item><router-link to="/feed">Feed</router-link></b-nav-item>
                <b-nav-item><router-link to="/chat">Chat</router-link></b-nav-item>
                <b-nav-item><router-link to="/profile">Profil</router-link></b-nav-item>
            </b-nav>
        </div>
        <b-container fluid>
            <router-view />
        </b-container>
    </div>
</template>

<style>
.bottom-nav {
    position: fixed; 
    width: 100%;
    bottom: 0;
}
</style>
