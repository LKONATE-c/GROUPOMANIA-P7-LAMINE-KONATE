<template>
         <img  class="logo" src="../assets/icon-above-font.png"/>


     <form @submit.prevent="handlesubmit">
    
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

  
        <input type="text" v-model="firstname" class="form-control"  placeholder="Firstname" aria-required="">

        <input type="text" v-model="lastname" class="form-control"  placeholder="Lastname" required>


        <input type="text" v-model="email"  class="form-control"  placeholder="name@example.com" required>

        <input type="password" v-model="password"  class="form-control"  placeholder="Password" required>
      
        <button class="w-100 btn btn-lg btn-primary"    type="submit">Signup</button>

    
        <div class="container_login">
        <p>
            Vous avez déjà un compte? <router-link to="/login">login</router-link>.
        </p>
        </div>
    

  
     </form>

</template>
<script>
import axios from "axios";

export default {
    data() {
        return{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
        } 
    },
    methods:{
         async handleSubmit() {
            const data = {
                firstname:this.firstname,
                lastname:this.lastname,
                email:this.email,
                password:this.password
            }
              console.table(data);
      try {

            const res =await axios.post("/api/user/signup", data);
            
            
        console.log(res);
        this.$router.push("/login");
      } catch (error) {
        alert(error?.response?.data?.error || "Une erreur est survenue.");
      }
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

</style>