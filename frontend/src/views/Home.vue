<template>
  <div class="home">
    <header class="home-header">
      <HomeNav></HomeNav>
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <HelloWorld class="welcome" msg="Welcome to uThere" />
    </header>

    <div class="citys">
      <CityList></CityList>
    </div>
    <div class="users">
      <UserList></UserList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from "@/components/HomeNav.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import CityList from "@/components/city/CityList.vue";
import UserList from "@/components/user/UserList.vue";

export default {
  name: "home",
  components: {
    HomeNav,
    CityList,
    UserList,
    HelloWorld
  },
  created() {
    // this.$store.getters.cities.length || this.$store.dispatch("loadCities");
    this.$store.dispatch("loadCities");
    this.$store.dispatch("loadUsers");
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