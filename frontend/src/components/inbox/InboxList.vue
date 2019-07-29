<template>
  <section class="msgs-container">
    <ul class="msg-prevs">
      <li
        v-for="(chatWithUser, idx) in pairingChatUsers"
        :chat="chatWithUser.chat"
        :userWith="chatWithUser.userWith"
        :key="idx"
        @click="openChat(chatWithUser.chat._id)"
      >
        <chat-preview :chat="chatWithUser.chat" :userWith="chatWithUser.userWith"></chat-preview>
        <!-- <router-link class="link" :to="`/inbox/${userId}/${chatWithUser.chat._id}`">Read</router-link> -->
      </li>
    </ul>
  </section>
</template>

<script>
import ChatPreview from "./ChatPreview.vue";
// import Chat from "./Chat.vue";
export default {
  data() {
    return {};
  },
  methods: {
    openChat(chatId) {
      this.$router.push(`/inbox/${this.userId}/${chatId}`);
    }
  },
  computed: {
    userId() {
      return this.$store.getters.loggedUser._id;
    },
    userChats() {
      return this.$store.getters.userChats;
    },
    userChatsWith() {
      return this.$store.getters.userChatsWith;
    },
    pairingChatUsers() {
      return this.userChats.map((chat, i) => {
        return {
          chat: chat,
          userWith: this.userChatsWith[i]
        };
      });
    }
  },
  created() {
    
    // this.$store.getters.loggedUser;
    this.$store.dispatch("getLoggedUserId");
    // console.log(this.$store.state);
    this.$store.dispatch("loadUserChatRooms")

  },
  components: {
    ChatPreview
    // Chat
  }
};
</script>

<style>

.msgs-container {
  display: grid;
  grid-template-columns: 300px 1fr;

}

ul, li{
  list-style-type: none;
  padding-inline-start: 0;
}




.link {
  text-decoration: none;
}

.msg-prevs {
  display: flex;
  flex-direction: column-reverse;
  font-size: 20px;

}

</style>
