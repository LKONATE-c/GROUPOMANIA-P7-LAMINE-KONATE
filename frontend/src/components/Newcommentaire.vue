<template>
  <form @submit.prevent="addNewComment" class="newCommentaire">
    <h3>New Comment</h3>
    <div>
      <label for="comment">comment :</label><br />
      <input
        type="comment"
        id="comment"
        placeholder="here your comment"
        v-model="comment"
      />
    </div>
    <button type="submit">SEND</button>
  </form>
</template>

<script>
export default {
  name: "Newcommentaire",

  data() {
    return {
      userId: "",
      comment: "",
      error: "",
    };
  },
  methods: {
    addNewComment: function () {
      console.log(this.comment);
      this.$emit("createcomment", {
        comment: this.comment,
        image: "url",
      });
      this.comment = null
    },
  },
};
</script>

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
