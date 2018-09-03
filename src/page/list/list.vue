<template>
  <div class="list">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">list</x-header>

    <section>
      <h1>嵌入路由转场</h1>
      <br />
      <div @click="$router.back()">返回</div>

      <div style="position: relative;">
        <a @click="$router.push('good')">进入good</a>
      </div>
    </section>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem } from 'vux'
  export default {
    name: 'list',
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
  @import "list";
</style>
