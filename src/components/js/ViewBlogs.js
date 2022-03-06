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
      readMore: {},
      blogs: [],
      toShowModel: false,
      filteredBlogs: [],
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
  mounted() {
    this.blogs = this.blogsList;
    this.filteredBlogs = this.blogsList;
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
      console.log("Hii");
      this.filteredBlogs = [];
      this.blogs.filter((blog) => {
        if (
          blog.title.match(this.search) ||
          blog.description.match(this.search)
        ) {
          this.filteredBlogs.push(blog);
        }
      });
    },
    showMore(id) {
      this.$set(this.readMore, id, true);
    },
    showLess(id) {
      this.$set(this.readMore, id, false);
    },
    showModal() {
      this.toShowModel = true;
    },
    dontShow() {
      this.toShowModel = false;
    },
    deletedBlog(id) {
      this.deleteBlog(id);
      this.toShowModel = false;
      window.location.reload();
    },
    editingBlog(blog) {
      this.$store.state.blog = blog;
      this.$router.push({ name: "EditBlog", params: { id: blog.id } });
    },
  },
};
