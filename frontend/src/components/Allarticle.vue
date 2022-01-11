<template>
  <div id="allArticle">
    <h3 class="title">Liste des articles</h3>
    <card-article
      :key="article.id"
      v-for="article of articles"
      :title="article.title"
      :content="article.content"
      :user="article.User"
      :image="article.image"
      :id="article.id"

    />
  </div>
  
</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import axios from "axios";
import cardarticle from "./Cardarticle";
export default {
  name: "Allarticle",
  components: { cardarticle },
  data() {
    return {
      articles: [],
      
    };
  },
  methods: {
    async fetchArticle() {
      
      try {
        const { data } = await axios.get("/api/article");
        this.articles = data;
      } catch (error) {
        if (error.status === 401) {
          this.$router.push("/login");
        }
      }
      
    },
  },
  mounted() {
    this.fetchArticle();
  },
};
</script>
//----------------------------------------------------------------------------------------------------------------------
<style scoped>
h3 {
  margin-left: 20px;
  margin-right: 20px;
  background-color: #d2fafa;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
}
#chargement {
  margin-top: 20px;
  color: #31bcc6;
}


</style>