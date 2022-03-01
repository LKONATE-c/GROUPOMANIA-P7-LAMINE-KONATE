import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user:{
      create_on: "2021-12-27T14:48:30.000Z",
email: "abc@grop.com",
firstname: "jean",
id: 1,
lastname: "roche",
password: "123",
picture: null,
role: "customer",
    },
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
