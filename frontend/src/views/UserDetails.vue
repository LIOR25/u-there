<template>
  <div class="mainContainer" >
    <!-- <h1>This is userDetails page</h1> -->
    <div class="detailsList" >
        <h1>userName</h1>
       img <img src="" alt="">
        <h3>userCity</h3>
        <h3>userActivities</h3>
        <h3>userLang</h3>
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

</style>