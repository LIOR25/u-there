<template>
  <section class="activity-preview" @click="goToActivity" v-if="activity">
  

      <img :src="activity.img_url" />
    <div class="info-panel">
      <p class="name">{{activity.name}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheActivityPreview",
  props: ["activity", "cityName"],
  methods: {
    goToActivity() {
      this.$router.push({
        path: `/activity/${this.activity.name}`,
        query: { cityName : this.cityName}
        // query: { fromSearchBox: "0" }
      });
    }
  }
};
</script>

<style scoped>
.activity-preview {
  /* width: 23%; */
  object-fit: contain;
  cursor: pointer;
  /* min-height: 270px; */
  /* background-color: rgb(100, 173, 81); */
  border-radius: 4px;
  flex-basis: 200px;
  flex-grow: 1;
  margin: 17px 7px;
  /* max-width: 200px; */
  max-height: 200px;
  box-shadow: 0 0 2px #969696;
  /* position: relative; */
}

.activity-preview:hover {
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





