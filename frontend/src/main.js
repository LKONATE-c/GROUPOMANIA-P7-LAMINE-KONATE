import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.js"

axios.defaults.baseURL = "http://localhost:3001";


/*axios.interceptors.request.use((config) => {
  config.headers.common = {
    ...config.headers.common,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function(error) {
    const status = error.response.status;
    if (status === 401) {
      router.replace("/login");
    } else if (status === 404) {
      router.replace("/404");
    }
    return Promise.reject(error);
  }
);*/


createApp(App).use(store).use(router).mount('#app')
