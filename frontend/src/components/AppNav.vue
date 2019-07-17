<template>
  <div class="nav">
    <img class="logo" @click="moveHome" alt="logo" src="../assets/logo.png" />
    <ul>
      <!-- <img class= "logo" alt="logo" src="assets/logo.png"> -->
      <li>
        <button @click="doLogout" v-if="isLoggedUser">Logout</button>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <router-link to="/signin" v-if="!isLoggedUser">Sign in</router-link>
      </li>

      <li>
        <router-link to="/user/edit/u1" v-if="isLoggedUser">User Profile</router-link>

        <!-- <router-link to="'/user/edit/'+user._id">User Profile</router-link> -->
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <h4 v-if="isLoggedUser">Wellcome {{isLoggedUser.firstName}}</h4>
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
};
</script>

<style lang="scss" scoped>
// img {
//   // position: absolute;
//   width: 100%;
//   z-index: -1;
//   left: 0;
//   right: 0;
//   top: 0;
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   overflow: hidden;
// }

img.logo {
  height: 33px;
  width: 124px;
  padding-left: 14px;
  padding-top: 16px;
  // display: inline-block;
  cursor: pointer;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 4;
}

ul {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  // background-color: #333;
}

li {
  // float: right;
  // border-right:1px solid #bbb;

  //   display: block;
  // color:black;
  // text-align: center;
  // padding: 14px 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

// li:last-child {
//   // border-right: none;
// }

li a {
  // display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

// li a:hover:not(.active) {
//   // background-color: #111;
// }

// .active {
//   // background-color: #4CAF50;
// }
</style>
