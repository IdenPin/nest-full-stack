<template>
  <div id="app">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
</style>
