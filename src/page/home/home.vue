<template>
  <div class="home">
    <x-header
      :right-options="{showMore: true}"
      @on-click-more="showMenus=true"
    >首页
    </x-header>
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected>已发货</tab-item>
      <tab-item>未发货</tab-item>
      <tab-item>全部订单</tab-item>
    </tab>
    <span @click="useName">点击渲染</span>
    <ul>
      <li v-for="item in doneTodosCount.arr" :key="item.id">
        {{item.name}}
      </li>
    </ul>
    <div>
      <a @click="$router.push('list')">默认转场效果</a>
      <a @click="$router.push('login')">login</a>
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
        showMenus: false
      }
    },
    computed: {
      doneTodosCount() {
        return this.$store.getters.doneText
      },
    },
    methods: {
      useName() {
        console.log(this.$store.dispatch('CHANGE_TEXT'))
      }
    }
  }
</script>

<style scoped lang="less">
  @import "home";
</style>
