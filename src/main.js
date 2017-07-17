import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import axios from 'axios';

//Vue.use(axios)
Vue.use(VueRouter);


import routes from "./routes.js"



var router = new VueRouter({
    routes,
    mode:'history'
});


new Vue({
   el: '#app',
  router,
  render: h => h(App)
})
