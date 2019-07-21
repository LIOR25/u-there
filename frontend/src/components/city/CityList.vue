<template>
  <section class="city-list">
    <CityPreview v-for="(city, idx) in cities" :key="idx" :city="city"></CityPreview>
  </section>
</template>

<script>
import CityPreview from "@/components/city/CityPreview.vue";

export default {
  name: "TheCityList",
  components: {
    CityPreview
  },
  computed: {
    cities() {
      return this.$store.getters.cities;
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/components/_CityList.scss">

</style>
