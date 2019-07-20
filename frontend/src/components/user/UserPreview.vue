<template>
  <section class="user-preview" @click="goToDetails" v-if="user">
    <img :src="user.img_url" />

    <div class="info-panel">
            <!-- <p>ID: {{user._id}}</p> -->

      <p class="name">{{user.firstName}} <span class="city">{{user.currCity}}</span></p>
      <p>Rank: {{user.rank}}</p>
      <p>Activities: {{user.activities[0]}}</p>
      <p>Replies {{user.replies}}</p>
      <div class="meet-count">{{user.meetCount}}</div>

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

<style scoped lang="scss" src="@/styles/components/_UserPreview.scss">

</style>
