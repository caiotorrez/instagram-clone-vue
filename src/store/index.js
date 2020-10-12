import Vue from 'vue';
import Vuex from 'vuex';
import stories from './modules/stories';
import posts from './modules/posts';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    stories,
    posts
  },
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
