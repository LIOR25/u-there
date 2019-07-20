<template>
  <div class="home">
    <header class="home-header">
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <MainSearch class="welcome" msg="Welcome to uThere" />
    </header>
    <!-- <button @click="myFunction()">Click Me</button> -->
    <h2>welcome you are in {{cityName}}</h2>

 Activities
 <div class="activities">
     <ActivityList :cityName="cityName"></ActivityList>
    </div>
    <div class="users">
      <UserList :usersToShow="allUsers"></UserList>
    </div>

cities
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
import ActivityList from "@/components/activity/ActivityList.vue";

// import geolocation from '@/services/geolocation.service.js'

export default {
  name: "home",

  data() {
    return {
      error: "",
      lat: "",
      lng: "",
      cityName: ""
    };
  },

  methods: {
    async showPosition(position) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      // console.log("geo", this.lat, this.lng);

      const cityName = await this.$store.dispatch({
        type: "getCityByCord",
        lat: this.lat,
        lng: this.lng
      });

      this.cityName = cityName;
      // console.log('type',cityName);
      // this.$store.dispatch({type:"loadActivitiesByCity", city: this.cityName});
    }
  },

  components: {
    CityList,
    UserList,
    MainSearch,
    ActivityList
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

    this.$store.dispatch("loadActivities");
    //
    // console.log(this.$store.state);

    // geolocation.getPosition();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.error = "Geolocation is not supported.";
    }
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/02-full.png");
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