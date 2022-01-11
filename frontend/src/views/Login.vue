<template>
      
      <img  class="logo" src="../assets/icon-above-font.png"/>

    <form @submit.prevent="handleSubmit">
    
      <h1 class="h3 mb-3 fw-normal">Please Login</h1>
       
  
      <input type="email" class="form-control" v-model="email"  placeholder="name@example.com" require>

      <input type="password" class="form-control" v-model="password" placeholder="Password" required>
      
      <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>

      <div class="container_signup">
        <p>
          Vous n'avez pas de compte?
          <router-link to="/signup">signup</router-link>.
        </p>
      </div>
  
    </form>
</template>


<script>

import axios from "axios";

export default {

    name:"Login",
    data(){
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      
       async handleSubmit () {

       await axios.post("/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
              console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.userId);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          
          this.$router.push("/profileNav");
        })
        .catch((error) => {
          console.log(error);
          alert("Authentification incorrect");
          this.error = error;
        });

      }
    }
    
}
</script>

<style>

.logo{
    width:100px
}
.container_signup {
  margin-top: 20px;
  box-shadow: 0px 0px 10px 0px grey;
}

</style>