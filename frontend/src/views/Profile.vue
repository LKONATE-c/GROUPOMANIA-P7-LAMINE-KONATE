<template>
  <div>
    <h1>My PROFILE</h1>
    <div id="container">
      <!-- ICI ajouter de quoi afficher les posts du profil -->
      <div class="les-Posts">
        <!--<div class="les-Posts">-->
        <h3>My ITEMS</h3>
        <cardArticle
          :key="article.id"
          v-for="article of articles"
          :article="article"
          @click="showarticle(article.id)"
          :user="user"
        />
      </div>
      <div id="profil">
        <!-- Email, Nom et prénom du profil -->
        <div v-if="user">
          <p>E-mail :{{ " " + user.email }}</p>
          <p>
            Firstname and Lastname :
            {{ user.firstname + " " + user.lastname }}
          </p>
          <hr />
        </div>
        <!-- Supprimer le profil -->
        <button class="deletebtn" v-on:click="deleteProfile(user.id)">
          Supprimer mon compte
        </button>
        <!-- deco du  profil -->
        <button class="logoutbtn"  @click="logout">
          Deconnexion
        </button>

        <hr />
        <P>
          Follow the news on our forum
          <router-link to="/forum">GO Forum</router-link>
        </P>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cardArticle from "../components/cardArticle";
export default {
  name: "Profile",
  components: {
    cardArticle,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      token: "",
      userId: "",
      message: "",
      dataProfile: null,
      articles: [],
      email: "",
      firstname: "",
      lastname: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
  },
  methods: {
    //recuper des article publie par le user
    getArticlesProfile() {
      axios
        .get("/api/article/all/" + this.user.id)
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log({ error });
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
    }, //voir tous les article que le user a ecris
    showarticle(id) {
      this.$router.push("/article/" + id);
    },
    updateProfile() {}, //recuper les data afin de pour suprimer l'user
    getData() {
      axios.get("/api/user/all/").then((result) => {
        console.log(result);
        this.user = result.data;
      });
    },
    deleteProfile(id) {
      axios.delete("api/user/" + id).then(() => {
        alert("user deleted");
        this.getData();
        this.$router.push("/Signup");
      });
    },

    //deconexion
    logout() {
      localStorage.clear();
      window.location.href="/login";
     
    },
  },

  mounted() {
    /*appeler les fonctions quand l'html sera pret*/

    this.getArticlesProfile();
   
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-around;
}
#profil {
  flex: 1;
  background-color: #d2fafa;
  height: 30%;
  margin: 20px 20px 20px 20px;
  border-radius: 10px;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.les-Posts {
  flex: 2;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.les-Posts h3 {
  background-color: #d2fafa;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
}
.deletebtn {
  width: 150px;
  cursor: pointer;
  border: unset;
  font-size: 1.2em;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background-color: rgb(216, 41, 41);
  margin-top: 40px;
  margin-bottom: 40px;
  transition: 0.3s;
  color: white;
  font-weight: bold;
}
.deletebtn:hover {
  border-radius: 10px 0 10px 0;
}
.logoutbtn {
  width: 150px;
  cursor: pointer;
  border: unset;
  font-size: 1.2em;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background-color: rgba(204, 216, 41, 0.972);
  margin-top: 40px;
  margin-bottom: 40px;
  transition: 0.3s;
  color: black;
  font-weight: bold;
}
.logoutbtn:hover {
  border-radius: 10px 0 10px 0;
}
button {
  width: 120px;
  cursor: pointer;
  border: unset;
  font-size: 1em;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background: #31bcc6;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: 0.3s;
  color: white;
  font-weight: bold;
}
.error {
  font-size: 1.2em;
  color: rgb(216, 41, 41);
  margin-top: 20px;
}
form {
  padding-top: 20px;
}

hr {
  border: 2px solid #d6dfe2;
}
@media screen and (max-width: 1130px) {
  #container {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .les-Posts {
    width: 100%;
  }
  #profil {
    width: 100%;
  }
}
</style>
