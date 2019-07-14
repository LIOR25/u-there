<template>
  <section class="user-list">
    <UserPreview v-for="user in usersToShow" :key="user._id" :user="user"></UserPreview>
  </section>
</template>

<script>
import UserPreview from "@/components/user/UserPreview.vue";

export default {
  name: "TheUserList",
  components: {
    UserPreview
  },
  props: ["usersToShow"]
  // computed: {
  //   users() {
  //     return this.$store.getters.users;
  //   }
  // }
};
</script>

<style scoped>
.user-list {
  max-width: 1000px;
  min-height: 790px;
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
