<template>
  <div class="good">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">good</x-header>

    <div>
      <a @click="$router.back()">返回list</a>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: 'good',
    components: {
      XHeader
    },
    data() {
      return {
        showMenus: false,
      }
    },
  }
</script>

<style scoped lang="less">
  @import "good";
</style>
