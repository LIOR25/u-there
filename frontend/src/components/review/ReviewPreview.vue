<template>
  <section class="review-preview" v-if="review">
    <div>
      <h2>Title: {{review.title}}</h2>
      <h2>Comment: {{review.txt}}</h2>
      <h2>Added By :{{review.addedBy}}</h2>
      <h2>Rating: {{review.rating}}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheReviewPreview",
  props: ["review"]
};
</script>