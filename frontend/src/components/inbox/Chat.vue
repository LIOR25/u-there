<template>
  <section>
    <ul>
      <li v-for="msg in chatRoom.msgs" :key="msg._id">{{msg.txt}}</li>
    </ul>
    <form class="send" @submit.prevent="addMsg(addedMsg)">
      <input v-model="addedMsg.txt" :addedMsg="setType('txt')" type="text" placeholder="Write something..." name id />
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
// todo: li :class="whoSent"
export default {
  data() {
    return {
      chatPrms: null,
      addedMsg: {
        _id: null,
        addedBy: null, //will always be logged in user
        txt: null,
        type: null,
        sentAt: null,
        isRead: false
      }
      // loggedInUserId: '5d2dc3b3ad1118a7f8aed36c'
    };
  },
  methods: {
    addMsg(addedMsg) {
      addedMsg.sentAt = Date.now()      
      this.$store.dispatch("addMsg", { addedMsg });
      addedMsg.txt = null;
    },
    setType(val) {
      this.addedMsg.type = val;
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
.send {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
