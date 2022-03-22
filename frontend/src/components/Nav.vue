<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/icon.png" width="50" height="50" alt="logo"
      /></a>

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item" v-if="!user">
            <router-link to="/Login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link to="/Signup" class="nav-link">Signup</router-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <router-link to="/Profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Forum" class="nav-link">Forum</router-link>
            </li>
            <li class="nav-item" v-if="user && user.role === 'Admin'">
              <router-link to="/Admin" class="nav-link">Admin</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  },
};
</script>
<style scoped></style>
