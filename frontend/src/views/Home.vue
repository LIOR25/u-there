<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/cover.png"> -->
    <img alt="cover" src="../assets/02-full.png" />

    <img class="logo" alt="logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to uThere" />
    <CityList></CityList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CityList from "@/components/city/CityList.vue";

export default {
  name: "home",
  components: {
    CityList
  },
  created() {
    // this.$store.getters.cities.length || this.$store.dispatch("loadCities");
    this.$store.dispatch("loadCities");
    console.log(this.$store.state);
  }
};
</script>


<style lang="scss">
img {
  position: absolute;
  width: 100%;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
}

.logo {
  height: 33px;
  width: 124px;
  padding: 14px 16px;
}
</style>