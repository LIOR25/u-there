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

<style scoped lang="scss" src="@/styles/components/_UserList.scss">

</style>
