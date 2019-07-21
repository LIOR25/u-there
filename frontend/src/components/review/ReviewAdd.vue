<template>
  <section class="review-add container">
    <h2>Add Review</h2>
    <form @submit.prevent="emitSaveReview">
      <div class="form-content-container">
        Title:
        <input ref="title" type="text" v-model="theReview.review.title" required />
        Added By:
        <input type="text" v-model="theReview.review.addedBy" required />
        Rating:
        <select v-model="theReview.review.rating" required>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <!-- Created At:
        <input type="date" v-model="theReview.review.createdAt" />-->
        Comment:
        <textarea
          v-model.trim="theReview.review.txt"
          placeholder="add multiple lines"
          required
        ></textarea>
        <!-- <button :disabled="invalid">Save</button> -->
        <button class="add-review">Save</button>
      </div>
    </form>

  <!-- {{theReview.review}} -->
  </section>
</template>

<script>
export default {
  name: "review-add",
  props: ["userId"],
  data() {
    return {
      theReview: {
        review: {
          title: "",
          addedBy: "Your Name",
          rating: "0",
          // createdAt: Date(Date.now()).toLocaleString,
          txt: ""
        },
        userToReviewId: ""
      }
    };
  },
  mounted() {
    this.$refs.title.focus();
  },

  created() {
    this.theReview.userToReviewId = this.userId;
  },
  computed: {},
  methods: {
    emitSaveReview() {
      this.$emit("saveReview", this.theReview);
    }
  }
};
</script>