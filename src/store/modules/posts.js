import { findAllPosts } from "@/api/posts";
import { SET_POSTS } from "../mutation-types";

// initial state
const state = () => ({
  all: {},
  currentPost: ""
});

// getters
const getters = {
  getPosts: state => Object.values(state.all),
  getPostsById: state => id => state.all[id]
};

// actions
const actions = {
  async setPosts({ commit }) {
    const posts = await findAllPosts();
    commit(SET_POSTS, posts);
  }
};

// mutations
const mutations = {
  [SET_POSTS](state, posts) {
    const all = posts.reduce((object, value) => {
      object[value.id] = value;
      return object;
    }, {});
    state.all = { ...all };
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
