<template>
  <div class="mainContainer" >
    <!-- <h1>This is userDetails page</h1> -->
    <div class="detailsList" >
        <h1>{{user.firstName + " " + user.lastName }}</h1>
      <img :src="user. img_url" alt="" class="userSmallImg">
        <h3>{{user.currCity}}</h3>
        <h3>{{user.Activities}}</h3>
        <h3>{{user.languages}}</h3>
        <button>Contact me</button>
    </div>

     <div class="detailsMain">
         <h2>Hi There! Nice to meet you</h2>
    <p>Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit.
         Illum similique quos veritatis
          consequuntur molestias recusandae assumenda odit 
          sapiente officia eius id esse, 
          consectetur libero inventore at rem,
           ad harum corporis.</p>
           <p>what we can do</p>
           <p>Reviews</p>
    </div>
  </div>
</template>


<script>


export default {
  name: 'userDetails',
  data(){
      return{
             user: {
            _id: null,
            firstName: '',
            lastName: '',
            Activities: [],
            img_url: '',
            currCity: '',
            languages: []

          },
      }
  },
   created() {
      const userId = this.$route.params.userId;
      this.$store.dispatch({type: 'loadUsers'})
        .then (() => {
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.userById(userId)));
        else this.$router.push('/user');
      })
      

   },
  components: {
  }
}
</script>


<style lang="scss" scoped>

.flex{
  display: flex;
}

.mainContainer{
    display: flex;
    justify-content: space-evenly;
    padding-top: 155px;
    }

.detailsList{
  flex-direction: column;

      border: 1px solid #2a6171;
          border-radius: 7px;
    box-shadow: 3px 3px 12px -1px #afa7a7;
}
button{
    cursor: pointer;
      font-size: 1rem;
    line-height: 1rem;
    margin: 0;
    padding: 0 2rem;
    border-radius: 2.5rem;
    border: none;
    background:lightskyblue;
    color: #fff;
    font-weight: 600;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: background .14s ease;
    transition: background .14s ease;
    height: 3rem;
    min-height: 3rem;
    overflow: hidden;

}

.detailsMain{
     flex-direction: column;

      border: 1px solid #2a6171;
          border-radius: 7px;
    box-shadow: 3px 3px 12px -1px #afa7a7;
}

.userSmallImg{
    width: 50px;
    height: 50px;
}


</style>