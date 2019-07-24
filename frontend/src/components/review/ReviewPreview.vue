<template>
  <section class="review-preview" v-if="review">
    <div>
      <div :style="profileImage"></div>
      <h2>Title: {{review.title}}</h2>
      <h2>Comment: {{review.txt}}</h2>
      <h2>Added By :{{fullName}}</h2>
      <h2>
        <i class="fa fa-star" aria-hidden="true"></i>
        {{review.rating}}
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheReviewPreview",
  props: ["review"],
  data() {
    return {
      profileImage: {
        width: "150px",
        height: "150px",
        "border-radius": "50%",
        background: `url(${this.review.addedBy.img_url}) no-repeat center center`
      }
    };
  },
  computed: {
    fullName() {
      return this.review.addedBy.firstName + " " + this.review.addedBy.lastName;
    }
  }
};
</script>