<template>
  <div class="prev" v-if="userWith&&chat">
    <img class="chat-img" :src="`${userWith.img_url}`" alt="user-img" />
    <div class="prev-txt">{{userWith.firstName}} {{userWith.lastName}}</div>
  </div>
</template>

<script>
export default {
  props: ["chat", "userWith"],
  data() {
    return {
      // chat: null,
      // userWith: null
    };
  }
};
</script>

<style>
.chat-img {
  height: 60px;
  border-radius: 50%;
  width: 60px;
  object-fit: cover;
  border: 2px solid rgb(126, 126, 126);
}
.prev {
  display: flex;
  /* flex-basis: row; */
  margin-bottom: 5px;
  align-items: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 5px;
  border-radius: 4px;
  background-color: #d4d6c8;
}

.prev:hover {
  border-top: 1px solid #9a9b94;
  border-bottom: 1px solid #9a9b94;
  cursor: pointer;
}

.prev-txt {
  padding-left: 10px;
  line-height: 2.5;
}
</style>
