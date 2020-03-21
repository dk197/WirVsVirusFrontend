<template>
    <div id="app">
        <!-- <div>
            <div id="background">
                <div id="round">
                </div>
            </div>
            <b-nav id="tab-bar" tabs justified>
                <b-nav-item class="icon selected" active>
                    <router-link to="/">
                        <img class="icon-picture" src="https://image.flaticon.com/icons/svg/709/709579.svg" />
                    </router-link>
                </b-nav-item>
                <b-nav-item class="icon">
                    <router-link to="/feed">
                        <img class="icon-picture" src="https://image.flaticon.com/icons/svg/709/709579.svg" />
                    </router-link>
                </b-nav-item>
                <b-nav-item class="icon">
                    <router-link to="/chat">
                        <img class="icon-picture" src="https://image.flaticon.com/icons/svg/709/709579.svg" />
                    </router-link>
                </b-nav-item>
                <b-nav-item class="icon">
                    <router-link to="/profile">
                        <img class="icon-picture" src="https://image.flaticon.com/icons/svg/709/709579.svg" />
                    </router-link>
                </b-nav-item>
            </b-nav>
        </div>
        <b-container fluid>
            <router-view />
        </b-container> -->
        <div class="tab-bar" ref="tabBar">
            <div class="tab-indicator" ref="tabIndicator">
                <div class="tab-indicator-left"></div>
                <div class="tab-indicator-right"></div>
            </div>
            <a href="#" class="tab-item active" v-on:click="clickHandler">
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
            </a>
            <a href="#" class="tab-item" v-on:click="clickHandler">
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
            </a>
            <a href="#" class="tab-item" v-on:click="clickHandler">
                <div class="tab-item-inner">
                    <svg id="settings" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 116.21 116.03">
                        <path fill="none" stroke="#000" stroke-width="10"
                            d="M8.75 47.05A3.71 3.71 0 0 0 5 50.8v14.62a3.71 3.71 0 0 0 3.75 3.75h6.86a41.05 41.05 0 0 0 4.66 11.15l-4.76 4.76a3.75 3.75 0 0 0 0 5.3l10.33 10.33a3.77 3.77 0 0 0 5.31 0l4.84-4.85a43.85 43.85 0 0 0 11.15 4.57v6.86a3.71 3.71 0 0 0 3.75 3.75h14.62a3.71 3.71 0 0 0 3.75-3.75v-7a43.25 43.25 0 0 0 11.06-4.57l4.94 4.94a3.75 3.75 0 0 0 5.3 0l10.33-10.33a3.75 3.75 0 0 0 0-5.3l-4.94-4.94a43.25 43.25 0 0 0 4.57-11.06h7a3.71 3.71 0 0 0 3.75-3.75V50.71a3.71 3.71 0 0 0-3.75-3.75h-7a43.25 43.25 0 0 0-4.57-11.06l4.94-4.94a3.75 3.75 0 0 0 0-5.3L90.47 15.42a3.75 3.75 0 0 0-5.3 0l-4.85 4.85a47.63 47.63 0 0 0-11.15-4.65V8.75A3.71 3.71 0 0 0 65.42 5H50.8a3.71 3.71 0 0 0-3.75 3.75v6.87a43.85 43.85 0 0 0-11.15 4.57l-4.85-4.85a3.75 3.75 0 0 0-5.3 0L15.42 25.75a3.77 3.77 0 0 0 0 5.31l4.76 4.75a40.48 40.48 0 0 0-4.67 11.24z" />
                        <circle fill="none" stroke="#000" stroke-width="10" cx="58.01" cy="58.72" r="22.64" />
                    </svg>
                </div>
            </a>
            <a href="#" class="tab-item" ref="tabItem" v-on:click="clickHandler">
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
            </a>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        clickHandler(event) {
            const tabItems = document.getElementsByClassName('tab-item')
            const tabIndicator = this.$refs.tabIndicator;

            tabItems.forEach(element => {
                element.classList.remove('active');
            });

            event.target.classList.add('active');
            
            const distance = Math.floor(event.target.getBoundingClientRect().left - 30);
            tabIndicator.style.transform = 'translateX(' + distance +'px)';
        }
    }
};
</script>
<style>
#app{
    height: 100vh;
    width: 100vw;
    background: lightgrey;
}
a {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px dashed #fff;
    cursor: pointer;
}

.tab-bar {
    background: white;
    padding: 0 20px;
    display: flex;
    position: fixed;
    bottom: 0;
    height: 10px;
    left: 0;
    right: 0;
    height: 80px;
    justify-content: space-between;
}

.tab-bar .tab-indicator {
    position: absolute;
    background-color: lightgrey;
    width: 100px;
    height: 70px;
    border-radius: 0 0 50px 50px;
    z-index: 1;
    transform: translateX(-10px);
    transition: transform 0.3s ease-out;
}

.tab-bar .tab-indicator .tab-indicator-left,
.tab-bar .tab-indicator .tab-indicator-right {
    background-color: lightgrey;
    height: 25px;
    width: 25px;
    position: absolute;
}

.tab-bar .tab-indicator .tab-indicator-left:after,
.tab-bar .tab-indicator .tab-indicator-right:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #fefcfe;
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
    stroke: #bbb;
}

.tab-bar .tab-item.active .tab-item-inner {
    transform: translateY(-20px);
    transition-delay: 0.2s;
    background-color: #fefcfe;
    z-index: 2;
    box-shadow: 0 5px 5px 0px rgba(0, 0, 0, .25);
}

.tab-bar .tab-item.active .tab-item-inner svg * {
    stroke: #333;
    opacity: 0;
    animation: draw 0.8s linear forwards 0.2s;
}

.tab-item.active #layout * {
    stroke-dasharray: 260;
    stroke-dashoffset: 260;
}

.tab-item.active #list * {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
}

.tab-item.active #settings * {
    stroke-dasharray: 415;
    stroke-dashoffset: 415;
}

.tab-item.active #message * {
    stroke-dasharray: 370;
    stroke-dashoffset: 370;
}

.tab-item.active #user * {
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
