<template>
  <section>
    <ul>
      <li v-for="msg in chatRoom.msgs" :key="msg._id" @click="doSomething">{{msg.txt}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      chatPrms: null,
      loggedInUserId: '5d2dc3b3ad1118a7f8aed36c'
    };
  },
  methods: {
    doSomething() {
      console.log(this.loggedInUserId);
    }
  },
  computed: {
    chatRoom() {
      return this.$store.getters.chatRoom;
    },
    chatWith() {
      return this.$store.getters.chatWith;
    },
    // loggedInUser() {
    //   return this.$store.getters.loggedInUser;
    // }
  },
  created() {
    this.$route.params.chatRoomId;
    this.chatPrms = this.$route.params.chatRoomId;
    this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
    // this.$store.dispatch("loadLoggedInUser");
  }
};
</script>

<style>
</style>
