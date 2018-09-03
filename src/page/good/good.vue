<template>
  <div class="good">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">good</x-header>

    <div style="position: relative;">
      <a @click="$router.back()">返回list</a>
    </div>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem } from 'vux'
  export default {
    name: 'good',
    components: {
      XHeader
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
  }
</script>

<style scoped lang="less">
  @import "good";
</style>
