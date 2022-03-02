import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const state = {
  blogs: [],
  count: 1,
  blog: {}
}
const mutations = {
  ADD_BLOG (state, blog) {
    console.log('HIIIII')
    state.blogs.push(blog)
    state.count += 1
  },
  DELETE_BLOG (state, id) {
    let blogs = state.blogs
    blogs = blogs.filter(eachblog => eachblog.id !== id)
    state.blogs = blogs
  },
  EDIT_BLOG (state, blog) {
    console.log('Hii23', blog)
    state.blogs.forEach(b => {
      if (b.id === blog.id) {
        b = blog
      }
    })
  }
}
const actions = {
  addBlog ({commit}, blog) {
    commit('ADD_BLOG', blog)
  },
  deleteBlog ({commit}, blog) {
    // console.log('Inside action')
    commit('DELETE_BLOG', blog)
  },
  editBlog ({commit}, blog) {
    // console.log('Hii')
    commit('EDIT_BLOG', blog)
  }
 
}
const plugins= [createPersistedState({
  storage: window.sessionStorage
})]

const getters = {
  blogsList (state) {
    console.log('HIIIII')
    return state.blogs
  },
  blogToEdit (state) {
    return state.blog
  }
}

export default {
  plugins,
  state,
  getters,
  mutations,
  actions
}

