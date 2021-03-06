import swal from "sweetalert";
import { mapActions } from "vuex";
import PreviewBlog from "@/components/PreviewBlog";
export default {
  data() {
    return {
      blog: {
        id: this.$store.state.count,
        title: "",
        description: "",
      },
      submitted: false,
    };
  },
  components: {
    PreviewBlog,
  },
  computed: {
    accept() {
      return (
        this.blog.title &&
        this.blog.description &&
        this.blog.title.split(" ").length < 10
      );
    },
  },
  methods: {
    ...mapActions(["addBlog"]),
    submitBlog() {
      if (this.accept) {
        this.addBlog(this.blog);
        swal({
          text: "Blog added successfully",
          icon: "success",
        });
        this.submitted = true;
      } else if (this.blog.title.split(" ").length >= 10) {
        swal({
          text: "Title must not be greater than 10 words",
          icon: "error",
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
