<template>
  <div>
    <div v-if="article">
      <div class="the-article">
        
        <h1>{{ article.title }}</h1>
        <hr>
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
        <modaleart v-if="article.userid === user.id || isAdmin" @update="updateArticle($event)" v-bind:revele = "revele" v-bind:toggleModaleart = "toggleModaleart" :article="article"></modaleart>
         <div v-on:click="toggleModaleart" class="btn btn-success">edit article</div>
       
          

      </div>
        <!-- pour poster un commentaire -->


        <div class="newcommentaire">
      <newCommentaire v-on:createcomment="createcommentaire($event)" />
    </div>
     
      <!-- Début des commentaires -->
      <h2>Commentaires :</h2>
      <div class="comments">
        <div class="card" :key="commentaire.id" v-for="commentaire of allCommentaire">
          <p>
            {{ commentaire.commentaire.comment }}
          </p>
          <p class="commDe">
            Publié par {{ commentaire.user.firstname }} {{ commentaire.user.lastname }}
            le {{new Date(commentaire.commentaire.date).toLocaleDateString("fr")}}
          </p>
          
            <button  v-if="commentaire.commentaire.userid === user.id || isAdmin"
            @click="deleteCommentaire(commentaire.commentaire.id)">
             
             
              Supprimer
            </button>
          <!--</div>-->
          
        </div>
      </div>
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
       revele:false,
        allCommentaire: [],

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
          this.getAllCommentaire();
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
                    // afficher la modal
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
    
                  //afficher les commentaire conçernant l'article
    },
     getAllCommentaire() {
    axios
      .get("/api/commentaire/all/"+this.article.id)
      .then((res) => {
          console.log(res.data)
          res.data.forEach((commentaire)=>{
            axios.get("/api/user/getone/"+ commentaire.userid).then((res)=>{
              console.log(res.data);
              this.allCommentaire.push({
                commentaire:commentaire,
                user:res.data,
              })
            })
          })
        })
          .catch((error) => {
          console.log({ error });
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
  },              //ajouter un commentaire 
  createcommentaire(e) {
    axios
    .post("/api/commentaire/", {
      comment:e.comment,
      articleid:this.article.id,
      userid:this.user.id

       })
    .then((res) =>{
      console.log(res.data)
      this.allCommentaire.push({
        commentaire:res.data,
        user:this.user
        })

      })
       
    },                  //supression du commentaire
     deleteCommentaire(id) {
      axios
      .delete("api/commentaire/" + id)
      .then (()=>{
        alert("your comment is deleted");
        this.allCommentaire= this.allCommentaire.filter((element )=>{
          return element.commentaire.id !== id
        })
      })
      .catch((error) => {
          console.log({ error });
      });
                               // afficher la modal
     },
       toggleModaleart: function(){
        this.revele = !this.revele;
    },

  },

  mounted(){
    
    this.getonearticle();
  
  },
    
  
}
</script>

<style scoped>
.the-article {
  margin: 30px 20px 30px 20px;
  padding: 1px 0px 30px 0px;
  background-color: #d2fafa;
  border-radius: 10px;
  text-align: center;
}
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
  margin-bottom: 8px;
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
.card {
  margin: 10px 20px 20px 20px;
  padding: 1px 30px 30px 30px;
  background-color: white;
  border-radius: 10px;
}
.commDe {
  font-style: italic;
}

.hr {
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
}

</style>


