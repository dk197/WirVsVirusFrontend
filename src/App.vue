<template>
    <div id="app">
        <div v-if="checkIfLoggedIn" class="tab-bar" ref="tabBar">
            <div class="tab-indicator" ref="tabIndicator">
                <div class="tab-indicator-left"></div>
                <div class="tab-indicator-right"></div>
            </div>
            <router-link to="/map" class="tab-item" v-on:click.native="clickHandler">
                <div class="tab-item-inner">
                    <svg id="layout" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 115.79 115.8">
                        <rect fill="none" stroke="#000" stroke-width="10" x="5" y="5" width="42.1" height="42.1"
                            rx="3.29" ry="3.29" />
                        <rect fill="none" stroke="#000" stroke-width="10" x="68.71" y="5.01" width="42.09"
                            height="42.09" rx="3.29" ry="3.29" />
                        <rect fill="none" stroke="#000" stroke-width="10" x="5" y="68.7" width="42.1" height="42.1"
                            rx="3.29" ry="3.29" />
                        <rect fill="none" stroke="#000" stroke-width="10" x="68.71" y="68.71" width="42.09"
                            height="42.09" rx="3.29" ry="3.29" />
                    </svg>
                </div>
            </router-link>
            <router-link to="/feed" class="tab-item" v-on:click.native="clickHandler">
                <div class="tab-item-inner">
                    <svg id="list" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.02 44.9">
                        <path fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                            d="M16.82 3.63h40.2" />
                        <circle fill="none" stroke="#000" stroke-width="6" cx="3.93" cy="3.93" r=".93" />
                        <path fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                            d="M16.82 22.17h40.2" />
                        <circle fill="none" stroke="#000" stroke-width="6" cx="3.93" cy="22.47" r=".93" />
                        <path fill="none" stroke="#000" stroke-width="6" stroke-linecap="round"
                            d="M16.82 40.67h40.2" />
                        <circle fill="none" stroke="#000" stroke-width="6" cx="3.93" cy="40.97" r=".93" />
                    </svg>
                </div>
            </router-link>
            <router-link to="/chat" class="tab-item" v-on:click.native="clickHandler">
                <div class="tab-item-inner">
                    <svg id="settings" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 116.21 116.03">
                        <path fill="none" stroke="#000" stroke-width="10"
                            d="M8.75 47.05A3.71 3.71 0 0 0 5 50.8v14.62a3.71 3.71 0 0 0 3.75 3.75h6.86a41.05 41.05 0 0 0 4.66 11.15l-4.76 4.76a3.75 3.75 0 0 0 0 5.3l10.33 10.33a3.77 3.77 0 0 0 5.31 0l4.84-4.85a43.85 43.85 0 0 0 11.15 4.57v6.86a3.71 3.71 0 0 0 3.75 3.75h14.62a3.71 3.71 0 0 0 3.75-3.75v-7a43.25 43.25 0 0 0 11.06-4.57l4.94 4.94a3.75 3.75 0 0 0 5.3 0l10.33-10.33a3.75 3.75 0 0 0 0-5.3l-4.94-4.94a43.25 43.25 0 0 0 4.57-11.06h7a3.71 3.71 0 0 0 3.75-3.75V50.71a3.71 3.71 0 0 0-3.75-3.75h-7a43.25 43.25 0 0 0-4.57-11.06l4.94-4.94a3.75 3.75 0 0 0 0-5.3L90.47 15.42a3.75 3.75 0 0 0-5.3 0l-4.85 4.85a47.63 47.63 0 0 0-11.15-4.65V8.75A3.71 3.71 0 0 0 65.42 5H50.8a3.71 3.71 0 0 0-3.75 3.75v6.87a43.85 43.85 0 0 0-11.15 4.57l-4.85-4.85a3.75 3.75 0 0 0-5.3 0L15.42 25.75a3.77 3.77 0 0 0 0 5.31l4.76 4.75a40.48 40.48 0 0 0-4.67 11.24z" />
                        <circle fill="none" stroke="#000" stroke-width="10" cx="58.01" cy="58.72" r="22.64" />
                    </svg>
                </div>
            </router-link>
            <router-link to="/profile" class="tab-item" v-on:click.native="clickHandler">
                <div class="tab-item-inner">
                    <svg id="message" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 115.4 99.43">
                        <path fill="none" stroke="#000000" stroke-width="10" stroke-linecap="round"
                            d="M27.89 51.02h59.62M27.89 31.02h59.62" />
                        <path fill="none" stroke="#000000" stroke-width="8"
                            d="M15.52 92.85h12v12.25a3.72 3.72 0 0 0 2.09 3.35 3.46 3.46 0 0 0 1.63.37 4 4 0 0 0 2.27-.73l20-15.15h60.05a3.68 3.68 0 0 0 3.72-3.72V23.1a3.68 3.68 0 0 0-3.72-3.72h-98a3.68 3.68 0 0 0-3.76 3.72v66a3.73 3.73 0 0 0 3.72 3.75z"
                            transform="translate(-6.8 -14.38)" />
                    </svg>
                </div>
            </router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
import router from './router/index.js'
export default {
    computed: {
        checkIfLoggedIn() {
            return this.$store.getters.isLoggedIn
        }
    },
    mounted: function() {
        if(!this.$store.getters.isLoggedIn) {
            router.push({ name: 'Profile' })
        }

        if(this.$store.getters.isLoggedIn) {
            const tabIndicator = this.$refs.tabIndicator;
            const activeTabLink = document.getElementsByClassName('router-link-active')[0];
            const distance = Math.floor(activeTabLink.getBoundingClientRect().left - 30);
            tabIndicator.style.transform = 'translateX(' + distance +'px)';
        }
    },
    methods: {
        clickHandler(event) {
            const tabIndicator = this.$refs.tabIndicator;
            
            const distance = Math.floor(event.target.getBoundingClientRect().left - 30);
            tabIndicator.style.transform = 'translateX(' + distance +'px)';
        }
    }
};
</script>
<style>
a {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px dashed #fff;
    cursor: pointer;
}

.tab-bar {
    background: #f5f5f5;
    padding: 0 20px;
    display: flex;
    position: fixed;
    bottom: 0;
    height: 10px;
    left: 0;
    right: 0;
    height: 80px;
    justify-content: space-between;
    z-index: 1;
}

.tab-bar .tab-indicator {
    position: absolute;
    background-color: white;
    width: 100px;
    height: 70px;
    border-radius: 0 0 50px 50px;
    z-index: 1;
    transform: translateX(245px);
    transition: transform 0.3s ease-out;
}

.tab-bar .tab-indicator .tab-indicator-left,
.tab-bar .tab-indicator .tab-indicator-right {
    background-color: white;
    height: 25px;
    width: 25px;
    position: absolute;
}

.tab-bar .tab-indicator .tab-indicator-left:after,
.tab-bar .tab-indicator .tab-indicator-right:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: block;
}

.tab-bar .tab-indicator .tab-indicator-left {
    left: -25px;
}

.tab-bar .tab-indicator .tab-indicator-left:after {
    border-radius: 0 25px 0 0;
}

.tab-bar .tab-indicator .tab-indicator-right {
    right: -25px;
}

.tab-bar .tab-indicator .tab-indicator-right:after {
    border-radius: 25px 0 0 0;
}

.tab-bar .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    outline: none !important;
    pointer-events:all;
}

.tab-bar .tab-item .tab-item-inner {
    position: absolute;
    display: flex;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    pointer-events:none;   
}

.tab-bar .tab-item .tab-item-inner svg {
    width: 40%;
    transition: fill 0.2s ease-out 0.2s;
    pointer-events:none;   
}

.tab-bar .tab-item .tab-item-inner svg * {
    stroke: black;
}

.tab-bar .tab-item.router-link-active .tab-item-inner {
    transform: translateY(-20px);
    transition-delay: 0.2s;
    background-color: black;
    z-index: 2;
    box-shadow: 0 5px 5px 0px rgba(0, 0, 0, .25);
}

.tab-bar .tab-item.router-link-active .tab-item-inner svg * {
    stroke: white;
    opacity: 0;
    animation: draw 0.8s linear forwards 0.2s;
}

.tab-item.router-link-active #layout * {
    stroke-dasharray: 260;
    stroke-dashoffset: 260;
}

.tab-item.router-link-active #list * {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
}

.tab-item.router-link-active #settings * {
    stroke-dasharray: 415;
    stroke-dashoffset: 415;
}

.tab-item.router-link-active #message * {
    stroke-dasharray: 370;
    stroke-dashoffset: 370;
}

.tab-item.router-link-active #user * {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
        opacity: 1;
    }
}
</style>
