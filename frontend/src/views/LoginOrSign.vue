<template>
  <section class="login-or-signin">
    <h1>Login</h1>
    <!-- <h2>{{msg}}</h2> -->
    <input type="text" v-model="loginCred.email" placeholder="email" required />
    <br />
    <input type="text" v-model="loginCred.password" placeholder="password" required />
    <br />
    <button @click="doLogin">Login</button>
    <hr />

    <h2>Signup</h2>

    <input type="text" v-model="signupCred.email" placeholder="email" required />
    <br />
    <input type="text" v-model="signupCred.password" placeholder="password" required />
    <br />
    <!-- <input type="text" v-model="signupCred.username" placeholder="username" />
    <br />-->
    <input type="text" v-model="signupCred.firstName" placeholder="first name" required />
    <br />
    <input type="text" v-model="signupCred.lastName" placeholder="last name" required />
    <br />
    <input type="text" v-model="signupCred.activity" placeholder="activity" />
    <br />
    <input type="text" v-model="signupCred.currCity" placeholder="current city" required />
    <br />
    <input type="text" v-model="signupCred.language" placeholder="language" required />
    <br />

    <button @click="doSignup">Signup</button>
    <hr />

    <!-- <button @click="doLogout">Logout</button> -->

    <!-- <button @click="getAllUsers">getAllUsers</button>
    <button @click="sendMsg">Send Msg</button>-->
    <!-- <hr />
    {{msgs}}
    <hr />-->
  </section>
</template>

<script>
export default {
  name: "loginOrSign",
  data() {
    return {
      loginCred: {},
      signupCred: {}
      // msg: ""
    };
  },
  // computed: {
  //   msgs() {
  //     return this.$store.getters.msgs;
  //   }
  // },
  methods: {
    async doLogin() {
      const cred = this.loginCred;
      if (!cred.email || !cred.password)
        return (this.msg = "Missing parameters");
      const loggedUser = await this.$store.dispatch({
        type: "login",
        userCred: cred
      });
      console.log(loggedUser);
      this.$router.push({
        path: `/city/${loggedUser.currCity}`,
        query: { activity: loggedUser.activities[0] }
      });
    },
    async doSignup() {
      const cred = this.signupCred;
      if (
        !cred.email ||
        !cred.password ||
        !cred.firstName ||
        !cred.lastName ||
        !cred.activity ||
        !cred.currCity ||
        !cred.language
      )
        return (this.msg = "Missing parameters");

      const loggedUser = await this.$store.dispatch({
        type: "signup",
        userCred: cred
      });

      this.$router.push({
        path: `/city/${loggedUser.currCity}`,
        query: { activity: loggedUser.activities[0] }
      });
    }
    // getAllUsers() {
    //   this.$store.dispatch({ type: "getUsers" });
    // }
    // sendMsg() {
    //   this.$store.dispatch({ type: "sendMsg", txt: "Msg to All" });
    // }
  }
};
</script>

<style lang="scss" scoped>
.login-or-signin {
  padding-top: 120px;
}

input {
  border: 1px solid grey;
  border-radius: 2px;
  height: 3rem;
  line-height: 3rem;
  font-weight: 500;
  padding: 0 1rem 0 3rem;
  text-align: left;
  margin: 0 1rem 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  font-size: 1rem;
  width: 250px;
}

// button.submit
button {
  display: block;
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

label {
  margin-bottom: 30px;
}
</style>