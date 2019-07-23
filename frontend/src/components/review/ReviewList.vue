<template>
  <section class="review-list">
    <!-- tests -->
    <!-- {{reviewsToShow}} -->
    <ReviewPreview v-for="(review, idx) in reviewsToShow" :key="idx" :review="review"></ReviewPreview>
  </section>
</template>

<script>
import ReviewPreview from "@/components/review/ReviewPreview.vue";

export default {
  name: "TheReviewList",
  components: {
    ReviewPreview
  },
  props: ["reviewsToShow"]
};
</script>