<template>
         <img  class="logo" src="../assets/icon-above-font.png"/>

          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>


     <form @submit.prevent="handlesubmit">
    
       

      <div class="form-group">
        <input type="text" v-model="firstname" class="form-control"    placeholder="Firstname" required>
      </div>

      <div class="form-group">
        <input type="text" v-model="lastname" class="form-control"  placeholder="Lastname" required>
       </div>

      <div class="form-group">
        <input type="text" v-model="email"  class="form-control"   placeholder="name@example.com" required>
       </div>

      <div class="form-group">
        <input type="password" v-model="password"  class="form-control"  placeholder="Password" required>
        <!--<div v-if="passwordError" class="error">{{passwordError}}</div>-->
       </div>
      
        <button class="w-100 btn btn-lg btn-primary" type="submit">Signup</button>

    
        <div class="container_login">
        <p>
           Already have an account? <router-link to="/login">login</router-link>.
        </p>
        </div>
    

  
     </form>

</template>
<script>
import axios from "axios";

export default {
    name: "Signup",
    data() {
        return{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            //passwordError:''
        } 
    },
    methods:{
      handlesubmit () {
        axios
        .post("/api/user/signup", {
          firstname:this.firstname,
          lastname:this.lastname,
          password:this.password,
          email:this.email
        })
        .then((res)=>{
          console.log(res)
          this.$router.push("/login");
        })
      }

    }    
  }
</script>

<style >
.logo{
   
    width:175px
  
}
.container_login {
  margin-top: 20px;
  box-shadow: 0px 0px 10px 0px grey;
}
.error{
  color: #ff062f;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;

}
.form-group{
  margin-top: 20PX;
}

</style>



