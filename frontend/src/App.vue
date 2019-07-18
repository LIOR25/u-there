<template>
  <div id="app">
    <AppNav class="nav-bar"></AppNav>
    <router-view />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue"
export default {
  components: {
    AppNav
  },
  // created() {
  //   // this.store.dispatch('checkLoggedInUser')
  // }  
}
</script>


<style scoped lang="scss">
// @/styles/views/_home-page.scss
body {
  margin: 0;
  box-sizing: border-box;
}

.nav-bar {
  position: absolute;
  width: 100%
}

</style>
