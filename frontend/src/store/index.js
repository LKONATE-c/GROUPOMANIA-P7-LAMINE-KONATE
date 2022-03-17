import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user:null,
    token:null,
  },
  mutations: {
    logout(state){
      state.user = null;
    },
    setUser(state, payload){
      state.user = payload;
    }
  },
  actions: {
    login(context, payload){
      return new Promise((resolve)=>{
        axios.post("/api/user/login", payload).then((res)=>{
          console.log(res)
          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
          localStorage.setItem("token", res.data.token)
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
