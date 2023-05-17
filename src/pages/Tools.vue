<template>
  <h1>🧀️一些小工具的链接！</h1>

  <div class="link-cards">
    <a href="https://wiki.biligame.com/arknights" target="_blank">
      <button>
        明日方舟wiki——Bilibili游戏wiki
      </button>
    </a>
    <a href="https://wiki.biligame.com/arknights/%E5%85%AC%E5%BC%80%E6%8B%9B%E5%8B%9F%E5%B7%A5%E5%85%B7" target="_blank">
      <button>公招工具——Bilibili游戏wiki</button>
    </a>

    <a href="https://penguin-stats.io/" target="_blank">
      <button>企鹅物流数据统计</button>
    </a>

    <a href="https://arknights.fandom.com" target="_blank">
      <button>Arknights Wiki - fandom</button>
    </a>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.link-cards {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5vw;
  justify-content: space-around;
  align-items: flex-start;
}

.link-cards button {
  width: 250px;
  margin: 20px;
}
</style>