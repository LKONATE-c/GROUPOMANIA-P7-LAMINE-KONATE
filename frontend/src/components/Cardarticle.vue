<template>
   
  <div class="card">
    <div class="media-body">
			    <!--<p class="m-0">Benjamin Robinson</p>-->
           <p class="commDe">Publié par {{ user.firstname }} {{ user.lastname }} 
             le {{new Date(article.date).toLocaleDateString("fr")
}}</p>
   </div>
    <!--<router-link :to="`/article/${article.id}`">-->
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
     <!--</router-link>-->
    <div>
      <router-link :to="`/article/${article.id}`">
        <!--<img :src="image" />-->
      </router-link>
    </div>
    <!--<p class="commDe">Publié par {{ user.firstname }} {{ user.lastname }}</p>-->
    <router-link :to="`/article/${article.id}`"> See Commentary ...</router-link>
    
		
  </div>
</template>

<script>
export default {
  props: ["article", "user" ]
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
