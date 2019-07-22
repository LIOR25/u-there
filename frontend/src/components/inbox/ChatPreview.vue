<template>
<div class="prev" v-if="userWith&&chat">
    <img class="chat-img" :src="`${userWith.img_url}`" alt="user-img">
    <div class="prev-txt">{{userWith.firstName}} {{userWith.lastName}}</div>
</div>
</template>

<script>
export default {
    props: ['chat', 'userWith'],
    data() {
        return {
            // chat: null,
            // userWith: null
        }
    }
}
</script>

<style>
.chat-img {
    height: 60px;
    border-radius: 50%;
    width: 60px;
    object-fit: cover;
}
.prev {
    display: flex;
    flex-basis: row;
    margin-bottom: 5px;
}

.prev-txt {
    padding-left: 10px;
    line-height: 2.5;
}

</style>
