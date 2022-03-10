<template>
<h1>User list</h1>
<section>
    
    <div class="table-responsive col-lg-12">
        <table class="table table-light table-striped table-hover table-borderless">
                <thead class="table-dark">
                    <tr>
                            <th scope="col">id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                    </tr>
                </thead>
                 <tbody>
                     <tr v-for="user in users" v-bind:key="user.id">
                         <td>{{user.id}}</td>
                         <td>{{user.firstname}}</td>
                         <td>{{user.lastname}}</td>
                         <td>{{user.email}}</td>
                         <td button v-on:click="deleteUser(user.id)">Delete</td>
                     </tr>

                 </tbody>

        </table>


    </div>
</section>
  
</template>

<script>
import axios from "axios";


export default {
    name:"User",
    data () {
        return { user:null
            
        }
    },
    methods: {

        getData() {
            axios
            .get("/api/user/getone/"+userid)
            .then((result)=>{
                console.log(result)
                this.user=result.user

            })
        },
        deleteUser(id) {
            axios
             .delete("api/user/"+id)
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
    section {
        background-color: #000000cc;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
    }

    @media screen and (max-width: 768px) {
    section {
        padding: 50px;
    }
}

</style>