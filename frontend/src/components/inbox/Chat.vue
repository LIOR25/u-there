<template>
  <section>
    <ul>
      <li v-for="msg in chatRoom.msgs" :key="msg._id">{{msg.txt}}</li>
    </ul>
    <form class="send" @submit.prevent="addMsg(newMsg)">
      <input
        v-model="newMsg.txt"
        :newMsg="setType('txt')"
        type="text"
        placeholder="Write something..."
        name
        id
      />
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
      newMsg: {
        _id: null,
        addedBy: this.loggedInUserId, //will always be logged in user
        txt: null,
        type: null,
        sentAt: null,
        isRead: false
      }
      // loggedInUserId: '5d2dc3b3ad1118a7f8aed36c'
    };
  },
  methods: {
    addMsg(newMsg) {
      newMsg.sentAt = Date.now();
      let addedMsg = { ...newMsg };
      this.$store.dispatch("addMsg", { addedMsg });
      newMsg.txt = null;
    },
    setType(val) {
      this.newMsg.type = val;
    }
  },
  computed: {
    chatRoom() {
      return this.$store.getters.chatRoom;
    },
    chatWith() {
      return this.$store.getters.chatWith;
    },
    loggedInUserId() {
      return this.$store.getters.loggedInUserId;
    }
  },
  created() {
    this.$route.params.chatRoomId;
    this.chatPrms = this.$route.params.chatRoomId;
    this.$store.dispatch("getLoggedUserId");
    this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
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
