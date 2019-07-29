<template>
  <section class="chat">
    <li>
      <router-link exact :to="`/inbox/${loggedInUserId}/chats`">Back to All Messages</router-link>
    </li>
    <ul>
      <li v-for="msg in msgs" :class="whoSent(msg.addedBy)" :key="msg._id" msg.isRead="true">
        <p class="msg">{{msg.txt}}</p>
        <br>
        <br>
        <p v-if="msg.type === 'dateReq' ? true : false">
          {{msg.reqDetails.suggested | moment("dddd, MMMM Do YYYY")}}
        </p>
        <div v-if="msg.type === 'dateReq' && msg.addedBy !== loggedInUserId">
          <button
            @click="accept(msg)"
          >Accept</button>
          <button>Reschedule</button>
          <button>Decline</button>

        </div>
      </li>
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
import io from "socket.io-client";
import socket from "../../services/Socket.service.js";
import moment from "vue-moment";
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
      currMsg: null
      // msgs: [],
      // socket: null
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
      // this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
    },
    setType(val) {
      this.newMsg.type = val;
    },
    whoSent(who) {
      return who === this.loggedInUserId ? "byMe" : "byOther";
    },
    accept(msg) {
      this.currMsg = msg;
      this.currMsg.reqDetails.responseState = "accepted";
      console.log(this.currMsg);
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
    }
    // isReq() {
    //   return this.msg.type === 'dateReq' ? true : false;
    // }
    // lastMsg() {
    //   if (this.$store.getters.newMsg !== null) this.msgs.push(newMsg);
    //   this.$store.dispatch({type: 'clearNewMsg'});
    // }
  },
  created() {
    this.$route.params.chatRoomId;
    this.chatPrms = this.$route.params.chatRoomId;
    this.$store.dispatch("getLoggedUserId");
    this.$store.dispatch("loadChat", { chatRoomId: this.chatPrms });
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
  },
  destroyed() {
    console.log(this.chatPrms);
    var chatId = this.chatPrms;
    socket.emit("user left", chatId);
  }
};
</script>

<style>
.sendMsg {
  position: absolute;
  bottom: 20px;
  width: 100%;
}

.byMe {
  text-align: right;
}

.byMe,
.byOther {
  font-size: 18px;
  /* margin-bottom: 10px; */
}

.byMe p {
  display: inline;
  background-color: #77c0f1;
  border-radius: 4px;
  padding: 3px;
  /* margin: 3px; */
}

.byOther .msg {
  display: inline;
  background-color: #d4d6c8;
  border-radius: 4px;
  padding: 3px;
}

.chat {
  width: 60vw;
  position: relative;
  padding: 30px;
  padding-bottom: 50px;
  background-color: #eaebe4;
  border-radius: 4px;
}

button {
  font-family: "Open Sans", sans-serif;
  outline: none;
  background-color: #209cee;
  border: none;
  border-radius: 2px;
  margin-right: 2px;
  font-size: 1rem;
}

input {
  padding: 5px;
  margin-right: 3px;
  border: none;
  outline: none;
}

/*
.user-details button[data-v-07ae182d] {
    font-family: "Open Sans", sans-serif;
    /* color: #fff; */
/* background-color: #8bc34a;
    width: 113px;
    border: none;
    font-size: 1em;
    padding: 10px 15px;
    border-radius: 2px;
    -webkit-transition: .3s;
    transition: .3s;
    height: 43px;
    color: whitesmoke;
    margin: 20px auto;
    padding: 5px;
    background-color: #209cee;
}
<style>
button {
    cursor: pointer;
    outline: none;
}
*/
</style>
