<template>
  <div class="list">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus=true">list</x-header>

    <div @click="$router.back()">返回</div>
    <div>
      <a @click="$router.push('good')">进入good</a>
    </div>
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  export default {
    name: 'list',
    components: {
      XHeader,
    },
    data() {
      return {
        showMenus: false,
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
