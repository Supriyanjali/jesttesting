import { mapActions, mapGetters } from "vuex";
import DeleteModal from "@/components/DeleteModal";
import _ from "lodash";
import swal from "sweetalert";
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
  mounted() {
    document.getElementById("more").style.display = "none";
  },
  computed: {
    ...mapGetters(["blogsList"]),
    ...mapGetters(["blogToEdit"]),
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
    myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    },
    showModal() {
      this.toBeDeleted = true;
    },
    dontShow() {
      this.toBeDeleted = false;
    },
    async deletedBlog(id) {
      this.toBeDeleted = false;
      this.deleteBlog(id);
      swal({
        text: "Blog has been deleted successfully",
        icon: "success",
      });
      location.reload();
    },
    editingBlog(blog) {
      this.$store.state.blog = blog;
      this.$router.push({ name: "EditBlog", params: { id: blog.id } });
    },
  },
};
