<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/index.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
a{
    -webkit-tap-highlight-color: transparent;
}
a, .no-sel{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
a:focus {
    outline: none;
    color: transparent;
    color: red !important;
}
</style>
