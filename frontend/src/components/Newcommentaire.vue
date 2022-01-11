<template>
  <div>
    <form @submit.prevent="buttonNewCommentaire">
      <div>
        <label for="commentaire"></label>
        <hr />
        <input
          type="text"
          id="commentaire"
          placeholder="Here you comment"
          v-model="commentaire"
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import axios from "axios";
export default {
  name: "NewCommentaire",
  props: {
    id: { type: Number },
  },
  data() {
    return {
      commentaire: "",
      error: "",
    };
  },
  methods: {
    async buttonNewCommentaire() {
      this.error = "";
      try {
        await axios.post("/api/article/" + this.id + "/commentaire/", {
          comment: this.comment,
        });
        this.$emit("refresh");
        this.comment = "";
        this.error = "Your comment sent !";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
//----------------------------------------------------------------------------------------------------------------------
<style scoped>
input {
  margin-bottom: 15px;
  margin-top: 15px;
  width: 500px;
  max-width: 94%;
  border-style: solid;
  border-color: #31bcc6;
  background-color: white;
}
button {
  width: 120px;
  cursor: pointer;
  border: unset;
  font-size: 1.2em;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background: #31bcc6;
  transition: 0.3s;
  color: white;
  font-weight: bold;
}
button:hover {
  border-radius: 10px 0 10px 0;
}
hr {
  border: 2px solid #d6dfe2;
  margin-top: 30px;
  margin-bottom: 10px;
}


</style>