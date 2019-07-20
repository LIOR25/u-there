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

<style scoped>
.city-preview {
  /* width: 23%; */
  object-fit: contain;
  cursor: pointer;
  /* min-height: 270px; */
  background-color: rgb(100, 173, 81);
  border-radius: 4px;
  flex-basis: 200px;
  flex-grow: 1;
  margin: 17px 7px;
  max-width: 200px;
  max-height: 200px;
  box-shadow: 0 0 2px #969696;
  /* position: relative; */
}

.city-preview:hover {
  box-shadow: 0 0 8px #969696;
}

p {
  margin: 5px 0;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.info-panel {
  padding: 10px;
  text-align: left;
  position: relative;
  /* bottom: 50px; */
  bottom: 20px;
}

.info-panel .name {
  color: #333;
  font-weight: 500;
  font-weight: 700;
  font-size: 21px;
}

.expand {
  animation: expand 1s;
}

@keyframes expand {
  to {
    /* left: 50%; */
    transform: scale(1.5);
    opacity: 0.5;
  }
}

@media (max-width: 670px) {
  .city-preview {
    flex-basis: 45%;
  }
}
</style>
