import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGlide from 'vue-glide-js';
import 'vue-glide-js/dist/vue-glide.css';
import store from './store';

Vue.use(VueGlide)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
