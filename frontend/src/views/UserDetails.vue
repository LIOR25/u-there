<template>
  <div class="user-details container">
    <!-- <h1>This is userDetails page</h1> -->
    <div class="top-fold">
      <img :src="user. img_url" alt class="user-img" />
      <div class="user-details-content">
        <div class="user-info">
          <h1>{{user.firstName + " " + user.lastName}}</h1>
          <div>Now in {{user.currCity}}</div>
          <!-- <div>like to: {{user.activities[0]}}</div> -->
          <!-- <div>languages: {{user.languages[0]}}</div> -->

          <button @click="goToEditUser" v-if="loggedUser && loggedUser._id === user._id">Edit</button>
          <button @click="openModal" v-else>Contact me</button>
        </div>
      </div>
      <modal :user="user" :loggedUser="loggedUser" ref="modal"></modal>
    </div>

    <div class="detailsMain">
      <p>
        <!-- Looking for people to Party with me in Tel Aviv. -->
        {{user.details}}
      </p>
      <!-- <p>I love to</p> -->
      <div>Likes to: {{user.activities[0]}}</div>
      <div>Languages: {{user.languages[0]}}</div>
      <div class="in-town">
        <span>
          In town until:
          {{user.inTownUntil}}
          <i class="fas fa-calendar-alt"></i>
        </span>
        <span>
          <button class="add-review-btn" @click="temp=!temp">Add Review</button>
        </span>
      </div>
      <!-- <p>what we can do together:</p> -->
      <!-- <button @click="temp=!temp">Add Review</button> -->
      <ReviewAdd @saveReview="saveReview" :userId="user._id" v-if="user._id && temp"></ReviewAdd>

      <!-- <div v-if="user.reviews.length">
        <p>Reviews:</p>
        <p>{{user.reviews}}</p>
        <p>Title: {{user.reviews[0].title}}</p>
        <p>Comment: {{user.reviews[0].txt}}</p>
        <p>Added By :{{user.reviews[0].addedBy}}</p>
        <p>createdAt :{{user.reviews[0].createdAt}}</p>
        <p>Rating: {{user.reviews[0].rating}}</p>
      </div>-->

      <ReviewList :reviewsToShow="user.reviews" v-if="user.reviews.length"></ReviewList>
    </div>
  </div>
</template>


<script>
import modal from "../components/user/Modal.vue";
import ReviewAdd from "../components/review/ReviewAdd.vue";
import ReviewList from "../components/review/ReviewList.vue";

import UserService from "../services/user.service.js";
export default {
  name: "userDetails",
  data() {
    return {
      user: {
        _id: null,
        firstName: "",
        lastName: "",
        activities: [],
        reviews: [],
        img_url: "",
        currCity: "",
        languages: []
      },
      temp: false
    };
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    }
  },
  created() {
    this.loadUser();
    console.log(this.user.reviews);
  },
  methods: {
    openModal() {
      this.$refs.modal.show();
    },
    async saveReview($event) {
      const addedReview = await this.$store.dispatch({
        type: "addReview",
        theReview: $event
      });
      console.log("added review after add:", addedReview);
      this.loadUser();
    },
    goToEditUser() {
      this.$router.push(`/user/edit/${this.user._id}`);
    },
    async loadUser() {
      const userId = this.$route.params.userId;
      this.user = await UserService.getById(userId);
      console.log("this.user", this.user);
    }
  },
  components: {
    modal,
    ReviewAdd,
    ReviewList
  },
  watch: {
    "$route.params.userId": function() {
      this.loadUser();
    }
  }
};
</script>


<style lang="scss" scoped src="@/styles/views/_UserDetails.scss">
// .flex {
//   display: flex;
// }

// .mainContainer {
//   display: flex;
//   justify-content: space-evenly;
//   padding-top: 155px;

//   //  @include wrapper(400px);
//   //     border-right: 1px solid $box-shadow-gray;
//   //     border-left: 1px solid $box-shadow-gray;
//   //     min-height: calc(100vh - 70px);
// }

// .detailsList {
//   // flex-direction: column;

//   //     border: 1px solid #2a6171;
//   //         border-radius: 7px;
//   //   box-shadow: 3px 3px 12px -1px #afa7a7;

//   flex-direction: column;
//   align-items: center;
//   text-align: center;

//   border: 1px solid #2a6171;
//   border-radius: 7px;
//   box-shadow: 3px 3px 12px -1px #afa7a7;
//   object-fit: contain;
//   cursor: pointer;
//   min-height: 270px;
//   // background-color: rgb(100, 173, 81);
//   border-radius: 4px;
//   flex-basis: 200px;
//   flex-grow: 1;
//   margin: 17px 7px;
//   max-width: 400px;
//   max-height: 600px;
//   box-shadow: 0 0 2px #969696;
//   /* position: relative; */
//   margin-bottom: 200px;
// }
// button {
//   cursor: pointer;
//   font-size: 1rem;
//   line-height: 1rem;
//   margin: 0;
//   padding: 0 2rem;
//   border-radius: 2.5rem;
//   border: none;
//   background: lightskyblue;
//   color: #fff;
//   font-weight: 600;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   -webkit-transition: background 0.14s ease;
//   transition: background 0.14s ease;
//   height: 3rem;
//   min-height: 3rem;
//   overflow: hidden;
// }

// .detailsMain {
//   //  flex-direction: column;

//   //   border: 1px solid #2a6171;
//   //       border-radius: 7px;
//   // box-shadow: 3px 3px 12px -1px #afa7a7;

//   flex-direction: column;

//   border: 1px solid #2a6171;
//   border-radius: 7px;
//   box-shadow: 3px 3px 12px -1px #afa7a7;
//   /* width: 23%; */
//   object-fit: contain;
//   cursor: pointer;
//   min-height: 270px;
//   // background-color: rgb(100, 173, 81);
//   border-radius: 4px;
//   flex-basis: 200px;
//   flex-grow: 1;
//   margin: 17px 7px;
//   max-width: 400px;
//   max-height: 600px;
//   box-shadow: 0 0 2px #969696;
//   /* position: relative; */
//   margin-bottom: 200px;
// }

// .userSmallImg {
//   width: 50px;
//   height: 50px;
// }
</style>