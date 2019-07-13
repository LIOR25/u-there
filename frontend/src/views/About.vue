<template>
  <div class="about">
    <h1>This is an about page</h1>
    <userDetails></userDetails>
  </div>
</template>


<script>

import userDetails from '../views/UserDetails.vue'

export default {
  name: 'About',
  components: {
    userDetails
  }
}
</script>