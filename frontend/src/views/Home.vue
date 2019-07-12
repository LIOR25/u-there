<template>
  <div class="home">

    <header class="home-header">
      <HomeNav></HomeNav>
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <HelloWorld class="welcome" msg="Welcome to uThere" />
    </header>

    <div class="city">
      <CityList></CityList>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue"
import HelloWorld from "@/components/HelloWorld.vue";
import CityList from "@/components/city/CityList.vue";

export default {
  name: "home",
  components: {
    HomeNav,
    CityList,
    HelloWorld
  },
  created() {
    // this.$store.getters.cities.length || this.$store.dispatch("loadCities");
    this.$store.dispatch("loadCities");
    console.log(this.$store.state);
  }
};
</script>


<style lang="scss" scoped>

.home-header {
  position: relative;
  background-image: url("../assets/02-full.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 700px;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 280px;
  margin-top: 40px;
}

</style>