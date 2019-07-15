<template>
  <section>
    <ul>
        <li
          v-for="(chatWithUser, idx) in pairingChatUsers"
          :chat="chatWithUser.chat"
          :userWith="chatWithUser.userWith"
          :key="idx"
        >
          <chat-preview
            :chat="chatWithUser.chat"
            :userWith="chatWithUser.userWith"
          ></chat-preview>
            <router-link class="link" :to="`/inbox/:userId/${chatWithUser.chat._id}`">Read</router-link>
        </li>
    </ul>
  </section>
</template>

<script>
import ChatPreview from "./ChatPreview.vue";
// import Chat from "./Chat.vue";
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {
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
    this.$store.dispatch("loadUserChatRooms");
    // console.log(this.$store.state);
  },
  components: {
    ChatPreview,
    // Chat
  }
};
</script>

<style>
ul, li {
  list-style-type: none;
}
.link {
  text-decoration: none;
}
</style>
