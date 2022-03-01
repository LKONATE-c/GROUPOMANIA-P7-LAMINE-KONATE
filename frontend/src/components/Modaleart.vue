<template>
<div class="bloc-modaleart" v-if="revele">
   
     <div class="overlay" v-on:click="toggleModaleart"></div>
    <div class="modaleart card">
        <div class="modal-header">
            <h3>Edit Article</h3>
            <div v-on:click="toggleModaleart" class="btn-modale btn btn-danger">X</div>
        </div>
       
        <div class="modaleart-body">
           


                <label for ="title">Title:</label>
                <input type="text" v-model="title" id="title" placeholder="here your title"><br />
                <hr>
                <label for ="content">content:</label>
                <input type="text"  v-model="content" id="content" placeholder="your mesage here"><br />

        </div>
        <div class="modaleart-footer">
             
            <button type="button" @click="update" class="btn btn-primary">Save changes</button>
        </div>


    </div>
</div>


</template>


<script>
export default {
    name:"Modaleart",
    props:["revele","toggleModaleart","article"],
    data () {
        return {
            title:null,
            content:null,
        }
    },
    mounted() {
        this.title=this.article.title
        this.content=this.article.content

    },
    methods:{
        update() {
            this.$emit("update",{
                title:this.title,
                content:this.content
            })
        }
    }
}


</script>






<style scoped>
.bloc-modaleart {
    position:fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
     align-content: space-between;
}

.overlay{
    background: rgba(0, 0,0, 0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modaleart-body {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 3px;
    align-content: space-between;
}

.btn-Modaleart {
    position:absolute;
    bottom: 10px;
    left: 10px;
}



</style>