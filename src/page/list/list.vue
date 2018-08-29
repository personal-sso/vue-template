<template>
  <div class="list">
    <section>
      <h1>嵌入路由转场</h1>
      <br />
      <div @click="$router.back()">返回</div>
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
    }
  }
</script>

<style scoped lang="less">
  @import "list";
</style>
