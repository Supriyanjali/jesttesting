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
  EDIT_BLOG(state, blog) {
    // console.log('Hii23', blog)
    state.blogs.forEach((b) => {
      if (b.id === blog.id) {
        b = blog;
      }
    });
  },
};

const actions = {
  addBlog({ commit }, blog) {
    // console.log('hbjhjhjhjkkjk')
    commit("ADD_BLOG", blog);
  },
  deleteBlog({ commit }, blog) {
    // console.log('Inside action')
    commit("DELETE_BLOG", blog);
  },
  editBlog({ commit }, blog) {
    // console.log('Hii')
    commit("EDIT_BLOG", blog);
  },
};

const getters = {
  blogsList(state) {
    // console.log('HIIIII')
    return state.blogs;
  },
  blogToEdit(state) {
    console.log("HEHE");
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
