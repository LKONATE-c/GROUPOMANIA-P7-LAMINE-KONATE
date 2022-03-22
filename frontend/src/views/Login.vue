<template>
  <img class="logo" src="../assets/icon-above-font.png" />

  <form @submit.prevent="handleSubmit">
    <h1 class="h3 mb-3 fw-normal">Please Login</h1>

    <div class="form-group">
      <input
        type="email"
        class="form-control"
        v-model="email"
        placeholder="name@example.com"
        require
      />
    </div>

    <div class="form-group">
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Password"
        required
      />
    </div>

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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/profile");
        })
            .catch((error) => {
          alert("Authentification incorrect");
          this.error = error;
        });
    },
    
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.container_signup {
  margin-top: 20px;
  box-shadow: 0px 0px 10px 0px grey;
}

.form-group {
  margin-top: 20px;
}
</style>
