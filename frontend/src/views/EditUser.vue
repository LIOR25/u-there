<template>
  <div class="EditUser">
  
 <div class="edit-user">
    <form @submit.prevent="saveUser">
      <div>
        <label>City:</label>
        <input type="text" v-model="user.currCity" />
      </div>

       <div>
        <label>Activities:</label>
        <input type="text" v-model="user.Activities" />
      </div>

       <div>
        <label>Languages:</label>
        <input type="text" v-model="user.languages" />
      </div>

       <!-- <button>{{btnText}}</button> -->
              <button class="btnSaveUser">Save</button>
  </form>
  </div>
    </div>

</template>


<script>

export default {
  name: 'EditUser',

    data() {
      return {
          user: {
            currCity: '',
        
          },
       
      }
  },
  created(){
  // const userId = this.$route.params.userId;
    const userId = this.$store.state.loggedInUser;
    console.log(userId);
    

      this.$store.dispatch({type: 'loadUsers'})
        .then (() => {
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.userById(userId)));
        // else this.$router.push('/home');
      })
  },
  methods:{
   saveUser(){
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
                        this.$router.push('/');

}
  },
  computed:{
//  btnText() {
//           return (this.user._id)? 'Save' : 'Add';
//       }
  },
  components: {

  }
}
</script>


<style lang="scss" scoped>

.EditUser{
    padding-top: 150px;
}
.btnSaveUser{
    cursor: pointer;
      font-size: 1rem;
    line-height: 1rem;
    margin: 0;
    padding: 0 2rem;
    border-radius: 2.5rem;
    border: none;
    background:lightskyblue;
    color: #fff;
    font-weight: 600;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: background .14s ease;
    transition: background .14s ease;
    height: 3rem;
    min-height: 3rem;
    overflow: hidden;
}

</style>