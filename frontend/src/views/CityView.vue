<template>
  <section>
    <div class="main-container">
      <h1>
        <span>{{cityName}}</span> City
      </h1>
      <!-- <div class="default-activities" v-if="!fromSearchBox || !activity"> -->
      <div class="default-activities" v-if="!activity">
        <h2>Drink coffee with friends</h2>
        <UserList :usersToShow="coffeeUsers"></UserList>
        <h2>Walk</h2>
        <UserList :usersToShow="walkUsers"></UserList>
        <h2>Run</h2>
        <UserList :usersToShow="runUsers"></UserList>
      </div>
      <div class="when-chosen-activity" v-else>
        <h2>{{activity}}</h2>
        <UserList :usersToShow="activityUsers"></UserList>

        <h2>Dive</h2>
        <UserList :usersToShow="diveUsers"></UserList>
        <h2>Fly</h2>
        <UserList :usersToShow="flyUsers"></UserList>
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
      return this.filterUsersByActivity("Drink coffee with a friend");
    },
    walkUsers() {
      return this.filterUsersByActivity("Walk");
    },
    runUsers() {
      return this.filterUsersByActivity("Run");
    },
    activityUsers() {
      return this.filterUsersByActivity(this.activity);
    },
    diveUsers() {
      return this.filterUsersByActivity("Dive");
    },
    flyUsers() {
      return this.filterUsersByActivity("Fly");
    }
  },
  methods: {
    filterUsersByActivity(activity) {
      return this.$store.getters.users.filter(user => {
        return user.activities.includes(activity);
      });
    }
  },
  created() {
    this.cityName = this.$route.params.cityName;

    this.fromSearchBox = this.$route.query.fromSearchBox === "1" ? true : false;

    this.activity = this.$route.query.activity;

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
