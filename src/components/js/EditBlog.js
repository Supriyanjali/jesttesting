import { mapGetters, mapActions } from "vuex";
import swal from "sweetalert";

export default {
  props: ["blog1"],
  data() {
    return {
      blog: this.$store.getters.blogToEdit,
    };
  },
  computed: {
    ...mapGetters(["blogsList"]),
    accept() {
      return (
        this.blog.title &&
        this.blog.description &&
        this.blog.title.split(" ").length < 10
      );
    },
  },
  methods: {
    ...mapActions(["editBlog"]),
    editingBlog() {
      if (this.accept) {
        const editedBlog = {
          id: this.blog.id,
          title: this.blog.title,
          description: this.blog.description,
        };
        this.editBlog(editedBlog);
        swal({
          text: "Blog has been edited successfully",
          icon: "success",
        });
        this.$router.push("/");
      } else if (this.blog.title.split(" ").length >= 10) {
        swal({
          text: "Title must not be greater than 10 words",
          icon: "warning",
        });
      } else {
        swal({
          text: "Fill the details",
          icon: "error",
        });
      }
    },
  },
};
