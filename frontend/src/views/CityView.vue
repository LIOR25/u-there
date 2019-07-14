<template>
  <section>
    <div class="main-container">
      <h1>
        <span>{{cityName}}</span> City
      </h1>
      <div class="default-activities" v-if="!fromSearchBox || !activity">
        <h2>Drink coffee with friends</h2>
        <UserList :usersToShow="coffeeUsers"></UserList>
        <h2>Walk</h2>
        <UserList :usersToShow="walkUsers"></UserList>
        <h2>Run</h2>
        <UserList :usersToShow="runUsers"></UserList>
      </div>
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
      cityName: "",
      activity: "",
      fromSearchBox: false
    };
  },
  computed: {
    coffeeUsers() {
      return this.$store.getters.users.filter(user => {
        return user.activities.includes("Drink coffee with a friend");
      });
    },
    walkUsers() {
      return this.$store.getters.users.filter(user => {
        return user.activities.includes("Walk");
      });
    },
    runUsers() {
      return this.$store.getters.users.filter(user => {
        return user.activities.includes("Run");
      });
    }
  },
  created() {
    this.cityName = this.$route.params.cityName;

    this.fromSearchBox = this.$route.query.fromSearchBox === "1" ? true : false;
    this.activity = this.$route.query.activity;
    console.log(this.activity);

    // this.$store.dispatch({
    //   type: "loadUsersByFilters",
    //   filterBy: { cityName: this.cityName }
    // });
    this.$store.dispatch({
      type: "loadUsersByCity",
      filterBy: {
        cityName: this.cityName
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding-top: 50px;
}

h2 {
  text-align: center;
}
</style>
