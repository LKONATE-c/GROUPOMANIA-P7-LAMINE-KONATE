 <template>
   
    <div id="container">
      <div class="allarticle">
        <allArticle />
      </div>
      <div class="newarticle">
        <newArticle />
      </div>
    </div>
  
  </template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import allArticle from "../components/allArticle";
import newArticle from "../components/newArticle";
export default {
  name: "Forum",
  components: {
    allArticle,
    newArticle,
  },
  data() {
    return {
      token: "",
      allArticle: [],
    };
  },
};
</script>
//----------------------------------------------------------------------------------------------------------------------
<style scoped>

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