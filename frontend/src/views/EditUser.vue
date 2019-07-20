<template>
  <div class="EditUser">
    <div class="edit-user">
      <form @submit.prevent="updateUser">
        <div>
          <label>Email:</label>
          <input type="email" v-model="user.email" required />
        </div>

        <div>
          <label>First name:</label>
          <input type="text" v-model="user.firstName" required />
        </div>

        <div>
          <label>Last name:</label>
          <input type="text" v-model="user.lastName" required />
        </div>

        <div>
          <label>City:</label>
          <input type="text" v-model="user.currCity" required />
        </div>

        <div>
          <label>Activities:</label>
          <input type="text" v-model="user.activities" />
        </div>

        <div>
          <label>Languages:</label>
          <input type="text" v-model="user.languages" required />
        </div>

        <!-- <button>{{btnText}}</button> -->
        <button class="btnUpdateUser">Update</button>
      </form>
    </div>
  </div>
</template>


<script>
import UserService from "../services/user.service.js";

export default {
  name: "EditUser",

  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        currCity: ""
      }
    };
  },
  async created() {
    const userId = this.$route.params.userId;
    this.user = await UserService.getById(userId);
  },
  methods: {
    async updateUser() {
      // if (this.user._id) {
      //             this.$store.dispatch({type: 'updateUser', user: this.user})
      //             .then(() => {
      //               console.log('updated user');
      //               this.$router.push('/home');
      //             })
      //         }
      //   else {
      //       this.$store.dispatch({type: 'addUser', user: this.user})
      //       .then(() => {
      //         console.log('added user');
      //         this.$router.push('/user/:userId');
      //       })
      //   }

      const updatedUser = await this.$store.dispatch({
        type: "updateUser",
        user: this.user
      });
      console.log(updatedUser);

      this.$router.push(`/user/${this.user._id}`);
    }
  },
  computed: {
    //  btnText() {
    //           return (this.user._id)? 'Save' : 'Add';
    //       }
  },
  components: {}
};
</script>


<style lang="scss" scoped>
.EditUser {
  padding-top: 150px;
}
.btnSaveUser {
  cursor: pointer;
  font-size: 1rem;
  line-height: 1rem;
  margin: 0;
  padding: 0 2rem;
  border-radius: 2.5rem;
  border: none;
  background: lightskyblue;
  color: #fff;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background 0.14s ease;
  transition: background 0.14s ease;
  height: 3rem;
  min-height: 3rem;
  overflow: hidden;
}
</style>