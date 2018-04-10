<template>
  <div id="app">
    <router-view class="vh-100" v-transition></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .vh-100 {
    min-height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
