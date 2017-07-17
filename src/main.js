//vue的入口文件
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import axios from 'axios';

//Vue.use(axios)
Vue.use(VueRouter);
Vue.use(Vuex);

import routes from "./routes.js"

const vue_store=new Vuex.Store({
    state:{
        msg:'this is a demo',
        name:'张三丰'
    }
})



var router = new VueRouter({
    routes,
    mode:'history'
});


new Vue({
   el: '#app',
   store:vue_store,
  router,
  render: h => h(App)
})
