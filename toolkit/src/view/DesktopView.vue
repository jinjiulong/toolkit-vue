<!--
    桌面
    图标、任务栏、活动窗口
-->

<template>
  <div class="desktop">
    <!-- 主界面 -->
    <div class="main">
      <!-- 图标容器 -->
      <div class="shortcut-box">
        <div class="shortcut-item" v-for="item in quickLinkList" v-bind:key="item.id">
          <img class="shortcut-icon" alt="" :src="item.icon" />
          <div class="shortcut-text">{{ item.text }}</div>
          <div class="shortcut-mask" @click="linkClick"></div>
        </div>
      </div>
      <!-- 任务栏 -->
      <footer></footer>
    </div>
    <!-- 其他动态部件 begin -->
    <div></div>
    <!-- 其他动态部件 end -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

class QuickLinkItem {
  id = ''
  icon = ''
  text = ''
  target = ''
}

@Options({
  props: {
    
  }
})
export default class DesktopView extends Vue {
  
  //快捷方式列表
  quickLinkList: QuickLinkItem[] = []

  public mounted (): void {
    this.refreshQuickLinkList()
  }

  public refreshQuickLinkList (): void {
    this.axios
      .get('/fakeapi/desktop/getlistquicklink.json')
      .then((response) => {
        console.log('response:', response)
        if (response.status === 200) {
          this.quickLinkList = response.data
        }
      })
      .catch((resaon) => {
        console.log('resaon:', resaon)
      })
  }

  public linkClick():void{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desktop {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0d1117;
}

.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.shortcut-box {
  flex: auto;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
}

.shortcut-item {
  width: 85px;
  height: 90px;
  margin: 5px;
}

.shortcut-icon {
  width: 48px;
  height: 48px;
  display: block;
  margin: 0 auto 2px auto;
}

.shortcut-text {
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 12px;
  text-align: center;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color:white;
}

.shortcut-mask {
  position: relative;
  top: -85px;
  left: 0px;
  width: 85px;
  height: 90px;
  background-color: #000;
  opacity: 0.2;
  cursor: pointer;
}

.shortcut-mask:hover {
  opacity: 0;
}

footer {
  flex-grow: 0;
  flex-shrink: 0;
  background-color: black;
  opacity: 0.8;
  height: 50px;
}
</style>
