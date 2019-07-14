<template>
  <div class="nav">
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <ul>
      <!-- <img class= "logo" alt="logo" src="assets/logo.png"> -->
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
       <li>
        <router-link to="/user/edit/u1">User Profile</router-link>

     
         <!-- <router-link to="'/user/edit/'+user._id">User Profile</router-link> -->

      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <!-- <li>Welcome Guest!</li> -->
      <!-- <li><router-link to="/">Sign In</router-link></li> -->
      <!-- <li>Sign In</li> -->
      <!-- <li>Join</li> -->
    </ul>
  </div>
</template>

<script>
export default {
    name: "AppNav"
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
  padding-left: 14px;;
  padding-top: 16px;
  // display: inline-block;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 4
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
