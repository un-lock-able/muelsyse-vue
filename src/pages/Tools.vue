<script>
export default {
  data() {
    return {
      toolWebsites: [
        {
          siteName: "明日方舟wiki——Bilibili游戏wiki",
          siteUrl: "https://wiki.biligame.com/arknights",
        },
        {
          siteName: "公招工具——Bilibili游戏wiki",
          siteUrl: "https://wiki.biligame.com/arknights/%E5%85%AC%E5%BC%80%E6%8B%9B%E5%8B%9F%E5%B7%A5%E5%85%B7",
        },
        {
          siteName: "企鹅物流数据统计",
          siteUrl: "https://penguin-stats.io",
        },
        {
          siteName: "Arknights Wiki - fandom",
          siteUrl: "https://arknights.fandom.com"
        },
        {
          siteName: "PRTS Wiki",
          siteUrl: "https://prts.wiki"
        }
      ]
    }
  }
}
</script>

<template>
  <h1>🧀️一些小工具的链接！</h1>
  <div class="link-cards">
    <a v-for="website in this.toolWebsites" :href="website.siteUrl" target="_blank">
      <button> {{ website.siteName }}</button>
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
}

.link-cards button {
  width: 300px;
  margin: 20px;
  color: #FFFFFF;
  transition: 0.5s;
  background-color: #F596AA;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  line-height: 50px;
  box-shadow: 0px 6px 10px #F596AA99;
}

.link-cards button:hover {
  box-shadow: 0px 8px 20px #F596AA;
  cursor: pointer;
}
</style>