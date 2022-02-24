<template>
  <div>
    <div v-if="article">
      <div class="the-article">
        <h1>{{ article.title }}</h1>
        <p>{{ article.content }}</p>
        <img :src="article.image" />
        <!-- <img src="http://localhost:3001/images/monimage.png"> -->
        <div>
          <button
            v-if="article.userid === user.id || isAdmin"
            @click.prevent="deleteArticle(article.id)"
          >
            Supprimer
          </button>
        </div>
        <modaleart @update="updateArticle($event)" v-bind:revele = "revele" v-bind:toggleModaleart = "toggleModaleart" :article="article"></modaleart>
         <div v-on:click="toggleModaleart" class="btn btn-success">edit article</div>
       
          <!--<button2
           v-if="article.userid === user.id || isAdmin"
            @click.prevent="editArticle(article.id)">
            Edit
          </button2> -->
          <!--<button class="btn btn-primary" @click="editArticle(article.id)">Edit</button>-->
          <!-- Button trigger modal -->
          <!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
            editarticle
          </button> -->

     
        <!-- pour poster un commentaire -->
        <newcommentaire @refresh="refreshCommentaire" :id="article.id"></newcommentaire>
      </div>
      <!-- Début des commentaires -->
      <!--<h2>Commentaires :</h2>
      <div ref="comments">
        <div class="card" :key="commentaire.id" v-for="commentaire of commentaires">
          <p>
            {{ commentaire.commentaire }}
          </p>
          <p class="commDe">
            Publié par {{ commentaire.User.firstName }} {{ commentaire.User.lastName }}
          </p>
          <div v-if="commentaire.userid === user.id || isAdmin">
            <button @click.prevent="deleteComment(comment.id)">
              Supprimer
            </button>
          </div>
          
        </div>
      </div>-->
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
import NewCommentaire from "../components/Newcommentaire";
import cardArticle from "../components/cardArticle";
import Modaleart from "../components/Modaleart.vue";

export default {
  name:"Onearticle",
  components: {
    NewCommentaire,
    cardArticle,
    Modaleart
  },
  
  
  data () {
    return {
      article: null,
      commentaire: [],
       isAdmin: false,
       revele:false

    }

  },
  computed:{
    user(){
      return this.$store.getters["user"]
    }
  },
  methods: {
                        //chager l'article selectionner 
    getonearticle() {
      axios
      .get("/api/article/getone/" + this.$route.params.articleid)
      .then((res) => {
          console.log(res.data)
          this.article = res.data;
        })
          .catch((error) => {
          console.log({ error });
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
         

    },                      //supprimer l'article
    deleteArticle(id){
      axios
      .delete("api/article/" + this.$route.params.articleid)
      .then (()=>{
        alert("your article is deleted");
        this.$router.push("/profile")
      })
      .catch((error) => {
          console.log({ error });
      });

    },  

    toggleModaleart: function(){
        this.revele = !this.revele;
    },
  
      
  

                  //modification de l'article
    updateArticle(articleUpdated){
      axios
      .put("/api/article/update" ,{
        title:articleUpdated.title,
        content:articleUpdated.content,
        id:this.article.id
      })
      .then((response)=>{
            this.article.title=articleUpdated.title;
             this.article.content=articleUpdated.content;
              this.toggleModaleart()
            alert("article updated");
        });
      

      
    }

  },
 
  
  mounted(){
    
    this.getonearticle(); 
   

  },
    
  
}
</script>

<style scoped>
button {
  width: 120px;
  cursor: pointer;
  border: unset;
  font-size: 1em;
  box-shadow: 5px 5px 15px -3px rgb(0 0 0 / 50%);
  background: rgb(255, 61, 61);
  margin-top: 10px;
  transition: 0.3s;
  color: white;
  font-weight: bold;
}
button2 {
  width: 120px;
  cursor: pointer;
  border: unset;
  font-size: 1em;
  box-shadow: 5px 5px 15px -3px rgb(0 0 0 / 50%);
  background: #3d77ff;
  margin-top: 10px;
  transition: 0.3s;
  color: white;
  font-weight: bold;

}
</style>


