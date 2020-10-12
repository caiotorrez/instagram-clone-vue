import {
  findAllPosts
} from '@/api/posts';

export const mutationTypes = {
  SET_POSTS: 'SET_POSTS'
}

// initial state
const state = () => ({
  all: {},
  currentPost: '',
});

// getters
const getters = {
  getPosts: state => Object.values(state.all),
  getPostsById: state => (id) => state.all[id],
};

// actions
const actions = {
  async setPosts({
    commit
  }) {
    const posts = await findAllPosts();
    commit(mutationTypes.SET_POSTS, posts);
  }
};

// mutations
const mutations = {
  [mutationTypes.SET_POSTS](state, posts) {
    const all = posts.reduce((object, value) => {
      object[value.id] = value;
      return object;
    }, {});
    state.all = all;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
