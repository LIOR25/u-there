<template>
  <section class="signin-up">
    <h1 v-if="isSignin">Sign in</h1>
    <h1 v-else>Sign up</h1>
    <form @submit.prevent="signinUp">
      <label for>
        Email
        <input v-model="user.userName" type="email" placeholder="Email" required />
      </label>
      <label for>
        Password
        <input v-model="user.password" type="password" placeholder="Password" required />
      </label>
      <button @click="toggleSignup" class="not-registered" v-if="isSignin">Not registered yet?</button>
      <div class="on-signup" v-if="!isSignin">
        <label for>
          First Name
          <input v-model="user.firstName" placeholder="First Name" required />
        </label>
        <label for>
          Last Name
          <input v-model="user.lastName" placeholder="Last Name" required />
        </label>

        <label for>
          Activity
          <input v-model="user.activity" placeholder="Activity" />
        </label>
        <label for>
          Current City
          <input v-model="user.currCity" placeholder="City" required />
        </label>
        <label for>
          Language
          <input v-model="user.language" placeholder="Language" required />
        </label>
        <button @click="toggleSignup" class="registered">Registered?</button>
      </div>
      <button class="submit" v-if="isSignin">Sign in</button>
      <button class="submit" v-else>Sign up</button>
    </form>
  </section>
</template>


<script>
export default {
  name: "Signin",
  data() {
    return {
      isSignin: true,
      user: {
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        activity: "",
        currCity: "",
        language: ""
      }
    };
  },
  methods: {
    async signinUp() {
      if (this.isSignin) {
        this.$router.push("/city/putusercityhere");
      } else {
        await this.$store.dispatch({ type: "addUser", user: this.user });

        this.$router.push({
          path: `/city/${this.user.currCity}`,
          query: { fromSearchBox: "0", activity: this.user.activities[0] }
        });
      }
    },
    toggleSignup() {
      this.isSignin = !this.isSignin;
    }
    // async addUser() {
    //   await this.$store.dispatch("addUser", { user: this.user });
    // }
  }
};
</script>


<style lang="scss" scoped>
.signin-up {
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

button.submit {
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