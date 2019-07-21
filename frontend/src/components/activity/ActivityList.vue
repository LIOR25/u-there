<template>
  <section class="activity-list">
    <ActivityPreview
      v-for="(activity, idx) in activities"
      :key="idx"
      :activity="activity"
      :cityName="cityName"
    ></ActivityPreview>
  </section>
</template>

<script>
import ActivityPreview from "@/components/activity/ActivityPreview.vue";

export default {
  name: "TheActivityList",
  props: ["cityName"],
  components: {
    ActivityPreview
  },
  created() {
    this.$store.dispatch({
      type: "loadActivityByCity",
      filterBy: {
        cityName: this.cityName
      }
    });
  },
  computed: {
    activities() {
      // console.log('activitylist',this.$store.getters.activities);
      
      return this.$store.getters.activities;
        // return this.$store.getters.activities.filter(activity => {
        //   return 
        // });

    }
  }
};
</script>

<style scoped>
.activity-list {
  max-width: 1000px;
  /* min-height: 790px; */
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
