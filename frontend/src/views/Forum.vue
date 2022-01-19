<template>
   
  <div id="container">
    <div class="allarticle">
      <cardArticle v-for="objet in allArticles"
        :key="objet.article.id"
        :article="objet.article"
        :user="objet.user"
      />
    </div>
    <div class="newarticle">
      <newArticle v-on:create-new-article=" getallarticle($event)" />
    </div>
  </div>
  
</template>
<script>
import axios from "axios";
import cardArticle from "../components/cardArticle.vue";
import newArticle from "../components/newArticle";
export default {
  name: "Forum",
  components: {
    cardArticle,
    newArticle,
  },
  data() {
    return {
      
      allArticles: [],
    };

  },
  computed:{
    user(){
      return this.$store.getters["user"]
    }
  },
  methods: { 
    
    
    
    getallarticle() {
      axios
      .get("/api/article/all/" )
      .then((res) => {
          console.log(res.data)
          res.data.forEach((article)=>{
            axios.get("/api/user/getone/"+ article.userid).then((res)=>{
              this.allArticles.push({
                article:article,
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
        
         
    },
  
  },
  mounted(){
    this.getallarticle();
  }
};
</script>



<style>

#container {
  display: flex;
  justify-content: space-around;
}
.allarticle {
  flex: 2;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
}
.newarticle {
  flex: 1;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 1130px) {
  #container {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .allarticle{
    width: 100%;
  }
  .newarticle {
    width: 100%;
  }
}
</style>