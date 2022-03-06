import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
let store = {};

const state = {
  blogs: [],
  count: 1,
  blog: {},
};
const plugins = [
  createPersistedState({
    storage: window.sessionStorage,
  }),
];

const mutations = {
  ADD_BLOG(state, blog) {
    // console.log('HIIIII')
    state.blogs.push(blog);
    state.count += 1;
  },
  DELETE_BLOG(state, id) {
    let blogs = state.blogs;
    blogs = blogs.filter((eachblog) => eachblog.id !== id);
    state.blogs = blogs;
  },
  GET_BLOGS(state) {
    return state.blogs;
  },
  EDIT_BLOG(state, blog) {
    for (let b in state.blogs) {
      if (b.id === blog.id) {
        b = blog;
        break;
      }
    }
  },
};

const actions = {
  addBlog({ commit }, blog) {
    // console.log('hbjhjhjhjkkjk')
    commit("ADD_BLOG", blog);
  },
  deleteBlog({ commit }, blog) {
    commit("DELETE_BLOG", blog);
  },
  editBlog({ commit }, blog) {
    // console.log('Hii')
    commit("EDIT_BLOG", blog);
  },
  getBlogs({ commit }) {
    commit("GET_BLOGS");
  },
};

const getters = {
  blogsList(state) {
    // console.log('HIIIII')
    return state.blogs;
  },
  blogToEdit(state) {
    // console.log(state.blog);
    return state.blog;
  },
};

store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins,
});

export default store;
