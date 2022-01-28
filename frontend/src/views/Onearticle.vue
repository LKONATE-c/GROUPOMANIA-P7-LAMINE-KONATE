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
        <div class="update">
        </div>
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
          <div v-if="commentaire.User.id === me || isAdmin">
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

export default {
  name:"Onearticle",
  components: {
    NewCommentaire,
    cardArticle,
  },
  
  
  data () {
    return {
      article: null,
      commentaire: [],
       isAdmin: false,

    }

  },
  computed:{
    user(){
      return this.$store.getters["user"]
    }
  },
  methods: {

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
         

    },
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
</style>


