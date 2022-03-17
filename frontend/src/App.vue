<template>
<Nav/>


<main class="form-signin">
  <router-view/>
</main>
</template>

<script>
import Nav from '@/components/Nav';
import axios from "axios";
                    //pour ne pas de le user soit deco
export default {
  components:{Nav},
  mounted(){
    if(localStorage.token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.token
      axios.get("/api/user/me").then((res)=>{
        this.$store.commit("setUser",res.data)
        this.$router.push("/forum")
      }).catch((error)=>{
        console.log(error)
        this.$router.push("/login")
      })
    }
  }
 
}
</script>


<style>


.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
