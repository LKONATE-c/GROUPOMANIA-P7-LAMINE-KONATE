<template>
  <div class="newArticle">
    <h3>New article</h3>
    <div>
      <label for="title">Title :</label><br />
      <input
        type="title"
        id="title"
        placeholder="here your title"
        v-model="title"
      />
    </div>
    <div>
      <label for="content">Description :</label><br />
      <input
        type="text"
        id="content"
        placeholder="your message..."
        v-model="content"
      />
    </div>
    <div>
      <input type="file" @change="upload" />
    </div>
    <button type="submit" @click.prevent="addNewArticle">SEND</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newArticle",
  data() {
    return {
      userId: "",
      token: "",
      title: "",
      content: "",
      file: null,
    };
  },
  methods: {
    addNewArticle: function () {
      this.$emit("createarticle", {
        title: this.title,
        content: this.content,
      });
      this.title = null;
      this.content = null;
    },
    upload(e) {
      this.$emit("upload", e.target.files);
    },
  },
};
</script>

<style scoped>
.newarticle {
  flex: 1;
  background-color: #d2fafa;
  height: 290px;
  margin: 20px 20px 20px 20px;
  border-radius: 10px;
  padding-top: 10px;
}
button {
  width: 150px;
  cursor: pointer;
  border: unset;
  font-size: 1.2em;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.5);
  background-color: #31bcc6;
  margin-top: 40px;
  margin-bottom: 60px;
  transition: 0.3s;
  color: white;
  font-weight: bold;
}
button:hover {
  border-radius: 10px 0 10px 0;
}
label {
  margin-right: 10px;
  margin-bottom: 10px;
}
#content,
#title {
  margin-bottom: 15px;
  width: 500px;
  max-width: 94%;
  border-style: solid;
  border-color: #31bcc6;
  background-color: white;
}
</style>
