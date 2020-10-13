import { findAllStories } from "@/api/stories";
import { SET_STORIES } from "../mutation-types";

// initial state
const state = () => ({
  all: {}
});

// getters
const getters = {
  getStories: state => Object.values(state.all)
};

// actions
const actions = {
  async setStories({ commit }) {
    const stories = await findAllStories();
    commit(SET_STORIES, stories);
  }
};

// mutations
const mutations = {
  [SET_STORIES](state, stories) {
    const all = stories.reduce((object, value) => {
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
