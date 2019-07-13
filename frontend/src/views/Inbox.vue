<template>
    <section class="wrapper">
        <div class="side-bar">
            <p>I'm the side bar</p>
        </div>
        <div class="msg-container">
            <p>I'm the container for msgs</p>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import InboxNav from '../components/inbox/InboxNav.vue';
export default {
    components: {
        InboxNav,
        data() {
            return {
                chats: []
            }
        }
    }
}
</script>

<style>

.wrapper {
    padding-top: 60px;
    display: grid;
    grid-template-columns: 20% 80%
}
</style>
