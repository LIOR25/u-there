<template>
  <section class="city-preview" @click="goToDetails" v-if="city">
    <img :src="city.img_url" />

    <div class="info-panel">
      <!-- <p class="name">{{city}}</p> -->
      <p class="name">{{city.name}}</p>
            <!-- <p >{{city._id}}</p> -->

    </div>
  </section>
</template>

<script>
export default {
  name: "TheCityPreview",
  props: ["city"],
  methods: {
    goToDetails() {
      // this.$router.push(`/city/${this.city}`);
      // this.$router.push(`/city/${this.city.name}`);
      this.$router.push({
        path: `/city/${this.city.name}`,
        // query: { activities: "Drink coffee with a friend,Walk,Run" }
        query: { fromSearchBox: "0" }
      });
    }
  }
};
</script>

<style scoped lang="scss" src="@/styles/components/_CityPreview.scss">

</style>
