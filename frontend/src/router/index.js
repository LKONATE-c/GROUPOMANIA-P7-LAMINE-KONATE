import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'
import Onearticle from '@/views/Onearticle.vue'
import Forum from '@/views/Forum.vue'




const routes = [
  {path:'/Home',
  name:'Home',
   component: Home
  },

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
  {path:'/article/:id',
  props:true,
  name:'Onearticle',
   component: Onearticle
  },
  {path:'/Forum',
  name:'Forum',
   component: Forum
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
