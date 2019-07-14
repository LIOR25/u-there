<template>
  <section class="user-preview" @click="goToDetails" v-if="user">
    <img :src="user.img_url" />

    <div class="info-panel">
      <p>{{user.firstName}}</p>
      <p>{{user.currCity}}</p>
      <p>{{user.activities}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheUserPreview",
  props: ["user"],
  methods: {
    goToDetails() {
      // this.$router.push(`/toyApp/${this.toy._id}`);
      this.$router.push(`/user/${this.user._id}`);
    }
  }
};
</script>

<style scoped>
.user-preview {
  /* width: 23%; */
  object-fit: contain;
  cursor: pointer;
  min-height: 270px;
  background-color: rgb(100, 173, 81);
  border-radius: 4px;
  flex-basis: 200px;
  flex-grow: 1;
  margin: 17px 7px;
  max-width: 200px;
  box-shadow: 0 0 2px #969696;
  /* position: relative; */
}

.user-preview:hover {
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
  bottom: 50px;

  /* ehud changed */

  color: #333;
  font-weight: 500;
  font-weight: 700;
  font-size: 21px;
}

/* .info-panel .name {
  color: #333;
  font-weight: 500;
  font-weight: 700;
  font-size: 21px;
} */

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
  .user-preview {
    flex-basis: 45%;
  }
}
</style>
