import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'
import Onearticle from '@/views/Onearticle.vue'
import Forum from '@/views/Forum.vue'
import Admin from '@/views/Admin.vue'
import store from '@/store/index'



const routes = [
  

  {path:'/Login',
  name:'Login',
   component: Login
  },
  
  {path:'/Signup',
  name:'Signup',
   component: Signup
  },
  
 
  {path:'/Profile',
  name:'Profile',
   component: Profile
  },
  {path:'/article/:articleid',
  props:true,
  name:'Onearticle',
   component: Onearticle
  },
  {path:'/Forum',
  name:'Forum',
   component: Forum
  },
  {path:'/Admin',
  name:'Admin',
   component: Admin
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})      //Empeche une personne non co d'aller partout sur le site
router.beforeEach((to,from,next)=>{
const user = store.getters["user"]
if (user === null && to.name !== "Login" && to.name !== "Signup"){
  next({name:"Login"})
}else{
  next()
}
})
export default router
