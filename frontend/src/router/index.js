import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Forum from '@/views/Forum.vue'
import Profile from '@/views/Profile.vue'





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
  
  {path:'/Forum',
  name:'Forum',
   component: Forum
  },
  {path:'/Profile',
  name:'Profile',
   component: Profile
  },

  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
