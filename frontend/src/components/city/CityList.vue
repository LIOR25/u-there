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

<style scoped>
.city-list {
  max-width: 1000px;
  /* min-height: 790px; */
  padding: 34px 0;
  margin: 0 auto;
  /* background-color: gray; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: unset;
  align-content: baseline;
}
</style>
