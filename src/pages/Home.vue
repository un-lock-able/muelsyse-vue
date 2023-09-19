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
        }
    },
    mounted() {
        document.body.classList.add('body-no-margin')
    },
    unmounted() {
        document.body.classList.remove('body-no-margin')
    },
}
</script>

<template>
    <img class="background-img" :src="backgroundImgUrl" draggable="false" oncontextmenu="return false">
    <div class="pic-container">
        <img class="muelsyse-pic elite1-pic" :src="muelsyseElite1Url" draggable="false" alt="这是缪缪。她很可爱，请给她钱。"
            title="这是缪缪。她很可爱，请给她钱。" @click="$router.push('/tools')" :hidden="imgName != 1">
        <img class="muelsyse-pic" :src="muelsyseElite2Url" draggable="false" alt="这是精二缪缪。她很可爱，请给他钱。"
            title="这是精二缪缪。她很可爱，请给他钱。" @click="$router.push('/tools')" :hidden="imgName != 2">
        <img class="muelsyse-pic" :src="muelsyseElite3Url" draggable="false" alt="这是缪缪。她很可爱，请给她钱。" title="这是缪缪。她很可爱，请给她钱。"
            @click="$router.push('/tools')" :hidden="imgName != 3">
    </div>
    <div class="elite-switch-buttons">
        <button @click="imgName = 1" :class="{ selected: imgName == 1 }">精英零</button>
        <button @click="imgName = 2" :class="{ selected: imgName == 2 }">精英二</button>
        <button @click="imgName = 3" :class="{ selected: imgName == 3 }">精英三（？）</button>
    </div>
</template>

<style scoped>
.background-img {
    position: absolute;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    user-select: "none"
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