import { createLocalVue, shallowMount } from '@vue/test-utils'
import AddBlog from '@/components/AddBlog'
import Vuex from 'vuex'
const localVue = createLocalVue()
function getStore () {
  const state = {
    blog: {
      id: 1,
      title: 'Hii',
      description: 'Hello'
    },
    blogs: [],
    count: 1
  }
  const mutations = {
    ADD_BLOG (state, blog) {
      state.blogs = Object.assign({}, blog)
    }
  }
  const actions = {
    addBlog: jest.fn()
  }
  const getters = {
    blogsList: () => state.blogs
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

localVue.use(Vuex)
describe('AddBlog.vue', () => {
  let wrapper, vm
  beforeEach(() => {
    wrapper = shallowMount(AddBlog, {
      store: getStore().store
    })
    vm = wrapper.vm
  })

  test('Initialized well', () => {
    expect(vm).toBeTruthy()
  })
  it('should add new blog', () => {
  //  const submitBlog=jest.fn()
    // wrapper.find('button').trigger('click')
    // wrapper.vm.submitBlog()
    
    const spy = jest.spyOn(wrapper.vm, 'submitBlog')
    expect(wrapper.find('button')).toBeTruthy()
    wrapper.find('button').trigger('click')
    expect(spy).toHaveBeenCalled()
    // expect(wrapper.vm.submitBlog()).toBeCalled(vm.$store.actions.addBlog)
    // expect(spy).toBeCalled(vm.$store.actions.addBlog)
    spy.mockRestore()
    // expect(wrapper.vm.submitBlog()).toBeCalled(vm.$store.mutations.ADD_BLOG)
    // expect(vm.$store.state.blogs).toHaveLength(1)
    // expect(wrapper.state.blogs).toEqual([{'id': 1, 'title': 'Hii', 'description': 'Hello'}])
    // expect(wrapper.state.getters.blogsList).toEqual([{'id': 1, 'title': 'Hii', 'description': 'Hello'}])
    // expect(wrapper.state.getters.blogsList).toHaveLength(1)
  })
})

