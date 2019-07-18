<template>
  <section class="activity-list">
    <ActivityPreview v-for="(activity, idx) in activities" :key="idx" :activity="activity"></ActivityPreview>
  </section>
</template>

<script>
import ActivityPreview from "@/components/activity/ActivityPreview.vue";

export default {
  name: "TheActivityList",
  components: {
  ActivityPreview
  },
  computed: {
    activities() {
      console.log('activitylist',this.$store.getters.activities);
      
      return this.$store.getters.activities;
    }
  }
};
</script>

<style scoped>
.activity-list {
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
