<template>
    <div class="pic-container">
        <img class="muelsyse-pic" src="../assets/muelsyse.png" draggable="false" alt="这是缪尔赛思。她很可爱，请给她钱。"
            title="这是缪尔赛思。她很可爱，请给她钱。" @click="this.$router.push('/tools')">
    </div>
</template>

<style scoped>
.muelsyse-pic {
    max-height: 90vh;
    max-width: 90vw;
    transition-duration: 0.5s;
}

.pic-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    user-select: none;
}

.muelsyse-pic:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>