<template>
  <div class="home">
    <header class="home-header">
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <MainSearch class="welcome" msg="Welcome to uThere" />
    </header>

    <div class="cities">
      <CityList></CityList>
    </div>
    <div class="users">
      <UserList></UserList>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNav from "@/components/AppNav.vue";
import MainSearch from "@/components/MainSearch.vue";
import CityList from "@/components/city/CityList.vue";
import UserList from "@/components/user/UserList.vue";

export default {
  name: "home",
  components: {
    CityList,
    UserList,
    MainSearch
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
  background-position: top;
  background-image: url("../assets/02-full.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 280px;
  padding-top: 40px;
}
</style>