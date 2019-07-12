<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CityList></CityList>
  </div>
</template>

<script>
// @ is an alias to /src
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
