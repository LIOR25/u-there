<template>
  <section class="city-preview" @click="goToDetails" v-if="city">
    <img :src="city.img_url" />

    <div class="info-panel">
      <p class="name">{{city.name}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheCityPreview",
  props: ["city"],
  methods: {
    goToDetails() {
      // this.$router.push(`/toyApp/${this.toy._id}`);
      this.$router.push(`/city/${this.city._id}`);
    }
  }
};
</script>

<style scoped>
.city-preview {
  /* width: 23%; */
  cursor: pointer;
  min-height: 270px;
  background-color: rgb(100, 173, 81);
  border-radius: 9px;
  flex-basis: 235px;
  flex-grow: 1;
  margin: 17px 7px;
  max-width: 245px;
  box-shadow: 0 0 2px #969696;
  position: relative;
}

.city-preview:hover {
  box-shadow: 0 0 8px #969696;
}

p {
  margin: 5px 0;
}

img {
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.info-panel {
  padding: 10px;
  text-align: left;
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
