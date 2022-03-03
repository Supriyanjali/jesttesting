import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddBlog from "@/components/AddBlog";
import EditBlog from "@/components/EditBlog";
import ViewBlogs from "@/components/ViewBlogs";
import PreviewBlog from "@/components/PreviewBlog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddBlog",
    component: AddBlog,
  },
  {
    path: "/preview",
    name: "PreviewBlog",
    component: PreviewBlog,
  },
  {
    path: "/",
    name: "ViewBlogs",
    component: ViewBlogs,
  },
  {
    path: "/edit/:id",
    params: true,
    name: "EditBlog",
    component: EditBlog,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
