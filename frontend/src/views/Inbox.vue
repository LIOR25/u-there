<template>
  <section class="wrapper">
        <h1>My Messages</h1>
    <!-- <div class="side-bar">
      <p>I'm the side bar</p>
      <inbox-nav></inbox-nav>
    </div>-->
    <div class="msg-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import InboxNav from "../components/inbox/InboxNav.vue";
export default {
  components: {
    InboxNav
  },
  data() {
    return {
      chats: []
    };
  }
};
</script>

<style lang="scss">
.wrapper {
  // text-align: center;
  // padding-top: 60px;
  /* display: grid;
  grid-template-columns: 20% 80%; */
  // width: 50vw;
  // padding-left: 500px;
  // background-color: #d4d6c8;
}
.msg-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}

</style>
