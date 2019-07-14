<template>
  <section>
    <ul>
      <li v-for="chat in userChats" :chat="chat" :key="chat._id" @click="openChat">{{chat.usersIds}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
    //   chats: 10
    };
  },
  methods: {
    openChat() {
      console.log("Hi");
    }
  },
  computed: {
    userChats() {
      return this.$store.getters.userChats;
    }
  },
  created() {
    this.$store.dispatch("loadUserChatRooms");
    // console.log(this.$store.getters.userChats);
    console.log(this.$store.state);
  }
};
</script>

<style>
</style>
