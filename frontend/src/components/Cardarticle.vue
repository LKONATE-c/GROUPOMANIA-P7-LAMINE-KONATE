<template>
  <div class="article">
      <div class="author">
        <img class="user-picture" src="" alt="">
          <p>userlastname</p>
          <p>USERfirstname</p>
          <p> CREATE-date</p>
      </div>

            <hr style="color:black"> 

      <div class="article content">
            <p class="content"></p>
            <img  class=""  src="" alt="" >
      
      </div>
      <button class="addcommentary" type="input">Add a commentarry</button>
         <button type="button" class="deletebtn">Delete</button>
    

  </div>
</template>

<script>
export default {
   name:"Article"
}
</script>

<style scoped>
 .deletebtn{
    color: white;
    font-size: 15px;
    border: none;
    background-color: red;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    border-radius: .2em;
    cursor: pointer;
   }
.addcommentary{
    color: white;
    font-size: 15px;
    border: none;
    background-color: #008CBA;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    border-radius: .2em;
    cursor: pointer;
   }
</style>
