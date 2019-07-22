<template>
  <section class="wrapper">
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
  padding-top: 60px;
  /* display: grid;
  grid-template-columns: 20% 80%; */
  // width: 50vw;
  padding-left: 500px;
}
</style>
