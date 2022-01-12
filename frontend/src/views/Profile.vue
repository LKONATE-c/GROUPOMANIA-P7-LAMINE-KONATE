<template>
  <div>
    <h1>My PROFILE</h1>
    <div id="container">
      <!-- ICI ajouter de quoi afficher les posts du profil -->
      <div class="les-Posts">
        <h3>My ITEMS</h3>
        <cardArticle
          :key="article.id"
          v-for="article of articles"
          :title="article.title"
          :content="article.content"
          :user="article.User"
          :image="article.image"
          :id="article.id"
        />
      </div>
      <div id="profil">
        <!-- Email, Nom et prénom du profil -->
        <div v-if="dataProfile">
          <p>E-mail :{{ " " + dataProfile.email }}</p>
          <p>
            Firstname and  Lastname :
            {{ dataProfile.firstname + " " + dataProfile.lastname }}
          </p>
          <hr />
        </div>
       
        <!-- modification Nom et prénom du profil -->
        <form @submit.prevent="updateProfile">
          <div>
            <label for="lastname">Lastname</label><br />
            <input
              required
              v-model="lastname"
              type="text"
              name="lastName"
              id="lastname-input"
              placeholder="Dupont"
            />
          </div>
          <div>
            <label for="firstname">Firstname</label><br />
            <input
              required
              v-model="firstname"
              type="text"
              name="firstname"
              id="firstname-input"
              placeholder="Charles"
            />
          </div>

          <button type="submit" @click.prevent="updateProfile">Modifier</button>
          <p v-if="message">{{ message }}</p>
        </form>
        <hr />
        <!-- Supprimer le profil -->
        <button class="deletebtn" type="submit" @click.prevent="deleteProfile">
          Supprimer mon compte
        </button>
      </div>
    </div>
  </div>
</template>
//----------------------------------------------------------------------------------------------------------------------
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
      posts: [],
      email: "",
      firstname: "",
      lastname: "",
    };
  },
  methods: {
    loadProfile() {
      let userId = localStorage.getItem("id");
      axios
        .get("/api/user" + userId)
        .then((res) => {
          this.dataProfile = res.data;
        })
        .catch((error) => {
          console.log({ error });
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
    },
    allArticlesProfile() {
      let userId = localStorage.getItem("id");
      axios
        .get("/api/article/all" + userId + "/articles")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((error) => {
          console.log({ error });
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
    },
    updateProfile() {
      let userId = localStorage.getItem("id");
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
      };
      axios
        .put("/api/user" + userId, data)
        .then((res) => {
          alert("your profile has been updated !");
          this.dataProfile = res.data.user;
        })
        .catch((error) => {
          this.error = error;
          if (error.status === 401) {
            this.$router.push("/login");
          }
        });
    },
    async deleteProfile() {
      const isConfirm = await confirm(
        "Confirm the deletion of the profile ?"
      );
      
      if (!isConfirm) {
        return;
      }
      let userId = localStorage.getItem("id");
      axios
        .delete("/api/user" + userId)
        .then(() => {
          alert("Your account is deleted !");
          this.$router.push("/signup");
        })
        .catch((error) => {
         
          alert("Profile could not be deleted !");
        });
    },
  },
  mounted() {
    /*appeler les fonctions quand l'html sera pret*/
    this.loadProfile();
    this.allArticlesProfile();
  },
};
</script>
//----------------------------------------------------------------------------------------------------------------------
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
#lastname-input,
#firstname-input {
  margin-bottom: 15px;
  margin-top: 5px;
  width: 500px;
  max-width: 94%;
  border-style: solid;
  border-color: #31bcc6;
  background-color: white;
  text-align: center;
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