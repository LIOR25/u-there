<template>
  <div class="nav">
    <img class="logo" @click="moveHome" alt="logo" src="../assets/logo.png" />
    <ul>
      <!-- <img class= "logo" alt="logo" src="assets/logo.png"> -->
      <li>
        <button class="logout" @click="doLogout" v-if="isLoggedUser">Logout</button>
      </li>

      <li>
        <router-link to="/signin" v-if="!isLoggedUser">Sign in</router-link>
      </li>
      <!-- <li>
        <router-link :to="`/inbox/${loggedUser._id}/chats`" v-if="isLoggedUser">Inbox</router-link>
      </li>-->
      <!-- <li>
        <router-link to="/user/edit/u1" v-if="isLoggedUser">User Profile</router-link>

        
      </li>-->
      
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="isLoggedUser">
        <router-link :to="`/inbox/${isLoggedUser._id}/chats`">
        Inbox
        </router-link>
      </li>
      <li>Welcome 
        <router-link
          :to="`/user/${isLoggedUser._id}`"
          v-if="isLoggedUser"
        >{{isLoggedUser.firstName}}</router-link>
      </li>
      <!-- <li>
        <router-link to="/inbox/:userId/chats">Inbox</router-link>
      </li>-->
      <!-- <li>Welcome Guest!</li> -->
      <!-- <li><router-link to="/">Sign In</router-link></li> -->
      <!-- <li>Sign In</li> -->
      <!-- <li>Join</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  computed: {
    isLoggedUser() {
      return this.$store.getters.loggedUser;
    }
  },
  methods: {
    moveHome() {
      this.$router.push("/");
    },
    doLogout() {
      this.$store.dispatch({ type: "logout" });

      this.$router.push("/");
    }
  }
  // watch: {
  //   $route(to, from) {
  //     console.log("route changed");
  //     console.log(this.$route.params.userId);
  //     if (this.$route.params.userId) {
  //       console.log("yes id");
  //     }
  //     // this.$router.push("/");
  //     // if($route.params)
  //   }
  // }
};
</script>

<style lang="scss" scoped src="@/styles/components/_AppNav.scss">


</style>
