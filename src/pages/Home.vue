<script setup>
import backgroundImgUrl from "../assets/bg/Bg_rhine.png"
import muelsyseElite1Url from "../assets/muelsyse.png";
import muelsyseElite2Url from "../assets/muelsyse_2.png";
</script>

<script>
export default {
    data() {
        return {
            elite1: true,
        }
    },
    mounted() {
        document.body.classList.add('body-no-margin')
    },
    unmounted() {
        document.body.classList.remove('body-no-margin')
    },
    computed: {
        muelsysePicUrl() {
            return this.elite1 ? muelsyseElite1Url : muelsyseElite2Url;
        }
    }
}
</script>

<template>
    <img class="background-img" :src="backgroundImgUrl">
    <div class="pic-container">
        <img class="muelsyse-pic" :class="{ 'elite1-pic': elite1 }"
            :src="muelsysePicUrl" draggable="false" alt="这是缪缪。她很可爱，请给她钱。"
            title="这是缪缪。她很可爱，请给她钱。" @click="$router.push('/tools')">
    </div>
    <div class="elite-switch-buttons">
        <button @click="elite1 = true" :class="{ selected: elite1 }">精英零</button>
        <button @click="elite1 = false" :class="{ selected: !elite1 }">精英二</button>
    </div>
</template>

<style scoped>
.background-img {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
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
    transition-duration: 0.5s;
}

.muelsyse-pic:hover {
    --translate-distance: 0;
    transform: scale(1.2) translateY(var(--translate-distance));
    cursor: pointer;
}

.muelsyse-pic.elite1-pic:hover {
    --translate-distance: 5vh;
}

.elite-switch-buttons {
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
}

.elite-switch-buttons button {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    margin: 5px;
    font-size: large;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 2px;
    padding: 0.5ex 1em;
    transition: 0.2s
}

.elite-switch-buttons button:hover {
    color: rgb(26, 194, 253);
}

button.selected {
    color: rgb(26, 194, 253);
}
</style>