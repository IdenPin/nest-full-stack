import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import axios from 'axios'
import EleForm from 'vue-ele-form'
Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'http://www.localhost:3000'
})
Vue.use(EleForm)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
