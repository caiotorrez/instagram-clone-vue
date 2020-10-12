import {
  findAllStories
} from '@/api/stories';

export const mutationTypes = {
  SET_STORIES: 'SET_STORIES'
}

// initial state
const state = () => ({
  all: {},
});

// getters
const getters = {
  getStories: state => Object.values(state.all),
};

// actions
const actions = {
  async setStories({
    commit
  }) {
    const stories = await findAllStories();
    commit(mutationTypes.SET_STORIES, stories);
  }
};

// mutations
const mutations = {
  [mutationTypes.SET_STORIES](state, stories) {
    const all = stories.reduce((object, value) => {
      object[value.id] = value;
      return object;
    }, {});
    state.all = all;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
