 
  <template>
    <div class="post-article">
        <div class="user">
        <p>userlastname</p>
        <p>USERfirstname</p>
       
      </div>
      
        <input type="text" 
        placeholder=" Write something...">
    
     
        <img class="article-image" src="" alt="">
      
        <input class="picture" type="button" value="add a picture">
        <button class="button-article" type="submit">Send article</button>
     

    </div>

  </template>


  <script>
      export default{

    name:"Forum"
}
  </script>

  <style>

    .post-article{
      border: 1px solid black;

    }
    
    .user{
      font-size: 10px;
      display: flex;
    }
   
   .button-article{
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

   .picture{
    color: white;
    font-size: 15px;
    border: none;
    background-color: #00ba4d;
    font-size: 16px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    border-radius: .2em;
    cursor: pointer;
   }
   

   @media screen and (max-width: 480px) {
     
     
      
      
     
   }
  </style>
  