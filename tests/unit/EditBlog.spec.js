import { createLocalVue, shallowMount } from '@vue/test-utils'
import EditBlog from '@/components/EditBlog'
import ViewBlogs from '@/components/ViewBlogs'
import Vuex from 'vuex'
import Router from 'vue-router'
const localVue = createLocalVue()
localVue.use(Vuex)
let router = new Router({
    routes: [
      {
        path: '/',
        name: 'ViewBlogs',
        component: ViewBlogs
      }
    ]
  })
function getStore () {
  const state = {
    blog: {
      id: 1,
      title: 'Hii',
      description: 'Hello'
    },
    blogs: [ {
        id: 1,
        title: 'Hii',
        description: 'Hello'
      }],
    count: 1
  }
  const mutations = {
  }
  const actions = {
    editBlog: jest.fn()
  }
  const getters = {
    blogsList: (state) => state.blogs,
    blogToEdit: (state) => state.blogs

  }
  const options = {
    state,
    mutations,
    actions,
    getters
  }
  const store = new Vuex.Store(options)

  return {
    store,
    ...options
  }
}


describe('EditBlog.vue', () => {
  let wrapper, vm
  const { store } = getStore()
  beforeEach(() => {
    wrapper = shallowMount(EditBlog, {
      localVue,
      store,
      router,
      mocks:{
          $router:{
              push: jest.fn()
          }
      }
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(vm).toBeTruthy()
  })
  it('edit a blog', () => {
    vm.blog = vm.$store.state.blog
    const spy = jest.spyOn(vm, 'editBlog')
    vm.editingBlog()
    expect(spy).toBeCalled()

  })
  it('not edit a blog', () => {
    vm.blog = {
      id: 3,
      title: '',
      description: ''
    }
    const spy = jest.spyOn(vm, 'editBlog')
    vm.editingBlog()
    expect(spy).not.toHaveBeenCalled()

  })
  it('not edit a blog', () => {
    vm.blog = {
      id: 3,
      title: 'Hii supriya a a a a a a a a a a a a a',
      description: 'asfb'
    }
    const spy = jest.spyOn(vm, 'editBlog')
    vm.editingBlog()
    expect(spy).not.toHaveBeenCalled()
  })
})
