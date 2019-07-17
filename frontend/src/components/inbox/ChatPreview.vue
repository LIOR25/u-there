<template>
<div v-if="userWith&&chat">
    <img class="prev" :src="`${userWith.img_url}`" alt="user-img">
    {{userWith.firstName}} {{userWith.lastName}}
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
img {
    height: 30px;
    border-radius: 50%
}

</style>
