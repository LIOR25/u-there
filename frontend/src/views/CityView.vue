<template>
  <section>
    <div class="main-container">
      <h1>
        <span>{{cityName}}</span> City
      </h1>
      <UserList></UserList>
    </div>
  </section>
</template>

<script>
import UserList from "@/components/user/UserList.vue";

export default {
  name: "TheCityView",
  components: {
    UserList
  },
  data() {
    return {
      cityName: ""
    };
  },
  created() {
    this.cityName = this.$route.params.cityName;

    this.$store.dispatch({
      type: "loadUsersByFilters",
      filterBy: { cityName: this.cityName }
    });
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 50px;
}
</style>
