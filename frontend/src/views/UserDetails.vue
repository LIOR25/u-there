<template>
  <div class="mainContainer">
    <!-- <h1>This is userDetails page</h1> -->
    <div class="detailsList">
      <h1>{{user.firstName + " " + user.lastName}}</h1>
      <img :src="user. img_url" alt class="userSmallImg" />
      <h3>from: {{user.currCity}}</h3>
      <h3>like to: {{user.activities[0]}}</h3>
      <h3>languages: {{user.languages[0]}}</h3>
      <!-- <h3>{{user._id}}</h3> -->

      <modal ref="modal"></modal>

      <!-- <button :to="`/user/edit/${user._id}`" v-if="loggedUser && loggedUser._id === user._id">Edit</button> -->
      <button @click="goToEditUser" v-if="loggedUser && loggedUser._id === user._id">Edit</button>
      <button @click="openModal" v-else>Contact me</button>
    </div>

    <div class="detailsMain">
      <h2>Hi There! Nice to meet you</h2>
      <p>
        Lorem ipsum dolor sit amet
        consectetur, adipisicing elit.
        Illum similique quos veritatis
        consequuntur molestias recusandae assumenda odit
        sapiente officia eius id esse,
        consectetur libero inventore at rem,
        ad harum corporis.
      </p>
      <p>what we can do together:</p>
      <div v-if="user.reviews.length">
        <p>Reviews:</p>
        <!-- <p>{{user.reviews}}</p> -->
        <p>{{user.reviews[0].title}}</p>
        <p>{{user.reviews[0].txt}}</p>
        <p>addedBy :{{user.reviews[0].addedBy}}</p>
        <p>createdAt :{{user.reviews[0].createdAt}}</p>
        <p>rating: {{user.reviews[0].rating}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import modal from "../components/user/Modal.vue";
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
      }
    };
  },
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    }
  },
  created() {
    this.loadUser();
  },
  methods: {
    openModal() {
      this.$refs.modal.show();
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
    modal
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