<template>
  <section class="chat">
    <li>
      <router-link exact :to="`/inbox/${loggedInUserId}/chats`">Back to Messages</router-link>
    </li>
    <ul>
      <li v-for="msg in msgs" :class="whoSent(msg.addedBy)" :key="msg._id">{{msg.txt}}</li>
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
import io from 'socket.io-client';
import socket from '../../services/Socket.service.js'
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
      },
      // msgs: [],
      // socket: null
    }
  },
  methods: {
    testing() {},
    addMsg(newMsg) {
      newMsg.sentAt = Date.now();
      newMsg.addedBy = this.loggedInUserId;
      let addedMsg = { ...newMsg };
      this.$store.dispatch("addMsg", { addedMsg });
      newMsg.txt = null;
      // this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
    },
    setType(val) {
      this.newMsg.type = val;
    },
    whoSent(who) {
      return who === this.loggedInUserId ? "byMe" : "byOther";
    }
  },
  computed: {
    msgs() {
      return this.$store.getters.msgs;
    },
    chatRoom() {
      return this.$store.getters.chatRoom;
    },
    chatWith() {
      return this.$store.getters.chatWith;
    },
    loggedInUserId() {
      return this.$store.getters.loggedInUserId;
    },
    // lastMsg() {
    //   if (this.$store.getters.newMsg !== null) this.msgs.push(newMsg);
    //   this.$store.dispatch({type: 'clearNewMsg'});
    // }
  },
  created() {
    this.$route.params.chatRoomId;
    this.chatPrms = this.$route.params.chatRoomId;
    this.$store.dispatch("getLoggedUserId");
    this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms })
    // .then( () => {      
    //   // this.chatRoom.msgs.forEach(msg => {
    //   //   this.msgs.push(msg);
    //   // })
    // })

    
    // this.socketService = socketService.socket;
    // console.log(socketService.socket);
    
    // socket.on('chat newMsg', (msg) => {
    //   console.log('got here, sending');
      
    //   this.msgs.push(msg);
    // })
    
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
