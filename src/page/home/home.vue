<template>
  <div class="home">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">首页</x-header>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected>已发货</tab-item>
      <tab-item>未发货</tab-item>
      <tab-item>全部订单</tab-item>
    </tab>

    <div style="position: relative;">
      <a @click="$router.push('list')">默认转场效果</a>
    </div>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem } from 'vux'
  export default {
    name: 'home',
    components: {
      XHeader,
      Tab,
      TabItem
    },
    data() {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        showMenus: false
      }
    },
    methods: {
      test() {
        this.$el.classList.add('animated');
        this.$el.classList.add('fadeInRight')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "home";
</style>
