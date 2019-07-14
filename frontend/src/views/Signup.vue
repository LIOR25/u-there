<template>
      <section class="signup">
        <h1>Sign up</h1>
        <form @submit.prevent="signup">
            <label for="">Email
                <input type="email"  placeholder="Email" />
            </label>
            <label for="">Password
                <input type ="password" placeholder="Password" />
            </label>
            <label for="">First Name
                <input  placeholder="First Name" />
            </label>
            <label for="">Last Name
                <input  placeholder="Last Name" />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    </section>
</template>


<script>

export default {
  name: 'Signup',
  components: {
  }
}
</script>


<style lang="scss" scoped>


.signup{
  padding-top: 120px;



}

input{
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
    width: 250px;
    

}


button {
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

label{
  margin-bottom: 30px;

}

</style>