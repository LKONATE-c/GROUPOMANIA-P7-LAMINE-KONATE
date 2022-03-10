<template>
<h1>User list</h1>
        <table class="table">
            <thead class="thead-dark">
              
                    <tr>
                        <td >id</td>
                        <td >First Name</td>
                        <td >Last Name</td>
                        <td >Email</td>
                        <td >Action</td>
                    </tr>
                     <tr v-for="user in user" v-bind:key="user.id">
                         <td>{{user.id}}</td>
                         <td>{{user.firstname}}</td>
                         <td>{{user.lastname}}</td>
                         <td>{{user.email}}</td>
                         <td><button v-on:click="deleteUser(user.id)">Delete</button></td>
                     </tr>
            </thead>
        </table>
  
</template>

<script>
import axios from "axios";


export default {
    name:"User",
        data () {
            return { user:null
                
            }
            
        },
    //computed:{
        //user(){
        //return this.$store.getters["user"]
       //}
    //},
    methods: {

        getData() {
            axios
            .get("/api/user/all/" )
            .then((result)=>{
                console.log(result)
                this.user=result.data

            })
        },
        deleteUser(id) {
            axios
             .delete("api/user/"+ id)
             .then(()=>{
                 this.getData();

             })
        }

    },
    mounted(){
        this.getData()
    }


}
</script>

<style>
    table {
        padding:15px;
    }

    @media screen and (max-width: 768px) {
    section {
        padding: 50px;
    }
}

</style>