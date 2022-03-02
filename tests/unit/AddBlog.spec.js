import { createLocalVue, shallowMount } from '@vue/test-utils'
import AddBlog from '@/components/AddBlog'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

function getStore () {
  const state = {
    // blog: {
    //   id: 1,
    //   title: 'Hii',
    //   description: 'Hello'
    // },
    // blogs: [],
    // count: 1
  }
  const mutations = {
    // ADD_BLOG (state, blog) {
    //   state.blogs = Object.assign({}, blog)
    // }
  }
  const actions = {
    addBlog: jest.fn()
  }
  const getters = {
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


describe('AddBlog.vue', () => {
  let wrapper, vm
  const { store } = getStore()
  beforeEach(() => {
    wrapper = shallowMount(AddBlog, {
      localVue,
      store
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(vm).toBeTruthy()
  })
  it('should add new blog', () => {

    vm.blog = {
      id: 1,
      title: 'Hii sai',
      description: 'Hello'
    }
    vm.submitted = false
    const spy = jest.spyOn(vm, 'addBlog')
    vm.submitBlog()
    expect(spy).toBeCalled()
    expect(spy).toHaveBeenCalledWith(vm.blog)
    expect(vm.submitted).toEqual(true)
  })
  it('should add not add new blog', () => {

    vm.blog = {
      id: 2,
      title: 'Hii chaitanya',
      description: ''
    }
    vm.submitted = false
    const spy = jest.spyOn(vm, 'addBlog')
    vm.submitBlog()
    expect(spy).not.toHaveBeenCalled()
    expect(vm.submitted).toEqual(false)
  })
  it('should not add new blog', () => {

    vm.blog = {
      id: 3,
      title: 'Hii supriya a a a a a a a a a a a a a',
      description: 'asfb'
    }
    vm.submitted = false
    const spy = jest.spyOn(vm, 'addBlog')
    vm.submitBlog()
    expect(spy).not.toHaveBeenCalled()
    expect(vm.submitted).toEqual(false)
  })
})