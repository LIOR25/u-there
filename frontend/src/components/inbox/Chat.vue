<template>
  <section class="chat">
    <li>
      <router-link exact :to="`/inbox/${loggedInUserId}/chats`">Back to Messages</router-link>
    </li>
    <ul>
      <li v-for="msg in chatRoom.msgs" :class="whoSent(msg.addedBy)" :key="msg._id">{{msg.txt}}</li>
      <!-- <li v-for="msg in chatRoom.msgs" :class="whoSent(msg.addedBy)" :key="msg._id">{{msg.txt}}</li> -->
    </ul>
    <form class="sendMsg" @submit.prevent="addMsg(newMsg)">
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
        addedBy: null, //will always be logged in user
        txt: null,
        type: null,
        sentAt: null,
        isRead: false
      }
    };
  },
  methods: {
    testing() {},
    addMsg(newMsg) {
      newMsg.sentAt = Date.now();
      newMsg.addedBy = this.loggedInUserId;
      let addedMsg = { ...newMsg };
      this.$store.dispatch("addMsg", { addedMsg });
      newMsg.txt = null;
      this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
    },
    setType(val) {
      this.newMsg.type = val;
    },
    whoSent(who) {
      return who === this.loggedInUserId ? "byMe" : "byOther";
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
.sendMsg {
  /* position: absolute;
  bottom: 0; */
  width: 100%;
}

.byMe {
  text-align: right;
}

.byMe,
.byOther {
  font-size: 25px;
}

.chat {
  padding-right: 200px;
  width: 600px;
}
</style>
