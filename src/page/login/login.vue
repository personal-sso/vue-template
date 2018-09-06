<template>
  <div class="login">
    登陆：
    <group>
      <x-input title="账号" v-model="name"></x-input>
      <x-input title="密码" v-model="pas"></x-input>
      <x-button type="default" text="登陆"></x-button>
    </group>
  </div>
</template>

<script>
  import { XInput, Group, XButton } from 'vux'
  export default {
    name: 'login',
    components: {
      XInput,
      Group,
      XButton
    },
    data() {
      return {
        name: '',
        pas: ''
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  @import "login";
</style>
