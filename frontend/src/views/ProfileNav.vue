<template>
    <div class="container">
      
            <aside class="profileNav clo-md-3">
                
                    <img  class="logo" src="../assets/default-user.jpg"/>
                <hr style="color:black"> 
                
                <p>USERfirstname</p>
                <p>userlastname</p>
               
            </aside>
    </div>
</template>

<script>
export default{
    name:"ProfileNav"
}

</script>

<style>

.profileNav{
    border: none;
    width: 200px;
    text-align: center;
    background-color: whitesmoke;
    position: fixed;
    top: 70px;
    left: 10px;
    box-shadow:  0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    border-radius: 1em;
   }
.user-picture{
     width: 100px;
    height: 100px;
    overflow: hidden;
    object-fit: cover;
    margin: 5px;
    border: none;
    border-radius: 50%;
    box-shadow:  0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2)

}
@media only screen and (max-width: 610px) {

  
}
 
</style>