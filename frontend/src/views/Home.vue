<template>
  <div class="home">
    <header class="home-header">
      <h1>Meet People with Similar Interests</h1>
      <h3>All Over The World!</h3>
      <MainSearch class="search-bar" msg />
    </header>

    <!-- <h2>welcome you are in {{cityName}}</h2> -->

    <div class="activities container">
      <h2>Nearby Activities</h2>
      <ActivityList :cityName="cityName" :isTopRated="false"></ActivityList>
    </div>

    <div class="users container">
            <h2>Near you</h2>

      <!-- <h2>Nearby users</h2> -->
      <!-- <h2>Ready To Meet You</h2> -->
      <UserList :usersToShow="allUsers"></UserList>
    </div>

    <div class="cities container">
      <h2>cities</h2>
      <CityList></CityList>
    </div>


      <div class="users container">
            <h2>Top Reted Activities</h2>
      <ActivityList :cityName="cityName" :isTopRated="true"></ActivityList>
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
      // this.lat = position.coords.latitude;
      // this.lng = position.coords.longitude;
      // console.log("geo", this.lat, this.lng);

         this.lat = 32.109333;
      this.lng =  34.855499;

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


<style lang="scss" scoped src="@/styles/views/_HomePage.scss">
</style>