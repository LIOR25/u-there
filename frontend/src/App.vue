<template>
  <div id="app">
<div id="nav">
      <ul>
  
    <!-- <img class= "logo" alt="logo" src="assets/logo.png"> -->
    <li><a href="#contact">Contact</a></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/">Home</router-link></li>
    <!-- <li>Welcome Guest!</li> -->
    <!-- <li><router-link to="/">Sign In</router-link></li> -->
     <!-- <li>Sign In</li> -->
    <!-- <li>Join</li> -->

</ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  // background-color: #333;
}

li {
  float: right;
  // border-right:1px solid #bbb;

  //   display: block;
  // color:black;
  // text-align: center;
  // padding: 14px 16px;
  // text-decoration: none;
}

li:last-child {
  // border-right: none;
}

li a {
  display: block;
  color:black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  // background-color: #111;
}

.active {
  // background-color: #4CAF50;
}

// .logo{
//     height: 33px;
//     width: 124px;
// }


</style>
