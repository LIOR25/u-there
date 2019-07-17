<template>
  <div class="home">
    <header class="home-header">
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <MainSearch class="welcome" msg="Welcome to uThere" />
    </header>

    <div class="users">
      <UserList :usersToShow="allUsers"></UserList>
    </div>

    <div class="cities">
      <CityList></CityList>
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
  computed: {
    allUsers() {
      return this.$store.getters.users;
    }
  },
  created() {
    // this.$store.getters.cities.length || this.$store.dispatch("loadCities");
    this.$store.dispatch("loadCities");
    this.$store.dispatch("loadUsers");
    // console.log(this.$store.state);
  }
};
</script>


<style lang="scss" scoped>
.home-header {
  // background-position: top;
  // background-image: url("../assets/02-full.png");
  // background-repeat: no-repeat;
  // background-size: cover;
  // height: 90vh;


   height: calc(100vh - 110px);
        background-image: 
        linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("../assets/02-full.png");
        background-color: black;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 50px;
}

.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 280px;
  padding-top: 40px;
  color: white;
}
</style>