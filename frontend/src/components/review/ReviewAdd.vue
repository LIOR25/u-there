<template>
  <section class="review-add">
     <h1>Add Review</h1>            
            <form @submit.prevent="emitSaveReview">
            <div class="form-content-container">    
            Full Name: <input ref="fullName" autofocus type="text" v-model="review.fullName" />
            Rate: <select v-model="review.selected">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            Read At: <input type="date" v-model="review.datePicked" />
               Comment: <textarea v-model.trim="review.comment" placeholder="add multiple lines"></textarea>
                <!-- <button :disabled="invalid">Save</button> -->
                <button>Save</button>
                </div>
            </form>
            

            <hr />
            <pre>
                {{review}}
            </pre>  
</section>
</template>

<script>
export default {
  name: 'review-add',
  prop:["userId"],
  data() {
    return {
        review: {
        fullName: 'Your Name',
        selected: '1',
        datePicked: Date.now(),
        comment: ''
      }
     
    }
  },
mounted() {
    console.log(this.$refs.fullName);

    this.$refs.fullName.focus();
  },

  created() {
      console.log('userid',this.userId);
      
  },
  computed: {
  
  },
  methods: {
   emitSaveReview() {
      this.$emit('saveReview', this.review);
    }
  }
  
}
</script>