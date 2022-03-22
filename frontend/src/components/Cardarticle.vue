<template>
  <div class="card">
    <div class="media-body">
      <p class="commDe">
        published by {{ user.firstname }} {{ user.lastname }} le
        {{ new Date(article.date).toLocaleDateString("fr") }}
      </p>
    </div>
    <hr>

    <h2>{{ article.title }}</h2>
    <img :src="article.imageUrl" v-if="article.imageUrl">
    <p>{{ article.content }}</p>
    <div>
      <router-link :to="`/article/${article.id}`"> </router-link>
    </div>
    <router-link :to="`/article/${article.id}`">
      See Commentary ...
      <span v-if="nbcomments > 0">({{ nbcomments }})</span></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nbcomments: 0,
    };
  },
  props: ["article", "user"],
  methods: {
    getcomments() {
      axios.get("/api/commentaire/all/" + this.article.id).then((res) => {
        this.nbcomments = res.data.length;
      });
    },
  },
  mounted() {
    this.getcomments();
  },
};
</script>

<style scoped>
.card {
  margin-left: 20px;
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 1px 30px 30px 30px;
  background-color: white;
  border-radius: 10px;
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
