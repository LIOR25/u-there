<template>
    <section>
        <ul>
            <li><router-link exact to="/inbox/:userId/chats">Messages</router-link></li>
            <li>Upcoming</li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            chats: []
        }
    }
}
</script>

<style>

</style>
