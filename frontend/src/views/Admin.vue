<template>
  <h1>User list</h1>
  <section>
    <table class="table table-light table-striped table-hover table-borderless">
      <thead class="thead-dark">
        <tr>
          <td>id</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
        <tr v-for="user in user" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td><button v-on:click="deleteUser(user.id)">Delete</button></td>
        </tr>
      </thead>
    </table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return { user: null };
  },

  methods: {
    //recuper des data des user

    getData() {
      axios.get("/api/user/all/").then((result) => {
        console.log(result);
        this.user = result.data;
      });
    }, //supresion du user
    deleteUser(id) {
      axios.delete("api/user/" + id).then(() => {
        alert("user deleted");
        this.getData();
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  top: 20%;
}

@media screen and (max-width: 768px) {
  section {
    padding: 50px;
    top: 20%;
  }
}
</style>
