import { mapActions, mapGetters } from "vuex";
import DeleteModal from "@/components/DeleteModal";
import _ from "lodash";
export default {
  components: {
    DeleteModal,
  },
  data() {
    return {
      search: "",
      timeout: null,
      blogs: this.$store.state.blogs,
      toBeDeleted: false,
      filteredBlogs: this.$store.state.blogs,
    };
  },
  directives: {
    rainbow: {
      // eslint-disable-next-line no-unused-vars
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
  },
  computed: {
    ...mapGetters(["blogsList"]),
    blogsListFxn() {
      return this.filteredBlogs;
    },
  },
  methods: {
    ...mapActions(["deleteBlog"]),
    activate: _.debounce(function () {
      this.searchFunc();
    }, 2000),
    searchFunc() {
      this.filteredBlogs = [];
      this.blogs.filter((blog) => {
        if (blog.title.match(this.search)) {
          this.filteredBlogs.push(blog);
        }
      });
    },
    showModal() {
      this.toBeDeleted = true;
    },
    dontShow() {
      this.toBeDeleted = false;
    },
    deletedBlog(id) {
      this.toBeDeleted = false;
      this.deleteBlog(id);
    },
    editingBlog(blog) {
      this.$store.state.blog = blog;
      this.$router.push({ name: "EditBlog", params: { id: blog.id } });
    },
  },
};
