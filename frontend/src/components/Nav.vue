<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <router-link to="/Home"  class="nav-link" >Home</router-link>
    
    <div >
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link to="/Login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Signup" class="nav-link">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Profile" class="nav-link">Profile</router-link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
</template>
<script>
export default {
   name:"Nav"
}
</script>

