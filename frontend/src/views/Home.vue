<template>
  <div class="home">
    <header class="home-header">
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <HelloWorld class="welcome" msg="Welcome to uThere" />
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
import HelloWorld from "@/components/HelloWorld.vue";
import CityList from "@/components/city/CityList.vue";
import UserList from "@/components/user/UserList.vue";

export default {
  name: "home",
  components: {
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
  padding-top: 40px;
}
</style>