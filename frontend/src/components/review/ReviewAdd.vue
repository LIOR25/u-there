<template>
  <section class="review-add">
    <h1>Add Review</h1>
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
          v-model.trim="theReview.review.comment"
          placeholder="add multiple lines"
          required
        ></textarea>
        <!-- <button :disabled="invalid">Save</button> -->
        <button>Save</button>
      </div>
    </form>

    <hr />
    <pre>
                {{theReview.review}}
            </pre>
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
          createdAt: Date.now(),
          comment: ""
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