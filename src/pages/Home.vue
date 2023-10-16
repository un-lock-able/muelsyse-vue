<script setup>
import backgroundImgUrl from "../assets/bg/Bg_rhine.png"
import muelsyseElite1Url from "../assets/muelsyse_elites/muelsyse.png";
import muelsyseElite2Url from "../assets/muelsyse_elites/muelsyse_2.png";
import muelsyseElite3Url from "../assets/muelsyse_elites/muelsyse_3.png";
</script>

<script>
export default {
    data() {
        return {
            imgName: 1,
            screenWidth: 0,
            screenHeight: 0,
            bgImgInstance: null,
        }
    },
    mounted() {
        document.body.classList.add('body-no-margin');
        document.body.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.onWindowResize);
        document.body.addEventListener('mouseleave', this.onLeaveWindow);
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.bgImgInstance = document.getElementById('background-img');
    },
    unmounted() {
        document.body.classList.remove('body-no-margin');
        document.body.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeEventListener('mouseleave', this.onLeaveWindow);
        window.removeEventListener('resize', this.onWindowResize);
    },
    methods: {
        onMouseMove(event) {
            let centerX = this.screenWidth / 2;
            let centerY = this.screenHeight / 2;
            let diffX = centerX - event.clientX;
            let diffY = centerY - event.clientY;
            this.bgImgInstance.style.filter = `blur(${(1 - (diffX ** 2 + diffY ** 2) / (centerX ** 2 + centerY ** 2)) * 2}px)`;
        },
        onWindowResize(event) {
            this.screenHeight = window.innerHeight;
            this.screenWidth = window.innerWidth;
        },
        onLeaveWindow(event) {
            this.bgImgInstance.style.filter = `blur(0)`;
        }
    }
}
</script>

<template>
    <nav class="nav-bar">
        <div class="header-buttons">
            <button @click="imgName = 1" :class="{ selected: imgName == 1 }">精英零</button>
            <button @click="imgName = 2" :class="{ selected: imgName == 2 }">精英二</button>
            <button @click="imgName = 3" :class="{ selected: imgName == 3 }">精英三（？）</button>

        </div>
        <div class="header-buttons">
            <button @click="$router.push('/tools')">小工具</button>
        </div>
    </nav>
    <img class="background-img" :src="backgroundImgUrl" draggable="false" oncontextmenu="return false" id="background-img">

    <div class="pic-container">
        <img class="muelsyse-pic elite1-pic" :src="muelsyseElite1Url" draggable="false" alt="这是缪缪。她很可爱，请给她钱。"
            title="这是缪缪。她很可爱，请给她钱。" :hidden="imgName != 1">
        <img class="muelsyse-pic" :src="muelsyseElite2Url" draggable="false" alt="这是精二缪缪。她很可爱，请给他钱。"
            title="这是精二缪缪。她很可爱，请给他钱。" :hidden="imgName != 2">
        <img class="muelsyse-pic" :src="muelsyseElite3Url" draggable="false" alt="这是缪缪。她很可爱，请给她钱。" title="这是缪缪。她很可爱，请给她钱。"
            :hidden="imgName != 3">
    </div>
</template>

<style scoped>
.background-img {
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transition-duration: 100ms;
}

.pic-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    user-select: none;
    overflow: hidden;
}

.muelsyse-pic {
    max-height: 100vh;
    max-width: 100vw;
    transition-duration: 1s;
}

.nav-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100vw;
}

.header-buttons {
    margin: 10px;
}

.header-buttons button {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    margin: 5px;
    font-size: large;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 2px;
    padding: 0.5ex 1em;
    transition: 0.2s;
    white-space: nowrap;
}

.header-buttons button:hover {
    color: rgb(26, 194, 253);
}

.header-buttons button.selected {
    color: rgb(26, 194, 253);
}
</style>