<template>
  <div class="MainSearch">
    <h1>{{ msg }}</h1>
    <p class="subheader">
      <!-- Meet people who love the same activities as you all over the world! -->

      <!-- <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.-->
    </p>
    <div class="searchBlock">
      <!-- <form @submit.prevent="load">
        <input
          v-model="filterBy.cityName"
          class="SearchInput"
          type="text"
          placeholder="Where are you going?"
        />
        <input
          v-model="filterBy.activity"
          class="SearchInput"
          type="text"
          placeholder="What would you like to do?"
        />
        <button class="button">Search</button>
      </form>-->


      <form @submit.prevent="load" class="form">
        <input
          v-model="filterBy.cityName"
          class="SearchInput"
          type="text"
          placeholder="Where would you like to hangout?"
        />
        <!-- <input
              v-model="filterBy.activity"
              class="SearchInput"
              type="text"
              placeholder="What would you like to do?"
        />-->
        <button class="button">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSearch",
  props: {
    msg: String
  },
  data() {
    return {
      filterBy: {
        cityName: "",
        activity: ""
      }
    };
  },
  created() {},
  methods: {
    load() {
      this.$router.push({
        path: `/city/${this.filterBy.cityName}`,
        query: { fromSearchBox: "1", activity: this.filterBy.activity }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="@/styles/components/_MainSearch.scss">
</style>
