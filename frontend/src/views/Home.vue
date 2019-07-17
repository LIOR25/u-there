<template>
  <div class="home">
    <header class="home-header">
      <!-- <img alt="Vue logo" src="../assets/cover.png"> -->

      <MainSearch class="welcome" msg="Welcome to uThere" />
    </header>
	<!-- <button @click="myFunction()">Click Me</button> -->

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

// import geolocation from '@/services/geolocation.service.js'

export default {
  name: "home",

  data() {
    return {
       error: '',
	  lat:'',
    lon:''
    };
  },


 methods:{
    myFunction: function () {		
	 if(navigator.geolocation){
	 navigator.geolocation.getCurrentPosition(this.showPosition);
	 }else{
	 this.error = "Geolocation is not supported."; 
		 
	 }
    },
	showPosition:function (position) {	
	const lat =	this.lat = position.coords.latitude;
   const lon =  this.lon = position.coords.longitude;
    console.log("geo",	this.lat,  this.lon);
    
	}
	},



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

      // geolocation.getPosition();
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