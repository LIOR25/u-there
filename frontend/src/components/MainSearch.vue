<template>
  <div class="MainSearch">
    <h1>{{ msg }}</h1>
    <p>
      Meet people who love the some activities as you all over the world!
      <!-- <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>. -->
    </p>
  <div class="searchBlock" >
    <form class="searchBlockTop"  @submit.prevent="load">
      <div class="searchBlockContainer"> 
        <div class="SearchInputContainer">
       <input v-model="filterBy.cityName"  class="SearchInput" type="text" placeholder="Where are you going?">
      <input class="SearchInput" type="text" placeholder="Where would you like to do?">
   
       </div>
      </div>
<button class="button">Search</button>
    </form>

  </div>



  </div>

</template>

<script>
export default {
  name: "MainSearch",
  props: {
    msg: String
  },
   data() {
    return {
      filterBy: {
      cityName: '',
     
      }
    }
  },
created(){
// debugger

},
methods :{
load() {
  // console.log('im here' ,this.filterBy.cityName);
  //   this.$store.dispatch({
  //   type: "loadCitiesByFilters",
  //     filterBy: { cityName: this.filterBy.cityName }
      
    // });

          this.$router.push(`/city/${this.filterBy.cityName}`);

}


},

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.SearchBlock {
    background: #fff;
    width: 100%;
    padding: 2rem 0 0;

}



.SearchBlockTop {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

}


.SearchInputContainer {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    width: 100%;
    min-height: 3rem;
    z-index: 1;
    margin-bottom: 1.5rem;
}

.SearchInput{
border: 1px solid grey;
    border-radius: 2px;
    height: 3rem;
    line-height: 3rem;
    font-weight: 500;
    padding: 0 1rem 0 3rem;
    text-align: left;
    margin: 0 1rem 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    font-size: 1rem;
}


.button {
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

</style>
