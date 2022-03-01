<template>
    
    <div class="bloc-modaleartComment" v-if="revele">

        <div class="modalComment card">

            <div class="modalComment-header">
                <h3>Write Comment</h3>
                <div v-on:click="toggleModaleart" class="btn-modale btn btn-danger">X</div>
            </div>
            <div class="modalComment-boby">
                <label for ="comment">Comment:</label>
                <input type="text" v-model="comment" id="commentaire" placeholder="here your Comment"><br />
            </div>
        </div>
        <div class="modaleComment-footer">
               <button type="submit" @click.prevent="addNewComment">Envoyer</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"ModalComment",
    props:["revele","toggleModalComment","article"],
    data(){
        return {
            Comment:null,
        }
    }

}
</script>

<style>
.bloc-modalComment {
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
.modalComment-body {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 3px;
    align-content: space-between;
}

.btn-modalComment{
    position:absolute;
    bottom: 10px;
    left: 10px;
}

</style>