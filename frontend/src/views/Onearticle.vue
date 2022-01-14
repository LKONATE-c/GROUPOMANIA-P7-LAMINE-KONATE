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
            v-if="article.Userid === me || isAdmin"
            @click.prevent="deletePost(article.id)"
          >
            Supprimer
          </button>
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
//----------------------------------------------------------------------------------------------------------------------
<script>
import axios from "axios";
import NewCommentaire from "../components/Newcommentaire";
export default {
  name: "Onearticle",
  components: {
    NewCommentaire,
  },
  data() {
    return {
      post: null,
      comments: [],
      me: 0,
      isAdmin: false,
    };
  },
  methods: {
    // Pour charger l'article selectionné
    async fetchPost() {
      try {
        const { data } = await axios.get("/api/article/" + this.$route.params.id);
        this.article = data;
      } catch (error) {
        console.log("error");
      }
    },
    async refreshComments() {
      await this.fetchCommentaires();
      this.$refs.commentaires.scrollIntoView({
        behavior: "smooth",
      });
    },
    // Pour charger les commentaires de l'article
    async fetchCommentaires() {
      try {
        const { data } = await axios.get(
          "/api/article/" + this.$route.params.id + "/commentaires"
        );
        this.comments = data;
      } catch (error) {
        if (error.status === 401) {
          this.$router.push("/login");
        }
      }
    },
    // Pour delete le commentaire séléctionné
    async deleteCommentaire(id) {
      console.log("delete commentaire id: ", id);
      const isConfirm = await confirm(
        "Do you confirm the deletion of the comment? "
      );
      console.log({ isConfirm });
      if (!isConfirm) {
        return;
      }
      axios
        .delete("/api/article/" + this.$route.params.id + "/commentaire/" + id)
        .then(() => {
          alert("Your comment has been deleted !");
          document.location.reload();
        })
        .catch((error) => {
          console.log({ error });
        });
    },
    // Pour delete l'article séléctionné
    async deleteArticle(id) {
      console.log("delete article id: ", id);
      const isConfirm = await confirm(
        "Do you confirm the deletion of the article ?"
      );
      console.log({ isConfirm });
      if (!isConfirm) {
        return;
      }
      axios
        .delete("/api/article/" + this.$route.params.id)
        .then(() => {
          alert("Votre post a bien été supprimé !");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
  mounted() {
    this.fetchArticle();
    this.fetchCommentaires();
    this.me = Number(localStorage.getItem("id"));
    this.isAdmin = localStorage.getItem("isAdmin") === "true";
  },
};
</script>
//----------------------------------------------------------------------------------------------------------------------
<style scoped>
.the-article {
  margin: 30px 20px 30px 20px;
  padding: 1px 0px 30px 0px;
  background-color: #d2fafa;
  border-radius: 10px;
}
.card {
  margin: 10px 20px 20px 20px;
  padding: 1px 30px 30px 30px;
  background-color: white;
  border-radius: 10px;
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
}
.commDe {
  font-style: italic;
}
img {
  max-width: 60%;
}
@media screen and (max-width: 1130px) {
  img {
    max-width: 90%;
  }
}
</style>