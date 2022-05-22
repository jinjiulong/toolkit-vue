<!--
    动态应用容器
    包含一个应用
-->
<template>
  <!-- 小窗 -->
  <div class="app-window">
    <!-- 标题栏 -->
    <div class="app-title-bar">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="app-title-bar-middle">

      </div>
      <div class="app-button-bar">
        <i class="fa fa-refresh" title="刷新"></i>
        <i class="fa fa-minus" title="最小化"></i>
        <i class="fa fa-close" title="关闭"></i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: String
  }
})
export default class DynamicAppContainerView extends Vue {
  title = '标题'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.app-title-bar {
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  height: 40px;
  background-color: #000;
  opacity: 0.7;
  color:white;
  font-size: 16px;
  line-height: 40px;
  padding:0 10px;
}
.app-title{
  flex-grow: 0;
  flex-shrink: 0;
}
.app-title-bar-middle{
  flex-grow: 1;
  flex-shrink: 1;
}
.app-button-bar{
  flex-grow: 0;
  flex-shrink: 0;
}
.app-button-bar i{
  padding:0 5px;
}
.app-content {
  flex-grow: 1;
  background-color: #e3e3e3;
  padding: 10px;
}
</style>
