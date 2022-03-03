import { createLocalVue, shallowMount } from "@vue/test-utils";
import ViewBlogs from "@/components/ViewBlogs";
import EditBlog from "@/components/EditBlog";
import Vuex from "vuex";
import Router from "vue-router";
const localVue = createLocalVue();
localVue.use(Vuex);
let router = new Router({
  routes: [
    {
      path: "/edit/:id",
      params: true,
      name: "EditBlog",
      component: EditBlog,
    },
  ],
});
function getStore() {
  const state = {
    blog: {},
    blogs: [
      {
        id: 1,
        title: "Hii",
        description: "Hello",
      },
    ],
    count: 1,
  };
  const mutations = {};
  const actions = {
    deleteBlog: jest.fn(),
    editBlog: jest.fn(),
  };
  const getters = {
    blogsList: (state) => state.blogs,
  };
  const options = {
    state,
    mutations,
    actions,
    getters,
  };
  const store = new Vuex.Store(options);

  return {
    store,
    ...options,
  };
}

describe("ViewBlogs.vue", () => {
  let wrapper, vm;
  const { store } = getStore();
  beforeEach(() => {
    wrapper = shallowMount(ViewBlogs, {
      localVue,
      store,
      router,
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    });
    vm = wrapper.vm;
  });

  test("Initialized well", () => {
    expect(vm).toBeTruthy();
  });
  it("should view all blogs", () => {
    vm.search = "";
    expect(vm.$store.getters.blogsList).toHaveBeenCalled;
    expect(vm.blogsListFxn).toEqual(vm.$store.state.blogs);
  });
  it("delete method", () => {
    vm.search = "H";
    vm.filteredBlogs = [
      {
        id: 1,
        title: "Hii",
        description: "Hello",
      },
    ];
    vm.toBeDeleted = false;
    vm.showModal();
    expect(vm.toBeDeleted).toBe(true);
    const spy = jest.spyOn(vm, "deleteBlog");
    vm.deletedBlog();
    expect(vm.toBeDeleted).toBe(false);
    expect(spy).toHaveBeenCalled();
  });
  it("delete method without search", () => {
    const spy = jest.spyOn(vm, "deleteBlog");
    vm.toBeDeleted = false;
    vm.showModal();
    expect(vm.toBeDeleted).toBe(true);
    vm.deletedBlog();
    expect(vm.toBeDeleted).toBe(false);
    expect(spy).toHaveBeenCalled();
  });
  it("editing method", () => {
    vm.search = "H";
    vm.filteredBlogs = [
      {
        id: 1,
        title: "Hii",
        description: "Hello",
      },
    ];
    const res = {
      id: 1,
      title: "Hii",
      description: "Hello",
    };
    vm.editingBlog(res);
    expect(vm.$store.state.blog).toEqual(res);
  });
  it("editing method without search", () => {
    vm.$store.state.blogs = [
      {
        id: 1,
        title: "Hii",
        description: "Hello",
      },
    ];
    const res = {
      id: 1,
      title: "Hii",
      description: "Hello",
    };
    vm.editingBlog(res);
    expect(vm.$store.state.blog).toEqual(res);
  });
  it("with a search term", () => {
    vm.search = "H";
    const res = [
      {
        id: 1,
        title: "Hii",
        description: "Hello",
      },
    ];
    vm.activate();
    setTimeout(() => {
      expect(vm.filteredBlogs).toEqual(res);
    }, 500);
  });
});
