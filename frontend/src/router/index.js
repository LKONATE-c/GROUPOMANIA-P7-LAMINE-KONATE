import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'
import Onearticle from '@/views/Onearticle.vue'
import Forum from '@/views/Forum.vue'
import Admin from '@/views/Admin.vue'




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
})

export default router
