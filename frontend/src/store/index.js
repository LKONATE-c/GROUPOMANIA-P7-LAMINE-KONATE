import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user:null,
    token:null,
  },
  mutations: {
  },
  actions: {
    login(context, payload){
      return new Promise((resolve)=>{
        axios.post("/api/user/login", payload).then((res)=>{
          console.log(res)
          context.state.user = res.data.user;
          
          context.state.token = res.data.token
          resolve()
        }).catch((error)=>{
           console.log(error)
        }) 

      }) 
     
    }
  },
  getters:{
    user(state){
      return state.user
    }
  },
  modules: {
  }
})
